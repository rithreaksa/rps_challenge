/* eslint-disable no-undef */
describe("User attempts to choose Rock, Paper or Scissors", () => {
  it("displays rock, paper and scissors button and player's choice", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#name").type("Reaksa");
    cy.get("#play").click();
    cy.get("#paper").click();
    cy.get("#player").should("contain", "Paper");
    cy.get("#rock").click();
    cy.get("#player").should("contain", "Rock");
    cy.get("#scissors").click();
    cy.get("#player").should("contain", "Scissors");
  });

  it("displays computer's choice as Rock and result as Draw", () => {
    cy.visit("http://localhost:3000/", {
      onBeforeLoad: (window) => {
        cy.stub(window.Math, "floor").returns(0);
      },
    });
    cy.get("#name").type("Reaksa");
    cy.get("#play").click();
    cy.get("#rock").click();
    cy.get("#computer").should("contain", "Rock");
    cy.get("#result").should("contain", "Draw");
  });

  it("displays computer's choice as Paper and result as Lost", () => {
    cy.visit("http://localhost:3000/", {
      onBeforeLoad: (window) => {
        cy.stub(window.Math, "floor").returns(1);
      },
    });
    cy.get("#name").type("Reaksa");
    cy.get("#play").click();
    cy.get("#rock").click();
    cy.get("#computer").should("contain", "Paper");
    cy.get("#result").should("contain", "Lost");
  });

  it("displays computer's choice as Scissors and result as Won", () => {
    cy.visit("http://localhost:3000/", {
      onBeforeLoad: (window) => {
        cy.stub(window.Math, "floor").returns(2);
      },
    });
    cy.get("#name").type("Reaksa");
    cy.get("#play").click();
    cy.get("#rock").click();
    cy.get("#computer").should("contain", "Scissors");
    cy.get("#result").should("contain", "Won");
  });
});
