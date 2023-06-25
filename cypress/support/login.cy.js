class login {

    email = '#email'
    password = '#password'
    loginButton = '.chakra-button'

    inputEmail(email){
        cy.input(this.email, email)
    }

    inputPassword(password){
        cy.input(this.password, password)
    }

    clickLogin(){
        cy.get(this.loginButton).click()
    }
    checkUrl(){
        cy.url().should('include', '/dashboard') 
    }

}
export default login