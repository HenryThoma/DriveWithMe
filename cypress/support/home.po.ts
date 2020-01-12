export const checkAddDialogExists = () => {
    cy.get('[cy-data=saveBtn]').click();
    cy.get('[cy-data=AddCarpoolDlg]').should('exist');
    cy.get('.alert-button').click();
};
export const visitHome = () => {
    cy.visit('/mitfahrzentrale');
    cy.url().should('include', '/mitfahrzentrale');
};
export const openAddDlg = () => {
    visitHome();
    cy.get('[cy-data=addCarpool]').click();
    cy.get('[cy-data=AddCarpoolDlg]').should('exist');
};
