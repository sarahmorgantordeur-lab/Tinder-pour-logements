describe('Connexion', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.fixture('users').as('users')
  })

  it('les champs acceptent la saisie', function () {
    cy.login(this.users.owner.email, this.users.owner.password)
    cy.get('#email').should('have.value', this.users.owner.email)
    cy.get('#password').should('have.value', this.users.owner.password)
  })

  it("bascule vers le formulaire d'inscription", () => {
    cy.get('[data-cy="register-btn"]').click()
    cy.get('#name').should('exist')
    cy.get('#confirmPassword').should('exist')
  })

  it('affiche une erreur avec des identifiants invalides', function () {
    cy.intercept('POST', '**/auth/login', {
      statusCode: 401,
      body: { message: 'Invalid email or password' },
    }).as('loginFail')

    cy.login(this.users.invalidUser.email, this.users.invalidUser.password)
    cy.get('button[type="submit"]').click()
    cy.wait('@loginFail')
    cy.get('[data-cy="error-message"]').should('be.visible')
  })

  it('redirige vers /home après connexion valide (mock)', function () {
    cy.intercept('POST', '**/auth/login', {
      statusCode: 200,
      body: {
        token: 'fake-token',
        user: { id: '1', email: this.users.tenant.email, role: 'user', firstname: 'Alice', lastname: 'Martin' },
      },
    }).as('loginOk')

    cy.login(this.users.tenant.email, this.users.tenant.password)
    cy.get('button[type="submit"]').click()
    cy.wait('@loginOk')
    cy.url().should('include', '/home')
  })

  it('connexion owner réelle', function () {
    cy.loginAs('owner')
    cy.visit('/home')
    cy.url().should('include', '/home')
  })

  it('connexion tenant réelle', function () {
    cy.loginAs('tenant')
    cy.visit('/home')
    cy.url().should('include', '/home')
  })

  it('connexion agency réelle', function () {
    cy.loginAs('agency')
    cy.visit('/home')
    cy.url().should('include', '/home')
  })
})
