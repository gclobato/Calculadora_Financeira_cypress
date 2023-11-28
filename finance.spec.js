context('Dev finences', () => {
    it('Cadastrar entradas', () => {
        cy.visit("https://devfinance-agilizei.netlify.app/")
        cy.get('#transaction > .button').click()
        cy.get('#description').type("salario")
        cy.get('#amount').type("7000")
        cy.get('#date').type("2023-10-10")
        cy.get('button').click()
    });
});