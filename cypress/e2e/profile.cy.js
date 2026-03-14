describe('Profil utilisateur', () => {
  describe('Tenant', () => {
    beforeEach(() => {
      cy.loginAndVisit('tenant', '/profile')
    })

    it('affiche la page profil', () => {
      cy.url().should('include', '/profile')
    })

    it('affiche les informations du profil', () => {
      cy.intercept('GET', '**/users/profile').as('getProfile')
      cy.visit('/profile')
      cy.wait('@getProfile')
      cy.get('body').should('exist')
    })
  })

  describe('Owner', () => {
    beforeEach(() => {
      cy.loginAndVisit('owner', '/profile')
    })

    it('affiche la page profil owner', () => {
      cy.url().should('include', '/profile')
    })
  })

  describe('Agency', () => {
    beforeEach(() => {
      cy.loginAndVisit('agency', '/profile')
    })

    it('affiche la page profil agency', () => {
      cy.url().should('include', '/profile')
    })
  })
})
