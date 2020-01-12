import {openSidebar} from '../support/functions/overview.po';

describe('overview', () => {
    context('1080p resolution', () => {
        beforeEach(() => {
            cy.viewport(1920, 1080);
        });
        it('visit Home', () => {
            cy.visit('');
            cy.get('[cy-data=home]').click();
            cy.url().should('include', '/mitfahrzentrale');
        });
        it('visit Export', () => {
            cy.visit('');
            cy.get('[cy-data=export]').click();
            cy.url().should('include', '/export');
        });
    });
    context('iphone-x', () => {
        beforeEach(() => {
            cy.viewport('iphone-x');
        });
        it('visit Home', () => {
            cy.visit('');
            openSidebar();
            cy.get('[cy-data=home]').click();
            cy.url().should('include', '/mitfahrzentrale');
        });
        it('visit Export', () => {
            cy.visit('');
            openSidebar();
            cy.get('[cy-data=export]').click();
            cy.url().should('include', '/export');
        });
    });
});
