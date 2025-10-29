import { loginPage } from '../../pages/login/loginPage'
const loginObj = new loginPage() 
import loginData from '../../fixtures/loginData.json'



describe('Verify user login credential', () =>{
    it('TC_Login: Verify that as a user I can login successfully with valid username and password.', ()=>{
            loginObj.loginURL()
            cy.viewport(1440,900)
            loginObj.enterEmail(loginData.email)
            loginObj.enterPassword(loginData.password)
            loginObj.clickOnLoginBtn()
            cy.wait(2000)
        })   

})
