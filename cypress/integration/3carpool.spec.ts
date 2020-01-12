import {openCarpoolPage, resetCosts} from '../support/functions/carpool.po';

describe('Carpool', () => {
    context('1080p resolution', () => {
        beforeEach(() => {
            cy.viewport(1920, 1080);
        });
        it('start Ride ', () => {
            openCarpoolPage();
            resetCosts();
            cy.wait(500);
            cy.get('[cy-data=startRide]')
                .click()
                .click();
        });
    });
    context('iphone-x', () => {
        beforeEach(() => {
            cy.viewport('iphone-x');
        });
        it('start Ride ', () => {
            openCarpoolPage();
            resetCosts();
            cy.wait(500);
            cy.get('[cy-data=startRide]')
                .click()
                .click();
        });
    });
});
