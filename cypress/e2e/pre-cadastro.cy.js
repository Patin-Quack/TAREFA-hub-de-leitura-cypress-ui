describe("Funcionalidade: Pré-cadastro", () => {
  beforeEach(() => {
    cy.visit("/register.html");
  });

  it("Deve realizar pré-cadastro com dados fictícios válidos", () => {
    const emailFicticio = `leitor.${Date.now()}@exemplo.com`;

    cy.get("#name").type("Lucas Ferreira Teste");
    cy.get("#email").type(emailFicticio);
    cy.get("#password").type("Senha123!");
    cy.get("#confirm-password").type("Senha123!");

    // Se a caixa de termos ou o botão tiverem outro ID na tela, ajuste com a mirinha do Cypress
    cy.get('input[type="checkbox"]').first().check({ force: true });
    cy.get('button[type="submit"]').click();

    cy.contains(/sucesso|criada|cadastro|bem-vindo/i).should("be.visible");
  });

  it("Deve exibir erro com e-mail em formato inválido", () => {
    cy.get("#name").type("maycon oliveira teste");
    cy.get("#email").type("email-invalido");
    cy.get('button[type="submit"]').click();

    cy.contains(/inválido|válido|email/i).should("be.visible");
  });
});