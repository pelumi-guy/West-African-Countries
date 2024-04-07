import LandingPage from "./pageObjects/LandingPage";

describe('Automated Test', () => {
  it('top header should contain West African Countries', () => {
    const landingPage = new LandingPage();

    cy.visit('/');

    cy.contains("West African Countries").should("be.visible");
  })

  it('rest of assessment requirements', () => {
    const landingPage = new LandingPage();

    cy.visit('/');

    cy.contains('button', 'Nigeria').then(($button) => {
      const id = $button.attr("data-bs-target");

      cy.log({ id });
      cy.wrap($button).click();

      cy.get(id).should("be.visible");

      cy.get(id).should('contain', 'Nigeria');
      cy.get(id).should('contain', 'Federal Republic of Nigeria');
      cy.get(id).should('contain', 'Abuja');
      cy.get(id).should('contain', 'Nigerian naira (₦)');
      cy.get(id).should('contain', '.ng');
      cy.get(id).should('contain', '+234');

      cy.get(id).find('img[alt="Nigeria\'s flag"]').should('exist');
      cy.get(id).find('img[alt="Nigeria\'s coat of arms"]').should('exist');
    })
  })
});