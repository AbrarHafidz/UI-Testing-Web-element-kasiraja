import pageProfil from "../support/profile.cy.js"
const dataLogin = require("../fixtures/testlogin.json")

describe('Profil Functionality', () => {
  const profil = new pageProfil
  it('Success edit profil', () => {
    cy.login()
    profil.clickProfil() 
    profil.clickNamaToko() 
    profil.inputNama(dataLogin.namaToko) 
    profil.inputEmail(dataLogin.email)
    profil.inputPassword(dataLogin.password) 
    profil.clickSimpan() 
  
    //profil.checkMessage() 
    profil.checkUrl()
  })

  it('Edit profil with invalid format email', () => {
    cy.login()
    profil.clickProfil() 
    profil.clickNamaToko() 
    profil.inputNama(dataLogin.namaToko) 
    profil.inputEmail(dataLogin.invalidFormatEmail) 
    profil.inputPassword(dataLogin.password) 
    profil.clickSimpan() 
    
    profil.checkInvalidFormatEmail()
  })

  it('Edit profil with empty nama', () => {
    cy.login()
    profil.clickProfil() 
    profil.clickNamaToko() 
    cy.get('#nama').clear()
    profil.inputEmail(dataLogin.email) 
    profil.inputPassword(dataLogin.password) 
    profil.clickSimpan() 
    
    profil.checkEmptyName()
  })

  it('Edit profil with empty email', () => {
    cy.login()
    profil.clickProfil() 
    profil.clickNamaToko() 
    profil.inputNama(dataLogin.namaToko)
    cy.get('#email').clear()
    profil.inputPassword(dataLogin.password) 
    profil.clickSimpan() 
    
    profil.checkEmptyEmail()
  })

})