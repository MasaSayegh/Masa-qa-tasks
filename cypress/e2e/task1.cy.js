///<reference types ="cypress"/>
describe("cypress task #1", () => {
  it("Sign up ", () => {
    cy.visit("https://demo.productionready.io/#/register");
    cy.get(".navbar-brand.ng-binding");
    cy.get(".nav-link").first();
    cy.get(".nav-link.active");
    cy.get(".text-xs-center.ng-binding");
    cy.get(".text-xs-center");
    cy.contains("a", "Have an account?");
    cy.get(" fieldset:nth-child(1) > input");
    cy.get(" fieldset:nth-child(2) > input");
    cy.get(" fieldset:nth-child(3) > input");
    cy.get(".btn.btn-lg.btn-primary.pull-xs-right.ng-binding");
    cy.get(".logo-font.ng-binding");
    cy.get(".attribution.ng-binding");
  });
});
