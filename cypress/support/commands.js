const API_URL = 'http://localhost:3000/api'

// -- Connexion via l'UI (saisie du formulaire) --
Cypress.Commands.add('login', (email, password) => {
  cy.get('#email').clear().type(email)
  cy.get('#password').clear().type(password)
})

// -- Connexion rapide via API (session mise en cache par rôle) --
Cypress.Commands.add('loginAs', (role) => {
  cy.session(role, () => {
    cy.fixture('users').then((users) => {
      const user = users[role]
      cy.request('POST', `${API_URL}/auth/login`, {
        email: user.email,
        password: user.password,
      }).then(({ body }) => {
        window.localStorage.setItem('token', body.token)
        window.localStorage.setItem('user', JSON.stringify(body.user))
      })
    })
  })
})

// -- Connexion puis navigation --
Cypress.Commands.add('loginAndVisit', (role, path = '/home') => {
  cy.loginAs(role)
  cy.visit(path)
})
