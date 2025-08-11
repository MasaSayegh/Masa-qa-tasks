///<reference types ="cypress"/>
describe("Add Watches Priced more than $55 to Cart", () => {
  before(() => {
    cy.visit(
      "https://magento.softwaretestingboard.com/customer/account/login/"
    );
    cy.get("#email").type("wishlist@test.com");
    cy.get("#pass").type("Wishlist123", { log: false });
    cy.get("#send2").click();

    cy.contains("Welcome").should("be.visible");
  });

  it("should add all watches with price greater than 55 to cart", () => {
    cy.visit("https://magento.softwaretestingboard.com/");
    cy.get(".level-top.ui-corner-all").contains("Gear").trigger("mouseover");

    cy.get("#ui-id-27").click();
    cy.get("#sorter").select("Price");

    cy.get(".product-item-info").should("be.visible");
    // cy.get(".action.tocart.primary").click()
    cy.wait(1000);
    cy.get(".product-item-info").each(($el) => {
    //  cy.wrap($el).trigger("mouseover");

      cy.wrap($el)
        .find(".price")
        .invoke("text")
        .then((priceText) => {
          const price = parseFloat(priceText.replace(/[^0-9.]/g, ""));

          if (price >55) {
            // Click Add to Cart button inside this product card
            cy.wrap($el)
              .find('button[title="Add to Cart"]')
              .click({ force: true });

            // Wait for success message
            cy.contains("to your shopping cart.").should("be.visible");

            // Wait a moment for UI stability
            cy.wait(500);
          }
        });
    });
    cy.get(".action.showcart").click()
  });
});

describe("Print Categories in New In Women's Section", () => {
  it("should print all categories in the New In Women's section", () => {
    cy.visit("https://magento.softwaretestingboard.com");
    cy.get("#ui-id-3").click();
    cy.contains(/New In Women's/i)
      .parents(".categories-menu ")
      .find("ul.items li.item")
      .then(($categories) => {
        const categoryNames = [];
        $categories.each((index, el) => {
          categoryNames.push(el.innerText.trim());
        });
        cy.log("Categories: " + categoryNames.join(", "));
        const womensCategories = categoryNames.slice(0, 6);
        console.log([...new Set(womensCategories)]);
      });
  });
});
