import pageLogout from "../support/logout.cy.js"

describe('Logout Functionality', () => {
  it('Success logout', () => {
    const logout = new pageLogout
    cy.login() // login
    logout.clickProfil() 
    logout.clickLogout() 
    
    logout.checkUrl() 

  })
})