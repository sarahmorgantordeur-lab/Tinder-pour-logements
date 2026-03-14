describe('Discussions', () => {
  const mockConversations = [
    {
      id: 'conv-1',
      property_id: 'prop-1',
      property: { id: 'prop-1', title: 'Bel appartement', address: { city: 'Bruxelles' } },
      tenant: { id: 'user-1', firstname: 'Alice', lastname: 'Martin' },
      last_message: { content: 'Bonjour, est-il disponible ?', created_at: new Date().toISOString() },
    },
  ]

  describe('Tenant', () => {
    beforeEach(() => {
      cy.loginAs('tenant')
    })

    it('affiche la page des discussions', () => {
      cy.intercept('GET', '**/conversations**', { statusCode: 200, body: { conversations: mockConversations } })
      cy.visit('/discussions')
      cy.url().should('include', '/discussions')
    })

    it('affiche les conversations', () => {
      cy.intercept('GET', '**/conversations**', { statusCode: 200, body: { conversations: mockConversations } })
      cy.visit('/discussions')
      cy.get('body').contains('Bel appartement').should('exist')
    })

    it('clique sur une conversation et affiche les messages', () => {
      cy.intercept('GET', '**/conversations**', { statusCode: 200, body: { conversations: mockConversations } })
      cy.intercept('GET', '**/conversations/conv-1/messages**', {
        statusCode: 200,
        body: { messages: [{ id: 'msg-1', content: 'Bonjour !', sender_id: 'user-1', created_at: new Date().toISOString() }] },
      }).as('getMsgs')

      cy.visit('/discussions')
      cy.get('body').contains('Bel appartement').click()
      cy.wait('@getMsgs')
      cy.get('body').contains('Bonjour !').should('exist')
    })
  })

  describe('Owner', () => {
    beforeEach(() => {
      cy.loginAs('owner')
    })

    it('affiche la page', () => {
      cy.intercept('GET', '**/conversations/owner**', { statusCode: 200, body: { conversations: mockConversations } })
      cy.visit('/discussions')
      cy.url().should('include', '/discussions')
    })

    it('affiche les conversations groupées par bien', () => {
      cy.intercept('GET', '**/conversations/owner**', { statusCode: 200, body: { conversations: mockConversations } })
      cy.visit('/discussions')
      cy.get('body').contains('Bel appartement').should('exist')
    })

    it('affiche le bouton voir le profil du client après sélection d\'une conversation', () => {
      cy.intercept('GET', '**/conversations/owner**', { statusCode: 200, body: { conversations: mockConversations } })
      cy.intercept('GET', '**/conversations/conv-1/messages**', {
        statusCode: 200,
        body: { messages: [] },
      }).as('getMsgs')

      cy.visit('/discussions')
      cy.get('.discussion-conv-item').first().click()
      cy.wait('@getMsgs')
      cy.get('a[href*="/users/user-1"]').should('exist')
    })
  })

  describe('Agency', () => {
    beforeEach(() => {
      cy.loginAs('agency')
    })

    it('affiche la page', () => {
      cy.intercept('GET', '**/conversations/owner**', { statusCode: 200, body: { conversations: mockConversations } })
      cy.visit('/discussions')
      cy.url().should('include', '/discussions')
    })

    it('affiche le bouton voir le profil du client', () => {
      cy.intercept('GET', '**/conversations/owner**', { statusCode: 200, body: { conversations: mockConversations } })
      cy.intercept('GET', '**/conversations/conv-1/messages**', {
        statusCode: 200,
        body: { messages: [] },
      }).as('getMsgs')

      cy.visit('/discussions')
      cy.get('.discussion-conv-item').first().click()
      cy.wait('@getMsgs')
      cy.get('a[href*="/users/user-1"]').should('exist')
    })
  })
})
