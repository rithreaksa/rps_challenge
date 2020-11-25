/* eslint-disable no-undef */
describe("User attempts to choose Rock, Paper or Scissors", () => {
  it("displays rock, paper and scissors button and player's choice's message", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#paper").click();
    cy.get("#player").should("contain", "paper");
    cy.get("#rock").click();
    cy.get("#player").should("contain", "rock");
    cy.get("#scissors").click();
    cy.get("#player").should("contain", "scissors");
  });
});
