describe('Verify UID Management Page Load & UID Creation Functionality.', () =>{
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

    it('TC_UID_01: Verify user can generate new UID.', ()=>{
        cy.viewport(1440,900)
        loginObj.loginURL('/uid-management')
        cy.wait(3000)
        uidObj.clickOnUIDManagement()
        uidObj.verifyUIDManagement()  
        uidObj.clickOnGenerated1()
        uidObj.clickOnGenerateUid()
        uidObj.setGenerateNumberOfUids(uidManagementData.generateNumberofUids)
        uidObj.setOnComment(uidManagementData.comment)
        uidObj.clickOnGenerateBtn()
        uidObj.clickOnConfirmGenerateUidsBtn()
        uidObj.clickOnOkBtn()
        uidObj.clickOnBackBtn()
    })

    it('TC_UID_02: Verify user can create new Reserved UID', ()=>{
        cy.viewport(1440,900)
        loginObj.loginURL('/uid-management')
        cy.wait(3000)
        uidObj.clickOnUIDManagement()
        uidObj.clickOnReservedTab()
        uidObj.clickOnReservedUid()
        uidObj.setReserveNumberOfUid(uidManagementData.reserveNumberofUids)
        uidObj.clickOnReserveUidBtn()
        uidObj.clickOnReservedOkBtn()                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
    })

    it('TC_UID_03: Verify that user can search for a UID.', () =>{
        cy.viewport(1440,900)
        loginObj.loginURL('/uid-management')
        cy.wait(3000)
        uidObj.clickOnUIDManagement()
        uidObj.verifyUIDManagement()  
        uidObj.clickOnGenerated2()
        uidObj.clickOnSearchByGeneratedFilter()
        uidObj.setOnSearchByCreatedPerson(uidManagementData.searchByCreatedPerson)
        uidObj.setOnSearchBySerial(uidManagementData.searchBySerialNo)
        uidObj.clickOnApplyBtn()
    })

    it('TC_UID_04: Verify the UID export file is download successfully.', () =>{
        cy.viewport(1440,900)
        loginObj.loginURL('/uid-management/create-uid/uid-generation-list')
        cy.wait(3000)
        uidObj.clickOnUIDManagement()
        uidObj.verifyUIDManagement()  
        uidObj.clickOnNumberofUIDs()
        uidObj.verifyUIDGeneration()
        uidObj.downloadOnUIDsExportfile()
        cy.wait(2000) 
    })

})


import { loginPage } from '../../pages/login/loginPage'
const loginObj = new loginPage()
import loginData from '../../fixtures/loginData.json'

import { uidManagementPage } from '../../pages/uidManagement/uidManagementPage'
const uidObj = new uidManagementPage()
import uidManagementData from '../../fixtures/uidManagementData.json'
