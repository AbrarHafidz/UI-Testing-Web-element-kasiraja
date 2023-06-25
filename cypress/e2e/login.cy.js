const dataLogin = require("../fixtures/testlogin.json")
import Login from "../support/login.cy.js"

describe('Login Functionality', () => {
  const login = new Login
  it('Success login', () => {
    cy.visit('https://kasirdemo.belajarqa.com') 
    login.inputEmail(dataLogin.email) 
    login.inputPassword(dataLogin.password) 
    login.clickLogin() 
    
    login.checkUrl() 
  })

  it('Login with invalid email', () => {
    cy.visit('https://kasirdemo.belajarqa.com')
    login.inputEmail(dataLogin.invalidEmail) 
    login.inputPassword(dataLogin.password) 
    login.clickLogin() 
 
  })

  it('Login with invalid password', () => {
    cy.visit('https://kasirdemo.belajarqa.com') 
    login.inputEmail(dataLogin.email) 
    login.inputPassword(dataLogin.invalidPassword) 
    login.clickLogin() 

  })

  it('Login with invalid format email', () => {
    cy.visit('https://kasirdemo.belajarqa.com') 
    login.inputEmail(dataLogin.invalidFormatEmail) 
    login.inputPassword(dataLogin.password) 
    login.clickLogin() 
  
  })

  it('Login with empty email & password', () => {
    cy.visit('https://kasirdemo.belajarqa.com') 
    login.clickLogin() 
  
  })

  it('Login with empty email', () => {
    cy.visit('https://kasirdemo.belajarqa.com')
    login.inputPassword(dataLogin.password) 
    login.clickLogin() 
  })

  it('Login with empty password', () => {
    cy.visit('https://kasirdemo.belajarqa.com')
    login.inputEmail(dataLogin.email) 
    login.clickLogin() 
  })
  
})