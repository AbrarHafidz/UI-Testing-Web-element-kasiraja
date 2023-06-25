
Cypress.Commands.add('login', () => {
    cy.visit('https://kasirdemo.belajarqa.com')
    cy.get('#email').type('abrarhafidz78@gmail.com') 
    cy.get('#password').type('12345') 
    cy.get('.chakra-button').click() 
})

Cypress.Commands.add('input', (locator,value) =>{
    cy.get(locator)
    .should('be.visible')
    .type(value)
})
