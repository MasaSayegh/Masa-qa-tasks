///<reference types ="cypress"/>
describe("Add Product to Wishlist", () => {
    before(() => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login/');
    cy.get('#email').type('wishlist@test.com');
    cy.get('#pass').type('Wishlist123', { log: false });
    cy.get('#send2').click();

    cy.contains('Welcome').should('be.visible');
  });

  it("Add the product to the wishlist and take a screenshot", () => {
        
cy.visit("https://magento.softwaretestingboard.com/");
cy.get('.product-item-link').first().click();
cy.get('.action.towishlist').click();
cy.wait(1000)
cy.contains('has been added to your Wish List. Click here to continue shopping.').should('be.visible');

cy.screenshot('wishlist-fullpage', { capture: 'fullPage' });
})
})
