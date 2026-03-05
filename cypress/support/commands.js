Cypress.Commands.add('login', (email, password) => {
  cy.get('#email').clear().type(email)
  cy.get('#password').clear().type(password)
})
