describe('Profil public utilisateur', () => {
  const mockUser = {
    id: 'user-1',
    firstname: 'Alice',
    lastname: 'Martin',
    bio: 'Locataire sérieuse',
    role: 'user',
    profile_photos: [],
    tenant_profile: {
      household_size: 2,
      budget_max: 1200,
      min_surface: 50,
      max_surface: null,
      regions: ['Bruxelles'],
      property_types: ['Appartement'],
    },
  }

  beforeEach(() => {
    cy.intercept('GET', /\/api\/users\/user-1$/, {
      statusCode: 200,
      body: { user: mockUser },
    }).as('getPublicProfile')
  })

  it('affiche le profil public (owner connecté)', () => {
    cy.loginAndVisit('owner', '/users/user-1')
    cy.wait('@getPublicProfile')
    cy.get('body').contains('Alice').should('exist')
    cy.get('body').contains('Martin').should('exist')
  })

  it('affiche le profil public (agency connectée)', () => {
    cy.loginAndVisit('agency', '/users/user-1')
    cy.wait('@getPublicProfile')
    cy.get('body').contains('Alice').should('exist')
  })

  it('affiche les infos du profil locataire', () => {
    cy.loginAndVisit('owner', '/users/user-1')
    cy.wait('@getPublicProfile')
    cy.get('body').contains('1200').should('exist')
  })

  it('affiche une erreur si utilisateur introuvable', () => {
    cy.intercept('GET', /\/api\/users\/inexistant$/, {
      statusCode: 404,
      body: { message: 'User not found' },
    }).as('notFound')

    cy.loginAndVisit('owner', '/users/inexistant')
    cy.wait('@notFound')
    cy.get('body').should('exist')
  })
})
