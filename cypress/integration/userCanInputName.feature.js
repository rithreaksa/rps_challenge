/* eslint-disable no-undef */
describe("User", () => {
  it("can input name", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#name").type("Reaksa");
    cy.get("#play").click();
  });
});
