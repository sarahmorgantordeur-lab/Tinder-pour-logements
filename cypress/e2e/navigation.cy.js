describe('Navigation protégée', () => {
  const privateRoutes = ['/home', '/discussions', '/profile', '/agenda', '/properties/new']

  privateRoutes.forEach((route) => {
    it(`redirige vers / si non connecté sur ${route}`, () => {
      cy.clearLocalStorage()
      cy.visit(route)
      cy.url().should('eq', Cypress.config('baseUrl') + '/')
    })
  })

  it('la page / redirige vers /home si déjà connecté', () => {
    cy.loginAs('tenant')
    cy.visit('/')
    cy.url().should('include', '/home')
  })
})

describe('Navigation header', () => {
  it('le header est visible pour tenant', () => {
    cy.loginAndVisit('tenant', '/home')
    cy.get('header, nav').should('exist')
  })

  it('le header est visible pour owner', () => {
    cy.loginAndVisit('owner', '/home')
    cy.get('header, nav').should('exist')
  })

  it('le header est visible pour agency', () => {
    cy.loginAndVisit('agency', '/home')
    cy.get('header, nav').should('exist')
  })

  it('le lien Agenda est visible dans la navbar pour le tenant', () => {
    cy.loginAndVisit('tenant', '/home')
    cy.get('nav').contains('Agenda').should('exist')
  })

  it('le lien Agenda n\'est pas visible pour owner', () => {
    cy.loginAndVisit('owner', '/home')
    cy.get('nav').contains('Agenda').should('not.exist')
  })

  it('le lien Agenda n\'est pas visible pour agency', () => {
    cy.loginAndVisit('agency', '/home')
    cy.get('nav').contains('Agenda').should('not.exist')
  })
})
