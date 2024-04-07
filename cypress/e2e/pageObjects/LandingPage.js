class LandingPage {

    constructor() {
      this.liberiaTab = '[data-bs-target="#countryDetailsModal-0"]';
    }

    enterUsername(username) {
      cy.get(this.emailInput).type(username);
    }

    getLiberiaTab() {
      return cy.get(this.liberiaTab);
    }
  }

  export default LandingPage;
