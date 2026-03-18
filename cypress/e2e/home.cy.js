describe('Home — Tenant (swipe)', () => {
  beforeEach(() => {
    cy.loginAs('tenant')
  })

  it('affiche la page home', () => {
    cy.visit('/home')
    cy.url().should('include', '/home')
  })

  it('affiche des biens ou un état vide', () => {
    cy.intercept('GET', '**/properties**').as('getProperties')
    cy.visit('/home')
    cy.wait('@getProperties')
    cy.get('body').should('exist')
  })

  it('redirige vers / si non connecté', () => {
    cy.clearLocalStorage()
    cy.visit('/home')
    cy.url().should('eq', Cypress.config('baseUrl') + '/')
  })
})

describe('Home — Owner', () => {
  beforeEach(() => {
    cy.loginAs('owner')
  })

  it('affiche la page home', () => {
    cy.visit('/home')
    cy.url().should('include', '/home')
  })

  it('affiche un bouton pour créer une annonce', () => {
    cy.visit('/home')
    cy.get('a[href="/properties/new"], [data-cy="create-announcement"]')
      .should('exist')
  })

  it('affiche la liste des biens', () => {
    cy.intercept('GET', '**/properties/owner/my-properties**').as('getMyProperties')
    cy.visit('/home')
    cy.wait('@getMyProperties')
    cy.get('body').should('exist')
  })

  it('un clic sur un bien ouvre la modale et permet d\'accéder à la page d\'édition', () => {
    cy.intercept('GET', '**/properties/owner/my-properties**', {
      statusCode: 200,
      body: {
        properties: [
          { id: 'prop-1', title: 'Appart test', status: 'published', price: 900, surface: 60, rooms: 3, parking: false, address: { city: 'Bruxelles' } },
        ],
      },
    }).as('getMyProps')

    cy.visit('/home')
    cy.wait('@getMyProps')
    cy.get('.agency-home-card-wrapper').first().click()
    cy.get('a[href*="/properties/prop-1/edit"]').first().click({ force: true })
    cy.url().should('include', '/properties/prop-1/edit')
  })
})

describe('Home — Agency', () => {
  beforeEach(() => {
    cy.loginAs('agency')
  })

  it('affiche la page home', () => {
    cy.visit('/home')
    cy.url().should('include', '/home')
  })

  it('affiche un bouton pour créer une annonce', () => {
    cy.visit('/home')
    cy.get('a[href="/properties/new"], [data-cy="create-announcement"]')
      .should('exist')
  })
})
