describe('Discussions', () => {
  const mockConversations = [
    {
      id: 'conv-1',
      property_id: 'prop-1',
      tenant_id: 'user-1',
      property: { id: 'prop-1', title: 'Bel appartement', address: { city: 'Bruxelles' }, photos: [] },
      tenant:   { id: 'user-1', firstname: 'Alice',  lastname: 'Martin' },
      owner:    { id: 'owner-1', firstname: 'Thomas', lastname: 'Dupont' },
      messages: [{ id: 'lm-1', content: 'Bonjour !', sender: { id: 'user-1' }, created_at: new Date().toISOString() }],
      _count:   { messages: 0 },
    },
  ]

  const plainMsg = {
    id: 'msg-1',
    content: 'Bonjour !',
    sender: { id: 'user-1', firstname: 'Alice', lastname: 'Martin' },
    created_at: new Date().toISOString(),
  }

  const docRequestMsg = {
    id: 'msg-2',
    content: JSON.stringify({
      type: 'doc_request',
      text: 'Veuillez remplir et renvoyer ce document.',
      templateUrl: '/uploads/documents/template.pdf',
      templateLabel: 'contrat.pdf',
    }),
    sender: { id: 'owner-1', firstname: 'Thomas', lastname: 'Dupont' },
    created_at: new Date().toISOString(),
  }

  const docUploadMsg = {
    id: 'msg-3',
    content: JSON.stringify({
      type: 'doc_upload',
      url: '/uploads/documents/filled.pdf',
      label: 'mon-dossier.pdf',
    }),
    sender: { id: 'user-1', firstname: 'Alice', lastname: 'Martin' },
    created_at: new Date().toISOString(),
  }

  const imageMsg = {
    id: 'msg-4',
    content: JSON.stringify({
      type: 'image',
      url: '/uploads/documents/photo.jpg',
      label: 'photo.jpg',
    }),
    sender: { id: 'owner-1', firstname: 'Thomas', lastname: 'Dupont' },
    created_at: new Date().toISOString(),
  }

  // Ouvre conv-1 et attend les messages
  function openConversation(messages = [plainMsg]) {
    cy.intercept('GET', '**/conversations/conv-1/messages**', {
      statusCode: 200,
      body: { messages },
    }).as('getMsgs')
    cy.get('.discussion-conv-item').first().click()
    cy.wait('@getMsgs')
  }

  // Fake file helpers
  const fakePdf = { contents: Cypress.Buffer.from('fake pdf'), fileName: 'dossier.pdf', mimeType: 'application/pdf' }
  const fakeImg = { contents: Cypress.Buffer.from('fake img'), fileName: 'photo.jpg',  mimeType: 'image/jpeg' }

  // ── Tenant ──────────────────────────────────────────────────
  describe('Tenant', () => {
    beforeEach(() => {
      cy.intercept('GET', '**/conversations**', {
        statusCode: 200,
        body: { conversations: mockConversations },
      }).as('getConvs')
      cy.loginAndVisit('tenant', '/discussions')
    })

    it('affiche la page des discussions', () => {
      cy.url().should('include', '/discussions')
    })

    it('affiche les conversations', () => {
      cy.get('body').contains('Bel appartement').should('exist')
    })

    it('affiche les messages texte', () => {
      openConversation([plainMsg])
      cy.get('body').contains('Bonjour !').should('exist')
    })

    it('affiche un message doc_request comme une carte', () => {
      openConversation([docRequestMsg])
      cy.get('.discussion-doc-card--request').should('exist')
      cy.get('body').contains('Demande de document').should('exist')
    })

    it('affiche le lien de téléchargement du document vierge', () => {
      openConversation([docRequestMsg])
      cy.get('.discussion-doc-template-link').should('exist')
        .and('contain', 'contrat.pdf')
    })

    it('affiche le bouton "Envoyer le document complété" pour le tenant', () => {
      openConversation([docRequestMsg])
      cy.get('.discussion-doc-upload-btn').should('exist')
        .and('contain', 'Envoyer le document complété')
    })

    it('envoie un document PDF en réponse à une demande (mock)', () => {
      cy.intercept('POST', '**/users/documents', {
        statusCode: 201,
        body: { document: { url: '/uploads/documents/filled.pdf' } },
      }).as('uploadDoc')
      cy.intercept('POST', '**/conversations/conv-1/messages', {
        statusCode: 201,
        body: { data: docUploadMsg },
      }).as('sendMsg')

      openConversation([docRequestMsg])
      cy.get('.discussion-doc-card--request input[type="file"]')
        .selectFile(fakePdf, { force: true })
      cy.wait('@uploadDoc')
      cy.wait('@sendMsg').its('request.body.content')
        .should('include', '"type":"doc_upload"')
    })

    it('affiche un message doc_upload comme une carte avec lien', () => {
      openConversation([docUploadMsg])
      cy.get('.discussion-doc-card--upload').should('exist')
      cy.get('.discussion-doc-link').should('contain', 'mon-dossier.pdf')
    })

    it('affiche un message image comme une balise img', () => {
      openConversation([imageMsg])
      cy.get('.discussion-msg-image').should('exist')
    })

    it("n'affiche pas le bouton photo dans la zone d'envoi", () => {
      openConversation()
      cy.get('.discussion-photo-btn').should('not.exist')
    })

    it('affiche "📋 Demande de document" comme dernier message dans la sidebar', () => {
      const convsDocReq = [{
        ...mockConversations[0],
        messages: [{ ...docRequestMsg, sender: { id: 'owner-1' } }],
      }]
      cy.intercept('GET', '**/conversations**', {
        statusCode: 200,
        body: { conversations: convsDocReq },
      })
      cy.visit('/discussions')
      cy.get('.discussion-conv-last').should('contain', '📋 Demande de document')
    })

    it('affiche "🖼️ Photo" comme dernier message dans la sidebar', () => {
      const convsImg = [{
        ...mockConversations[0],
        messages: [{ ...imageMsg, sender: { id: 'owner-1' } }],
      }]
      cy.intercept('GET', '**/conversations**', {
        statusCode: 200,
        body: { conversations: convsImg },
      })
      cy.visit('/discussions')
      cy.get('.discussion-conv-last').should('contain', '🖼️ Photo')
    })
  })

  // ── Owner ────────────────────────────────────────────────────
  describe('Owner', () => {
    beforeEach(() => {
      cy.intercept('GET', '**/conversations/owner**', {
        statusCode: 200,
        body: { conversations: mockConversations },
      }).as('getConvs')
      cy.loginAndVisit('owner', '/discussions')
    })

    it('affiche la page', () => {
      cy.url().should('include', '/discussions')
    })

    it('affiche les conversations groupées par bien', () => {
      cy.get('body').contains('Bel appartement').should('exist')
    })

    it('affiche le lien vers le profil du locataire', () => {
      openConversation()
      cy.get('a[href*="/users/user-1"]').should('exist')
    })

    it('affiche le bouton "Demander un document" après sélection d\'une conversation', () => {
      openConversation()
      cy.get('button').contains('Demander un document').should('exist')
    })

    it('affiche le bouton photo 🖼️ dans la zone d\'envoi', () => {
      openConversation()
      cy.get('.discussion-photo-btn').should('exist')
    })

    it('envoie une demande de document avec template (mock)', () => {
      cy.intercept('POST', '**/users/documents', {
        statusCode: 201,
        body: { document: { url: '/uploads/documents/template.pdf' } },
      }).as('uploadDoc')
      cy.intercept('POST', '**/conversations/conv-1/messages', {
        statusCode: 201,
        body: { data: docRequestMsg },
      }).as('sendMsg')

      openConversation()
      cy.get('.discussion-thread-actions input[type="file"]')
        .selectFile(fakePdf, { force: true })
      cy.wait('@uploadDoc')
      cy.wait('@sendMsg').its('request.body.content')
        .should('include', '"type":"doc_request"')
    })

    it('envoie une photo dans la conversation (mock)', () => {
      cy.intercept('POST', '**/users/documents', {
        statusCode: 201,
        body: { document: { url: '/uploads/documents/photo.jpg' } },
      }).as('uploadPhoto')
      cy.intercept('POST', '**/conversations/conv-1/messages', {
        statusCode: 201,
        body: { data: imageMsg },
      }).as('sendMsg')

      openConversation()
      cy.get('.discussion-send-row input[type="file"]')
        .selectFile(fakeImg, { force: true })
      cy.wait('@uploadPhoto')
      cy.wait('@sendMsg').its('request.body.content')
        .should('include', '"type":"image"')
    })

    it('n\'affiche pas le bouton "Envoyer le document complété" pour l\'owner', () => {
      openConversation([docRequestMsg])
      cy.get('.discussion-doc-upload-btn').should('not.exist')
    })

    it('affiche un message doc_request comme une carte', () => {
      openConversation([docRequestMsg])
      cy.get('.discussion-doc-card--request').should('exist')
    })

    it('affiche un message image comme une balise img', () => {
      openConversation([imageMsg])
      cy.get('.discussion-msg-image').should('exist')
    })

    it('affiche "📋 Demande de document" comme dernier message dans la sidebar', () => {
      const convsDocReq = [{
        ...mockConversations[0],
        messages: [{ ...docRequestMsg, sender: { id: 'owner-1' } }],
      }]
      cy.intercept('GET', '**/conversations/owner**', {
        statusCode: 200,
        body: { conversations: convsDocReq },
      })
      cy.visit('/discussions')
      cy.get('.discussion-conv-last').should('contain', '📋 Demande de document')
    })
  })

  // ── Agency ───────────────────────────────────────────────────
  describe('Agency', () => {
    beforeEach(() => {
      cy.intercept('GET', '**/conversations/owner**', {
        statusCode: 200,
        body: { conversations: mockConversations },
      }).as('getConvs')
      cy.loginAndVisit('agency', '/discussions')
    })

    it('affiche la page', () => {
      cy.url().should('include', '/discussions')
    })

    it('affiche le lien vers le profil du locataire', () => {
      openConversation()
      cy.get('a[href*="/users/user-1"]').should('exist')
    })

    it('affiche le bouton "Demander un document"', () => {
      openConversation()
      cy.get('button').contains('Demander un document').should('exist')
    })

    it('affiche le bouton photo 🖼️ dans la zone d\'envoi', () => {
      openConversation()
      cy.get('.discussion-photo-btn').should('exist')
    })

    it('n\'affiche pas le bouton "Envoyer le document complété" pour l\'agency', () => {
      openConversation([docRequestMsg])
      cy.get('.discussion-doc-upload-btn').should('not.exist')
    })
  })
})
