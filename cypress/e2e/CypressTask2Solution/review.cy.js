///<reference types ="cypress"/>

describe("Submit Review on Product Page", () => {
     it("Submit Review", () => {
 cy.visit("https://magento.softwaretestingboard.com/");
 cy.get('.product-item-link').first().click();
 cy.get('#tab-label-reviews-title').click();
 cy.get('#Rating_3').check({ force: true });
 cy.get("#nickname_field").type('Test_1');
 cy.get("#summary_field").type('Good Product');
 cy.get("#review_field").type('I liked this product! Recommended.')
 cy.get('.action.submit.primary').click();


  cy.contains('You submitted your review for moderation').should('be.visible');
})
})
   