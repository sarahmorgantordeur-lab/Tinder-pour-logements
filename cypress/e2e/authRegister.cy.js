describe("Page d'inscription", () => {

  beforeEach(() => {
    cy.visit('http://localhost:5173/')
    cy.fixture('example').as('users')
    // Basculer vers le formulaire Register
    cy.get('[name="register-btn"]').click()
  })

  const fillRegisterForm = (user) => {
    cy.get('#name').clear().type(user.name)
    cy.get('#surname').clear().type(user.surname)
    cy.get('#email').clear().type(user.email)
    cy.get('#phone').clear().type(user.phone)
    cy.get('#password').clear().type(user.password)
    cy.get('#confirmPassword').clear().type(user.confirmPassword)
  }

  it('vérifier que les inputs acceptent la saisie', function () {
    fillRegisterForm(this.users.validUser)

    cy.get('#name').should('have.value', this.users.validUser.name)
    cy.get('#surname').should('have.value', this.users.validUser.surname)
    cy.get('#email').should('have.value', this.users.validUser.email)
    cy.get('#phone').should('have.value', this.users.validUser.phone)
    cy.get('#password').should('have.value', this.users.validUser.password)
    cy.get('#confirmPassword').should('have.value', this.users.validUser.confirmPassword)
  })

  it("afficher un message d'erreur avec un email déjà utilisé", function () {
    fillRegisterForm(this.users.validUser)

    cy.get('button[type="submit"]').click()

    cy.get('[data-cy="error-message"]').should('be.visible')
  })

})
