context('carpool', () => {
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
        cy.get('[cy-data=billRide]').first().click();
    };
    it('open Carpoolpage', () => {
        openCarpoolPage();
    });
    it('start Ride ', () => {
        openCarpoolPage();
        resetCosts();
       /* cy.get('[cy-data=startRide]').click();
        cy.get('.price').should('include', '5');*/
    });
});
