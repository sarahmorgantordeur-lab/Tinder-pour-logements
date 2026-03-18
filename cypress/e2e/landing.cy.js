describe('Landing Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('affiche la page d\'accueil correctement', () => {
    cy.get('.landing-page').should('exist')
  })

  it('affiche les boutons connexion et inscription', () => {
    cy.get('[data-cy="login-btn"], button').contains(/connexion|sign in|se connecter/i).should('exist')
    cy.get('[data-cy="register-btn"], button').contains(/inscription|sign up|s'inscrire/i).should('exist')
  })

  it('redirige vers /home si déjà connecté', () => {
    cy.loginAs('tenant')
    cy.visit('/')
    cy.url().should('include', '/home')
  })

  it('affiche le formulaire de connexion par défaut', () => {
    cy.get('#email').should('exist')
    cy.get('#password').should('exist')
  })
})
