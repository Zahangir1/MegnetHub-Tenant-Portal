import { loginPage } from '../../pages/login/loginPage'
const loginObj = new loginPage()
import loginData from '../../fixtures/loginData.json'

import { uidManagementPage } from '../../pages/uidManagement/uidManagementPage'
const uidObj = new uidManagementPage()
import uidManagementData from '../../fixtures/uidManagementData.json'


describe('Verify UID Management page loads & UID create successfully.', () =>{
    beforeEach('TC_Login: Verify user can login successfully with valid username and password.', () => {
        loginObj.loginURL()
        cy.viewport(1440,900)
        loginObj.enterCredentials(loginData.email, loginData.password)
        cy.log('User logged in successfully')
        cy.wait(3000)
    })

    it('TC_UID_01: Verify user can generate new UID.', ()=>{
        uidObj.clickOnUidManagementModule()
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
        uidObj.clickOnUidManagementModule()
        uidObj.clickOnReservedTab()
        uidObj.clickOnReservedUid()
        uidObj.setReserveNumberOfUid(uidManagementData.reserveNumberofUids)
        uidObj.clickOnReserveUidBtn()
        uidObj.clickOnReservedOkBtn()                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
    })

    it('TC_UID_03: Verify that user can search for a UID.', () =>{
        uidObj.clickOnUidManagementModule()
        uidObj.verifyUIDManagement()  
        uidObj.clickOnGenerated2()
        uidObj.clickOnSearchByGeneratedFilter()
        uidObj.setOnSearchByCreatedPerson(uidManagementData.searchByCreatedPerson)
        uidObj.setOnSearchBySerial(uidManagementData.searchBySerialNo)
        uidObj.clickOnApplyBtn()
    })

    it('TC_UID_04: Verify the UID export file is download successfully.', () =>{
        uidObj.clickOnUidManagementModule()
        uidObj.verifyUIDManagement()  
        uidObj.clickOnNumberofUIDs()
        uidObj.verifyUIDGeneration()
        uidObj.downloadOnUIDsExportfile()
        cy.wait(2000) 
    })

})


