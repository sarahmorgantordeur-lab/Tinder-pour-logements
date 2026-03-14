describe("Inscription", () => {
  beforeEach(() => {
    cy.visit('/')
    cy.fixture('users').as('users')
    cy.get('[data-cy="register-btn"]').click()
  })

  const fillForm = (user) => {
    cy.get('#name').clear().type(user.name)
    cy.get('#surname').clear().type(user.surname)
    cy.get('#email').clear().type(user.email)
    cy.get('#phone').clear().type(user.phone)
    cy.get('#password').clear().type(user.password)
    cy.get('#confirmPassword').clear().type(user.confirmPassword)
  }

  it('les champs acceptent la saisie', function () {
    fillForm(this.users.validUser)
    cy.get('#name').should('have.value', this.users.validUser.name)
    cy.get('#surname').should('have.value', this.users.validUser.surname)
    cy.get('#email').should('have.value', this.users.validUser.email)
    cy.get('#phone').should('have.value', this.users.validUser.phone)
    cy.get('#password').should('have.value', this.users.validUser.password)
    cy.get('#confirmPassword').should('have.value', this.users.validUser.confirmPassword)
  })

  it('bascule vers le formulaire de connexion', () => {
    cy.get('[data-cy="login-btn"]').click()
    cy.get('#email').should('exist')
    cy.get('#password').should('exist')
    cy.get('#name').should('not.exist')
  })

  it('affiche une erreur si email déjà utilisé', function () {
    cy.intercept('POST', '**/auth/register', {
      statusCode: 409,
      body: { message: 'This email is already taken' },
    }).as('registerFail')

    fillForm(this.users.validUser)
    cy.get('button[type="submit"]').click()
    cy.wait('@registerFail')
    cy.get('[data-cy="error-message"]').should('be.visible')
  })

  it('les rôles sont sélectionnables via les cartes icônes', () => {
    cy.get('.icon-card').should('have.length.at.least', 3)
    cy.get('.icon-card').eq(0).click()
    cy.get('.icon-card').eq(1).click()
    cy.get('.icon-card').eq(2).click()
  })

  it('inscription réussie redirige vers /home (mock)', function () {
    cy.intercept('POST', '**/auth/register', {
      statusCode: 201,
      body: {
        token: 'fake-token',
        user: { id: '99', email: this.users.validUser.email, role: 'user', firstname: 'Sarah', lastname: 'Tordeur' },
      },
    }).as('registerOk')

    fillForm(this.users.validUser)
    cy.get('button[type="submit"]').click()
    cy.wait('@registerOk')
    cy.url().should('include', '/home')
  })
})
