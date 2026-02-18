describe('Page de connexion', () => {

  beforeEach(() => {
    cy.visit('http://localhost:5173/')
    cy.fixture('example').as('users')
    // Le formulaire Login est affiché par défaut (isLogin=true)
  })

  const fillLoginForm = (email, password) => {
    cy.get('#email').clear().type(email)
    cy.get('#password').clear().type(password)
  }

  it('vérifier que les inputs acceptent la saisie', function () {
    fillLoginForm(this.users.validUser.email, this.users.validUser.password)

    cy.get('#email').should('have.value', this.users.validUser.email)
    cy.get('#password').should('have.value', this.users.validUser.password)
  })

  it('vérifier que le bouton register bascule vers le formulaire d\'inscription', () => {
    cy.get('[name="register-btn"]').click()

    cy.get('#name').should('exist')
    cy.get('#email').should('exist')
    cy.get('#confirmPassword').should('exist')
  })

  it("afficher un message d'erreur avec des identifiants invalides", function () {
    fillLoginForm(this.users.invalidUser.email, this.users.invalidUser.password)

    cy.get('button[type="submit"]').click()

    cy.get('[data-cy="error-message"]').should('be.visible')
  })

})
