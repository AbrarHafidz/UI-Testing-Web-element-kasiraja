class logout {

    clickProfil(){
        cy.get('#menu-button-14').click() 
    }

    clickLogout(){
        cy.get('#menu-list-14-menuitem-12').click({force:true})
    }

    checkUrl(){
        cy.url().should('include','/login') 
    }

}
export default logout