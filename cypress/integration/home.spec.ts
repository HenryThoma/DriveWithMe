context('home', () => {
    it('adding Carpool', () => {
        cy.visit('/mitfahrzentrale');
        cy.url().should('include', '/mitfahrzentrale');
        cy.get('[cy-data=addCarpool]').click();
        cy.get('[cy-data=AddCarpoolDlg]').should('exist');
    });

});
