 const loginData = require('../../fixtures/loginData.json') // Importing JSON data here to use as an array
 export class loginPage{

    weblocators = {
        email: 'input[name="email"]',
        password: 'input[name="password"]',
        loginbtn: 'button[color="primary"][type="submit"] span[class="mat-button-wrapper"]',
        wrongCredentials: '.login-error-message',
        assertLogin: 'h1[class="inter-bold m-0"]',
        profileMenu: '.username.mr-12.ml-8',
        logout: 'button:nth-child(4)'
    }

    loginURL(){
        cy.visit(Cypress.env('loginUrl'))
    }

    enterCredentials(eMail, psw){
        cy.get(this.weblocators.email).should('be.visible').and('have.value', '').type(eMail)
        cy.get(this.weblocators.password).should('be.visible').and('have.value', '').type(psw)
        cy.get(this.weblocators.loginbtn).should('be.visible').click()
        cy.get(this.weblocators.assertLogin).should('include.text', 'Profile Information')

    }

    enterEmail(eMail){
        cy.get(this.weblocators.email).should('be.visible').and('have.value', '').type(eMail)
    }

    enterPassword(psw){
        cy.get(this.weblocators.password).should('be.visible').and('have.value', '').type(psw)
    }

    clickOnLoginBtn(){
        cy.get(this.weblocators.loginbtn).should('be.visible').click()
    }

    verifyLoginPage(){
        loginData.forEach(({email, password, expected}) =>{
            cy.get(this.weblocators.email).clear().should('be.visible').type(email).and('have.value', email)
            cy.get(this.weblocators.password).clear().should('be.visible').type(password).and('have.value', password)
            cy.get(this.weblocators.loginbtn).should('be.visible').click()
            
        if (expected === 'Profile Information') {
            cy.get(this.weblocators.assertLogin).and('have.text', expected)
            //cy.contains('h6', 'Dashboard').should('be.visible')
        }
        else {
            cy.get(this.weblocators.wrongCredentials).and('have.text', expected)
        }

        })
       
    }

    clickOnburgerMenu(){
        cy.get(this.weblocators.profileMenu).should('be.visible').click()
       
    }

    clickOnLogout(){
        cy.get(this.weblocators.logout).should('be.visible').click()
    }
    
}
