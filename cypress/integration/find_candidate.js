describe("Message all candidates", () => {
  it("Search Candidate", () => {
    cy.visit("https://www.linkedin.com/feed/");
    cy.get("input.search-global-typeahead__input.always-show-placeholder").type(
      "react{enter}"
    );
    cy.get("button[aria-label='People']").click();
    cy.wait(2000);
    cy.scrollTo("bottom");
    cy.get("button[aria-label='Page 4']").click();
    for (let i = 0; i < 5; i++) {
      cy.wait(2000);
      cy.get(
        "button.artdeco-button.artdeco-button--2.artdeco-button--secondary.ember-view"
      )
        .contains("Follow")
        .invoke("addClass", "followButton");
      if (cy.find)
        cy.get(
          "button.artdeco-button.artdeco-button--2.artdeco-button--secondary.ember-view"
        ).each(($btn, index) => {
          if (
            !$btn.hasClass("artdeco-button--muted") &&
            !$btn.hasClass("followButton") &&
            !$btn.hasClass("artdeco-button--circle")
          ) {
            cy.wrap($btn).click();
            cy.get("button[aria-label='Add a note']").click();

            cy.get("textarea[name='message']").type(`Hi,
  
Hope you are doing well! Thanks for getting connected.
        
Currently, we are hiring for a Front End Developer position at Maybank and would like to see if you want to explore further. Let me know if you are available for a chat soon.
        
Best,
Kevin
              `);
            cy.get("button[aria-label='Send now']").click();
          }
        });
      cy.wait(2000);
      cy.scrollTo("bottom");
      cy.get("button[aria-label='Next']").click();
    }
  });
});
