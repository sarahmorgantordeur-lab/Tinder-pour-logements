describe('Page principale', () => {
  it('charge correctement la page d\'accueil', () => {
    cy.visit('/')

    cy.get('.landing-page').should('exist')
    cy.get('.landing-title').should('contain', 'Match Home')
  })
})
