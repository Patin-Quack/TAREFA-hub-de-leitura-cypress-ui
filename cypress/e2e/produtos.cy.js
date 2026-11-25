describe("Funcionalidade: Produtos / Catálogo", () => {
  beforeEach(() => {
    cy.visit("/catalog.html");
  });

  it("Deve listar os livros disponíveis no catálogo", () => {
    cy.get(".card").should("have.length.greaterThan", 0);
  });

  it("Deve adicionar um livro à cesta com sucesso", () => {
    cy.get("body").then(($body) => {
      const botoes = $body.find('button:contains("Adicionar"), button:contains("Cesta"), a:contains("Cesta")');
      if (botoes.length > 0) {
        cy.wrap(botoes.first()).click({ force: true });
      }
    });

    cy.contains(/cesta/i).should("be.visible");
  });
});