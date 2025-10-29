describe('Verify Dashboard Management page load & Dashboard Export Functionality', () =>{
    beforeEach('Login Credentials', () =>{
        loginObj.loginURL()
        cy.viewport(1440,900)
        loginObj.enterCredentials(loginData.email, loginData.password)
        cy.log('User logged in successfully')
        cy.wait(3000)
    })

    it('TC_DASH_01: Verify Dashboard Searching Filter Functionality', ()=>{
        dashboardObj.clickOnDashboardManagement()
        dashboardObj.clickOnDashboardManagementFilterMenu()
        dashboardObj.enterTheDashboardSearchName(dashboardManagementData.searchByBatchName)
        dashboardObj.enterTheDashboardSearchPWA(dashboardManagementData.searchByPWAName)
        dashboardObj.enterTheDashboardSearchByUid(dashboardManagementData.uidNumber)
        dashboardObj.enterTheDashboardSearchBySerial(dashboardManagementData.serialNumber)
        dashboardObj.enterTheDashboardScanCount(dashboardManagementData.scanCountNumber)
        dashboardObj.enterTheDashboardCountry(dashboardManagementData.countryName)
        dashboardObj.enterTheDashboardAccountAddress(dashboardManagementData.accountAddress)
        dashboardObj.clickOnDashboardApplyBtn()
        cy.wait(2000)
        cy.log('Verify that dashboard filter functionality')

    })

    it('TC_DASH_02: Verify Dashboard Export File Download Functionality', () =>{
        dashboardObj.clickOnDashboardManagement()
        dashboardObj.clickOnDashboardExportFile()
        cy.wait(1000)
        dashboardObj.verifyDashboardExportFile()
        dashboardObj.clickOnNotificationCardClose()
        cy.wait(1000)
        cy.origin('https://yopmail.com', () => {
            cy.visit('https://yopmail.com');
            // Interact with elements on yopmail.com
            cy.get('input[name="login"]').type('tu@yopmail.com');
            cy.get('button[title="Check Inbox @yopmail.com"]').click();
        }); 
        // dashboardObj.downloadDashboardFile()
        // cy.wait(2000)
    })

})


import { loginPage } from '../../pages/login/loginPage'
const loginObj = new loginPage()
import loginData from '../../fixtures/loginData.json'

import { dashboardManagementPage } from '../../pages/dashboardManagement/dashboardManagementPage'
const dashboardObj = new dashboardManagementPage()
import dashboardManagementData from '../../fixtures/dashboardManagementData.json'