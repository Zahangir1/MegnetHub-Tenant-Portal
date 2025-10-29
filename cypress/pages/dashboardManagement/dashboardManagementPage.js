export class dashboardManagementPage{

    weblocators = {
        dashboardManagement: ':nth-child(1) > .mat-ripple > .nav-link-title',
        dashboardFilterMenu: '.mat-form-field-suffix > .mat-focus-indicator > .mat-button-wrapper > .mat-icon',
        dashboardSearhByName: '[formcontrolname="ScannedBatchName"]',
        dashboardsearchPWA: '[formcontrolname="ScannedPwaName"]',
        dashboardSearchByUID: '[formcontrolname="UniqueCharacters"]',
        dashboardSearchBySerial: '[formcontrolname="Serial"]',
        dashboardSearchByScanCount: '[formcontrolname="TotalScanCount"]',
        dashboardSearchByPinVerification: '[formcontrolname="ToatalPinVerificationCount"]',
        dashboardSearchByCountry: '[formcontrolname="Country"]',
        dashboardAccountAddress: '[formcontrolname="AccountAddress"]',
        applyBtn: 'button[type="submit"][class*="mat-focus-indicator"]',
        dashboardExportFile: 'button[class="mat-focus-indicator height-44 mat-flat-button mat-button-base mat-accent"]',
        dashboardExportFileAssert: 'h2[class="m-0 p-0"]',
        notificationCardClose: '[fxlayoutalign="space-between start"] > .cursor-pointer',
        yopmailUrl: 'https://yopmail.com/',        
        loginYopmail: 'input[name="login"]',
        arrowBtn: 'button[title="Check Inbox @yopmail.com"]',
        iframe_box: '#ifinbox',
        iframe_onload: 'onloadifinbox()',
        iframe_download: '#ifmail',
        downloadBtn: '#mail > div > table > tbody > tr > td > div:nth-child(2) > div > div > div > div > div > div:nth-child(2) > a > span'



    }


    clickOnDashboardManagement(){
        cy.get(this.weblocators.dashboardManagement).should('be.visible').click()
    }

    clickOnDashboardManagementFilterMenu(){
        cy.get(this.weblocators.dashboardFilterMenu).should('be.visible').click()
    }

    enterTheDashboardSearchName(batchname){
        cy.get(this.weblocators.dashboardSearhByName).should('be.visible').type(batchname)
    }

    enterTheDashboardSearchPWA(pwaname){
        cy.get(this.weblocators.dashboardsearchPWA).should('be.visible').type(pwaname)
    }

    enterTheDashboardSearchByUid(uid){
        cy.get(this.weblocators.dashboardSearchByUID).should('be.visible').type(uid)
    }

    enterTheDashboardSearchBySerial(serial){
        cy.get(this.weblocators.dashboardSearchBySerial).should('be.visible').type(serial)
    }

    enterTheDashboardScanCount(scanCount){
        cy.get(this.weblocators.dashboardSearchByScanCount).should('be.visible').type(scanCount)
    }

    enterTheDashboardCountry(country){
        cy.get(this.weblocators.dashboardSearchByCountry).should('be.visible').type(country)
    }

    enterTheDashboardAccountAddress(accountAddress){
        cy.get(this.weblocators.dashboardAccountAddress).should('be.visible').type(accountAddress)
    }

    clickOnDashboardApplyBtn(){
        cy.get(this.weblocators.applyBtn).should('be.visible').click()
    }

    clickOnDashboardExportFile(){
        cy.get(this.weblocators.dashboardExportFile).should('be.visible').click()
    }

    verifyDashboardExportFile(){
        cy.get(this.weblocators.dashboardExportFileAssert).should('include.text', 'Exporting data')
    }

    clickOnNotificationCardClose(){
        cy.get(this.weblocators.notificationCardClose).should('be.visible').click()
    }

    visitYopmail(){
        cy.visit(this.weblocators.yopmailUrl)
    }

    setYopmailLogin(lg){
        cy.get(this.weblocators.loginYopmail).should('be.visible').type(lg, {force:true})  
    }

    clickOnLoginBtn(){
        cy.get(this.weblocators.arrowBtn).should('be.visible').click()
    }

    downloadDashboardFile(){
        cy.frameLoaded(this.weblocators.iframe_box)
        cy.iframe(this.weblocators.iframe_box).find(iframe_onload).click()
        cy.frameLoaded(this.weblocators.iframe_download)
        cy.iframe(this.weblocators.iframe_download).find(downloadBtn).click()
    }

}
