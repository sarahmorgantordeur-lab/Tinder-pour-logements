describe('Agenda', () => {
  const mockOwnerAppointments = [
    {
      id: 'appt-1',
      title: 'Visite appartement Ixelles',
      date: new Date(Date.now() + 86400000).toISOString(),
      notes: 'Prévoir 30 minutes',
      tenant: { id: 'user-1', firstname: 'Alice', lastname: 'Martin', email: 'alice@test.be' },
      property: { id: 'prop-1', title: 'Bel appartement', address: { city: 'Ixelles' } },
    },
  ]

  const mockTenantAppointments = [
    {
      id: 'appt-1',
      title: 'Visite appartement Ixelles',
      date: new Date(Date.now() + 86400000).toISOString(),
      notes: 'Rendez-vous à 14h devant l\'immeuble.',
      owner: { id: 'owner-1', firstname: 'Thomas', lastname: 'Dupont', email: 'thomas@test.be' },
      property: { id: 'prop-1', title: 'Bel appartement', address: { city: 'Ixelles' } },
    },
  ]

  // ── Owner ─────────────────────────────────────────
  describe('Owner', () => {
    beforeEach(() => {
      cy.intercept('GET', '**/api/appointments', { statusCode: 200, body: { appointments: mockOwnerAppointments } }).as('getAppointments')
      cy.intercept('GET', '**/properties/owner/my-properties**', { statusCode: 200, body: { properties: [{ id: 'prop-1', title: 'Bel appartement', address: { city: 'Ixelles' } }] } }).as('getProperties')
      cy.intercept('GET', '**/conversations/owner**', {
        statusCode: 200,
        body: { conversations: [{ tenant: { id: 'user-1', firstname: 'Alice', lastname: 'Martin', email: 'alice@test.be' } }] },
      }).as('getConversations')
      cy.loginAndVisit('owner', '/agenda')
    })

    it('affiche la page agenda', () => {
      cy.url().should('include', '/agenda')
    })

    it('affiche les rendez-vous existants', () => {
      cy.wait('@getAppointments')
      cy.get('body').contains('Visite appartement Ixelles').should('exist')
    })

    it('affiche le nom du tenant et du bien', () => {
      cy.wait('@getAppointments')
      cy.get('body').contains('Alice Martin').should('exist')
      cy.get('body').contains('Bel appartement').should('exist')
    })

    it('affiche le bouton Nouveau rendez-vous', () => {
      cy.get('button').contains('+ Nouveau rendez-vous').should('exist')
    })

    it('ouvre le formulaire de création de rdv', () => {
      cy.get('button').contains('+ Nouveau rendez-vous').click()
      cy.get('body').contains('Nouveau rendez-vous').should('exist')
    })

    it('supprime un rendez-vous (mock)', () => {
      cy.intercept('DELETE', '**/appointments/**', { statusCode: 200, body: { message: 'Deleted' } }).as('deleteAppt')
      cy.wait('@getAppointments')
      cy.get('button').contains(/supprimer/i).first().click()
      cy.wait('@deleteAppt')
    })

    it('refuse un créneau en conflit (mock)', () => {
      cy.intercept('POST', '**/appointments', {
        statusCode: 409,
        body: { message: 'Créneau indisponible : vous avez déjà "Visite" à 01/04/2026 10:00.' },
      }).as('conflictAppt')

      cy.wait('@getProperties')
      cy.wait('@getConversations')
      cy.get('button').contains('+ Nouveau rendez-vous').click()
      cy.get('.agenda-form input[type="text"]').first().type('Visite en conflit')
      cy.get('.agenda-form input[type="datetime-local"]').type('2026-04-01T10:00')
      cy.get('.agenda-form select').first().select('prop-1')
      cy.get('.searchable-select__input').type('Alice')
      cy.get('.searchable-select__option').first().click()
      cy.get('button').contains('Créer').click()
      cy.wait('@conflictAppt')
      cy.get('body').contains(/créneau indisponible/i).should('exist')
    })

    it('annule la création de rdv', () => {
      cy.get('button').contains('+ Nouveau rendez-vous').click()
      cy.get('.agenda-modal-title').should('exist')
      cy.get('button').contains('Annuler').click()
      cy.get('.agenda-modal-title').should('not.exist')
    })
  })

  // ── Agency ────────────────────────────────────────
  describe('Agency', () => {
    beforeEach(() => {
      cy.intercept('GET', '**/api/appointments', { statusCode: 200, body: { appointments: mockOwnerAppointments } }).as('getAppointments')
      cy.intercept('GET', '**/properties/owner/my-properties**', { statusCode: 200, body: { properties: [] } }).as('getProperties')
      cy.intercept('GET', '**/conversations/owner**', { statusCode: 200, body: { conversations: [] } }).as('getConversations')
      cy.loginAndVisit('agency', '/agenda')
    })

    it('affiche la page agenda', () => {
      cy.url().should('include', '/agenda')
    })

    it('affiche les rendez-vous', () => {
      cy.wait('@getAppointments')
      cy.get('body').contains('Visite appartement Ixelles').should('exist')
    })

    it('affiche le bouton Nouveau rendez-vous', () => {
      cy.get('button').contains('+ Nouveau rendez-vous').should('exist')
    })
  })

  // ── Tenant ────────────────────────────────────────
  describe('Tenant', () => {
    beforeEach(() => {
      cy.intercept('GET', '**/appointments/tenant**', { statusCode: 200, body: { appointments: mockTenantAppointments } }).as('getTenantAppointments')
      cy.loginAndVisit('tenant', '/agenda')
    })

    it('affiche la page mes rendez-vous', () => {
      cy.url().should('include', '/agenda')
      cy.get('body').contains(/mes rendez-vous/i).should('exist')
    })

    it('affiche les visites planifiées', () => {
      cy.wait('@getTenantAppointments')
      cy.get('body').contains('Visite appartement Ixelles').should('exist')
      cy.get('body').contains('Bel appartement').should('exist')
    })

    it('affiche le nom de l\'organisateur', () => {
      cy.wait('@getTenantAppointments')
      cy.get('body').contains('Thomas Dupont').should('exist')
    })

    it('n\'affiche pas le bouton Nouveau rendez-vous', () => {
      cy.get('button').contains('+ Nouveau rendez-vous').should('not.exist')
    })

    it('n\'affiche pas le bouton Modifier', () => {
      cy.wait('@getTenantAppointments')
      cy.get('button').contains(/modifier/i).should('not.exist')
    })

    it('affiche le bouton Pas disponible', () => {
      cy.wait('@getTenantAppointments')
      cy.get('button').contains(/pas disponible/i).should('exist')
    })

    it('retire le rdv au clic sur Pas disponible (mock)', () => {
      cy.intercept('DELETE', '**/appointments/**', { statusCode: 200, body: { message: 'Deleted' } }).as('deleteAppt')
      cy.wait('@getTenantAppointments')
      cy.get('button').contains(/pas disponible/i).first().click()
      cy.get('.agenda-confirm-yes').click()
      cy.wait('@deleteAppt')
      cy.get('body').contains('Visite appartement Ixelles').should('not.exist')
    })
  })
})
