describe('Page de connexion', () => {

  before(() => {
    cy.log('🔥 before: initialisation globale');
  });

  beforeEach(() => {
    cy.log('➡️ beforeEach: visite de la page login');
    cy.visit('/login');
  });

  after(() => {
    cy.log('🧹 after: nettoyage global');
  });

  afterEach(() => {
    cy.log('⬅️ afterEach: fin du test');
  });



  
  it("vérifier que la valeur de l'input email a bien été saisie", () => {
    cy.get('#email')
      .type('test@example.com')
      .should('have.value', 'test@example.com');
  });

  it("vérifier que la valeur de l'input mot de passe a bien été saisie", () => {
    cy.get('#password')
      .type('motdepasse123')
      .should('have.value', 'motdepasse123');
  });

  it('afficher un message d\'erreur avec des identifiants invalides', () => {
    cy.get('#email').type('mauvais@example.com');
    cy.get('#password').type('mauvaismdp');
    cy.get('button[type="submit"]').click();

    cy.get('p.text-red-600').should('be.visible');
  });

  it('vérifier que le bouton de connexion est bien cliquable', () => {
    cy.get('button[type="submit"]')
      .should('be.visible')
      .and('not.be.disabled')
      .click();
  });
});
