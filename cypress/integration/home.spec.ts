context('home', () => {
    const checkAddDialogExists = () => {
        cy.get('[cy-data=saveBtn]').click();
        cy.get('[cy-data=AddCarpoolDlg]').should('exist');
        cy.get('.alert-button').click();
    };
    const visitHome = () => {
        cy.visit('/mitfahrzentrale');
        cy.url().should('include', '/mitfahrzentrale');
    };
    const openAddDlg = () => {
        visitHome();
        cy.get('[cy-data=addCarpool]').click();
        cy.get('[cy-data=AddCarpoolDlg]').should('exist');
    };

    it('open AddCarpool', () => {
        openAddDlg();
    });
    it('check required Fields', () => {
        openAddDlg();
        // Try Saving without insert
        checkAddDialogExists();
        // Fill Name and try Save
        cy.get('.carpoolDrive').type('TestFahrer').should('have.value', 'TestFahrer');
        checkAddDialogExists();
        cy.get('.carpoolDrive > .native-input').clear();
        // Cant set ComboBox must fix later...
        cy.get('.ng-pristine > .native-input').clear().type('5').should('have.value', '5');
        checkAddDialogExists();
    });
});

