/* eslint-disable no-undef */
describe("User", () => {
  it("can input name and logout", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#name").type("Reaksa");
    cy.get("#play").click();
    cy.get("#name").should("contain", "Reaksa");
    cy.get("#logout").click();
    cy.get("#name").should("not.contain", "Reaksa");
  });
});
