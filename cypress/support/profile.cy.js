class profile {
    profil = '#menu-button-14'
    namaToko = '#menu-list-14-menuitem-11'
    nama = '#nama'
    name = '#name'
    email = '#email'
    password = '#password'
    simpan = '.css-l5lnz6'
    message = '#chakra-toast-manager-top-right'
    alert = '.chakra-alert'
    daftar = '.css-1n8i4of'
    

    clickProfil(){
        cy.get(this.profil).click()
    }

    clickNamaToko(){
        cy.get(this.namaToko).click({force:true})
    }
    
    inputNama(nama){
        cy.get(this.nama).clear()
        cy.input(this.nama,nama)
    }
    inputEmail(email){
        cy.get(this.email).clear()
        cy.input(this.email,email)
    }

    inputPassword(password){
        cy.get(this.password).clear()
        cy.input(this.password,password)
    }

    clickSimpan(){
        cy.get(this.simpan).click()
    }

    checkMessage(){
        cy.get(this.message).should('be.visible')
    }

    checkUrl(){
        cy.url().should('include','/users')
    }

    checkInvalidFormatEmail(){
        cy.get(this.alert).should('have.text','"email" must be a valid email')
    }

    checkEmptyName(){
        cy.get(this.alert).should('have.text','"name" is not allowed to be empty')
    }

    checkEmptyEmail(){
        cy.get(this.alert).should('have.text','"email" is not allowed to be empty')
    }

    checkEmptyPassword(){
        cy.get(this.alert).should('have.text','"password" is not allowed to be empty')
    }

    clickDaftar(){
        cy.get(this.daftar).click()
    }

    inputName(name){
        cy.get(this.name).clear()
        cy.input(this.name,name)
    }


}
export default profile