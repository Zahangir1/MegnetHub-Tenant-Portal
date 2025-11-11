describe('Verify that the PWA Management page loads & Create New PWA Template successfully.', ()=>{
    beforeEach('TC_Login: Verify Login to the system with valid credentials.', () => {
        cy.session('login', () =>{
            cy.viewport(1440,900)
            cy.clearCookies()
            cy.clearLocalStorage()
            loginObj.loginURL('/login')
            cy.wait(2000)
            loginObj.enterEmail(loginData.email)
            loginObj.enterPassword(loginData.password)
            loginObj.clickOnLoginBtn()
            cy.log('User logged in successfully')
            cy.wait(2000)
        })
    })

    it('TC_PWA_01: Verify that as a user create new pwa template.', ()=> {
        cy.viewport(1440,900)
        loginObj.loginURL('/pwa-management')
        cy.wait(3000)
        pwaObj.clickOnPWAManagement()
        cy.wait(2000)
        pwaObj.clickOnCreatePWA()
        cy.wait(1000)
        pwaObj.clickOnCheckbox1()
        cy.wait(2000)
        pwaObj.clikcOnTextField()
        cy.wait(1000)
        pwaObj.setOnTextArea(pwaManagementData.textValue)
        cy.wait(2000)
        pwaObj.clickOnScrollToPWATemplate()
        cy.wait(1000)
        pwaObj.clickOnCopyToAllLanguages()
        pwaObj.clickOnconfirmBtn()
        pwaObj.clickOnPublishBtn()
        pwaObj.clickOnSubmitBtn()
        
    })

    it('TC_PWA_02: Verify that a user can search PWA Template.', () =>{
        cy.viewport(1440,900)
        loginObj.loginURL('/pwa-management')
        cy.wait(3000)
        pwaObj.clickOnPWAManagement()
        cy.wait(2000)
        pwaObj.clickOnFilterList()
        pwaObj.setSearchByName(pwaManagementData.searchByName)
        pwaObj.selectOnStatus()
        pwaObj.clickOnapplyBtn()
        cy.wait(2000)
    })

})



import { loginPage } from '../../pages/login/loginPage'
const loginObj = new loginPage()
import loginData from '../../fixtures/loginData.json'

import {pwaManagementPage } from '../../pages/pwaManagement/pwaManagementPage'
const pwaObj = new pwaManagementPage()
import pwaManagementData from '../../fixtures/pwaManagementData.json'