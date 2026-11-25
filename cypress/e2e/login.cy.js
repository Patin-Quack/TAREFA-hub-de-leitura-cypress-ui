describe("Funcionalidade: Login", () => {
  beforeEach(() => {
    cy.visit("/login.html");
  });

  it("Cenário Positivo: Deve fazer login com sucesso", () => {
    cy.get("#email").type("usuario@teste.com");
    cy.get("#password").type("user123"); // se no seletor deu #senha, troque aqui
    cy.get('button[type="submit"]').click();

    cy.url().should("not.include", "login.html");
  });

  it("Cenário Negativo: Deve mostrar erro ao digitar senha errada", () => {
    cy.get("#email").type("usuario@teste.com");
    cy.get("#password").type("SenhaErrada999"); // ajuste o ID se for #senha
    cy.get('button[type="submit"]').click();

    cy.contains(/inválid|incorret|erro/i).should("be.visible");
  });

  it("Cenário Negativo: Deve mostrar erro ao deixar campos vazios", () => {
    cy.get('button[type="submit"]').click();

    cy.contains("Por favor, insira um email válido.").should("be.visible");
  });
});