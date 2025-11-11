describe('Verify user login credential', () =>{
    it('TC_Login: Verify Login to the system with valid credentials.', ()=>{
            loginObj.loginURL()
            cy.viewport(1440,900)
            cy.wait(2000)
            loginObj.enterEmail(loginData.email)
            loginObj.enterPassword(loginData.password)
            loginObj.clickOnLoginBtn()
            cy.wait(2000)
    })   

})


import { loginPage } from '../../pages/login/loginPage'
const loginObj = new loginPage() 
import loginData from '../../fixtures/loginData.json'