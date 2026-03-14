describe('Créer une annonce', () => {
  beforeEach(() => {
    cy.loginAndVisit('owner', '/properties/new')
  })

  it('affiche le formulaire de création', () => {
    cy.get('form').should('exist')
    cy.get('input[name="title"]').should('exist')
    cy.get('input[name="price"]').should('exist')
    cy.get('input[name="surface"]').should('exist')
    cy.get('input[name="rooms"]').should('exist')
  })

  it('les champs adresse sont présents', () => {
    cy.get('input[name="address.number"]').should('exist')
    cy.get('input[name="address.street"]').should('exist')
    cy.get('input[name="address.city"]').should('exist')
    cy.get('input[name="address.postal_code"]').should('exist')
  })

  it('soumet le formulaire (mock)', () => {
    cy.intercept('POST', '**/properties', {
      statusCode: 201,
      body: { property: { id: 'new-id', title: 'Bel appartement test' } },
    }).as('createProp')

    cy.get('input[name="title"]').type('Bel appartement test')
    cy.get('textarea[name="description"]').type('Description de test')
    cy.get('input[name="price"]').type('900')
    cy.get('input[name="surface"]').type('60')
    cy.get('input[name="rooms"]').type('3')
    cy.get('input[name="address.number"]').type('10')
    cy.get('input[name="address.street"]').type('Rue de la Paix')
    cy.get('input[name="address.city"]').type('Bruxelles')
    cy.get('input[name="address.postal_code"]').type('1000')
    cy.get('input[name="address.country"]').clear().type('Belgique')
    cy.get('button[type="submit"]').click()
    cy.wait('@createProp')
    cy.get('body').contains(/créée avec succès/i).should('exist')
  })

  it('affiche une erreur si la sauvegarde échoue', () => {
    cy.intercept('POST', '**/properties', {
      statusCode: 500,
      body: { message: 'Erreur serveur' },
    }).as('createFail')

    cy.get('input[name="title"]').type('Test')
    cy.get('input[name="price"]').type('100')
    cy.get('input[name="surface"]').type('20')
    cy.get('input[name="rooms"]').type('1')
    cy.get('input[name="address.number"]').type('1')
    cy.get('input[name="address.street"]').type('Rue test')
    cy.get('input[name="address.city"]').type('Liège')
    cy.get('input[name="address.postal_code"]').type('4000')
    cy.get('button[type="submit"]').click()
    cy.wait('@createFail')
    cy.get('body').contains(/erreur/i).should('exist')
  })

  it('le bouton Annuler navigue en arrière', () => {
    cy.get('button').contains(/annuler/i).click()
    cy.url().should('not.include', '/properties/new')
  })
})

describe('Modifier une annonce', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/properties/prop-edit', {
      statusCode: 200,
      body: {
        property: {
          id: 'prop-edit',
          title: 'Appartement existant',
          description: 'Desc test',
          property_type: 'Appartement',
          price: 1000,
          surface: 70,
          rooms: 3,
          parking: false,
          status: 'published',
          address: { number: '1', box: '', street: 'Rue test', city: 'Liège', postal_code: '4000', country: 'Belgique' },
        },
      },
    }).as('getProperty')
  })

  it('charge les données existantes', () => {
    cy.loginAndVisit('owner', '/properties/prop-edit/edit')
    cy.wait('@getProperty')
    cy.get('input[name="title"]').should('have.value', 'Appartement existant')
    cy.get('input[name="price"]').should('have.value', '1000')
  })

  it('affiche la section statut en mode édition', () => {
    cy.loginAndVisit('owner', '/properties/prop-edit/edit')
    cy.wait('@getProperty')
    cy.get('body').contains(/statut/i).should('exist')
  })

  it('met à jour l\'annonce (mock)', () => {
    cy.intercept('PUT', '**/properties/prop-edit', {
      statusCode: 200,
      body: { property: { id: 'prop-edit', title: 'Titre modifié' } },
    }).as('updateProp')

    cy.loginAndVisit('owner', '/properties/prop-edit/edit')
    cy.wait('@getProperty')
    cy.get('input[name="title"]').clear().type('Titre modifié')
    cy.get('button[type="submit"]').click()
    cy.wait('@updateProp')
    cy.get('body').contains(/mise à jour avec succès/i).should('exist')
  })
})
