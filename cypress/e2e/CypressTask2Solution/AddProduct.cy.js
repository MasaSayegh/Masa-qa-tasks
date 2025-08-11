///<reference types ="cypress"/>
describe("Add Product to compare", () => {
    before(() => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login/');
    cy.get('#email').type('wishlist@test.com');
    cy.get('#pass').type('Wishlist123', { log: false });
    cy.get('#send2').click();

    cy.contains('Welcome').should('be.visible');
  });

  it("Add the product to compare and record a video", () => {
        
cy.visit("https://magento.softwaretestingboard.com/");
cy.get('.product-item-link').first().click();
cy.get('.action.tocompare').click();

cy.wait(1000)
cy.contains('to the comparison list.').should('be.visible');
})
})
