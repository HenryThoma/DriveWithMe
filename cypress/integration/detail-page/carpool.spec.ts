const visitHome = () => {
    cy.visit('/mitfahrzentrale');
    cy.url().should('include', '/mitfahrzentrale');
};
const openCarpoolPage = () => {
    visitHome();
    cy.get('[cy-data=carpool0]').click();
    cy.url().should('include', 'carpool');
};
const resetCosts = () => {
    openCarpoolPage();
    cy.wait(500);
    cy.get('[cy-data=billRide]').click();
    cy.get('[cy-data=payRide]').click();
    cy.get('billingDialog').should('not.exist');
    cy.get('.price').should('have.text','Aktuell belaufen sich deine Spritkosten auf 0€');
};

describe('carpool', () => {
    it('open Carpoolpage', () => {
        openCarpoolPage();
    });
    it('start Ride ', () => {
        openCarpoolPage();
        resetCosts();
        cy.wait(500);
        cy.get('[cy-data=startRide]')
        .first()
            .click()
            .click();
        cy.get('.price').should('have.text','Aktuell belaufen sich deine Spritkosten auf 10€');
    });
});
