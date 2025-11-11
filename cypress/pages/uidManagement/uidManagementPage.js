export class uidManagementPage{

    weblocators = {
        // UID Generation Form Create
        sideNavBar: '#sidenav-bar',
        navLink: 'a[class="mat-ripple nav-link ng-star-inserted"]',
        uidManagementModule: 'a[class="mat-ripple nav-link ng-star-inserted"] span[class="nav-link-title ng-star-inserted"]',
        assertUIDManagement: '.text-bold',
        generated: '#mat-tab-label-0-0',
        generateUid: '.font-inter',
        assertUIDGenerate: '[fxlayout="row"] > .text-bold',
        generateNumberOfUids: '.mat-form-field-infix input[matinput][type="number"]',
        comment: 'input[name="comment"]',
        generate: '.generate-button',
        confirmGenerateUidBtn: "button[type='submit']",
        okBtn: "button[type='submit']",
        backBtn: '.py-16>[fxlayout="row"]>.mat-icon',
        reservedTab: '#mat-tab-label-0-1',
        reserveUid: '.mat-focus-indicator.height-44.white-text-color.mat-flat-button.mat-button-base.mat-primary.ng-star-inserted',
        reserveNumberOfUid: 'input[name="UidNumber"]',
        reserveUidBtn: '.reserved-uid-button',
        reservedOkBtn: 'div.mt-24 > .mat-focus-indicator',
        searchByReservedFilter: '.mat-form-field-suffix > .mat-focus-indicator',
        createdPerson: '#mat-input-3',
        serialNo: '#mat-input-4',
        applyBtn: '[fxlayout="row"] > .mat-primary > .mat-button-wrapper',
        resetBtn: '.mat-accent > .mat-button-wrapper',
        searchByFilter: 'button.mat-icon-button .mat-icon.material-icons',
        searchByCreatedPerson: '.mat-form-field-infix input[matinput][type="text"]',
        searchBySerial: 'input[type="number"]',
        applyBtn: 'button[type="submit"]',
        resetBtn: 'button[class="mat-focus-indicator height-44 mat-flat-button mat-button-base mat-accent ng-star-inserted"] span[class="mat-button-wrapper"]',
        numberOfUids: ':nth-child(1) > .datatable-body-row > .datatable-row-center > :nth-child(1)',
        downloadExportUIDs: '.mat-button-wrapper > .inter-bold',
        assertUIDGeneration: '[fxlayout="row"] > .inter-bold'
    }


    clickOnUIDManagement(navbar){
        cy.get(this.weblocators.sideNavBar).click({ force: true })
            cy.get(this.weblocators.navLink).should('have.length', '8')
            cy.get(this.weblocators.navLink).each(($el) => {
                if ($el.text().trim() === navbar) {
                    cy.wrap($el).should('be.visible').click()
                }   
            })
            cy.get(this.weblocators.uidManagementModule).eq(1).should('be.visible').click({force:true})
    }

    verifyUIDManagement(){
        cy.get(this.weblocators.assertUIDManagement).should('include.text', 'UID Management')
    }

    clickOnGenerated1(){
        cy.get(this.weblocators.generated).should('be.visible').click()
    }

    clickOnGenerateUid(){
        cy.get(this.weblocators.generateUid).should('be.visible').click()
    }

    verifyUIDGenerate(){
        cy.get(this.weblocators.assertUIDGenerate).should('include.text','UID Generation')
    }

    setGenerateNumberOfUids(generateUid){
        cy.get(this.weblocators.generateNumberOfUids).should('be.visible').clear().type(generateUid)
    }

    setOnComment(cmnt){
        cy.get(this.weblocators.comment).should('be.visible').clear().type(cmnt)
    }

    clickOnGenerateBtn(){
        cy.get(this.weblocators.generate).should('be.visible').click()
    }

    clickOnConfirmGenerateUidsBtn(){
        cy.get(this.weblocators.confirmGenerateUidBtn).should('be.visible').click()
    }

    clickOnOkBtn(){
        cy.get(this.weblocators.okBtn).should('be.visible').click()
    }

    clickOnBackBtn(){
        cy.get(this.weblocators.backBtn).should('be.visible').click()
    }

    clickOnReservedTab(){
        cy.get(this.weblocators.reservedTab).should('be.visible').click()
    }

    clickOnReservedUid(){
        cy.get(this.weblocators.reserveUid).should('be.visible').click()
    }

    setReserveNumberOfUid(reserveUid){
        cy.get(this.weblocators.reserveNumberOfUid).should('be.visible').clear().type(reserveUid)
    }

    clickOnReserveUidBtn(){
        cy.get(this.weblocators.reserveUidBtn).should('be.visible').click()
    } 

    clickOnReservedOkBtn(){
        cy.get(this.weblocators.reservedOkBtn).should('be.visible').click()
    }

    clickOnReservedSearchByFilter(){
        cy.get(this.weblocators.searchByReservedFilter).should('be.visible').click()
    }

    setOnCreatedPerson(crtedPerson){
        cy.get(this.weblocators.createdPerson).should('be.visible').clear().type(crtedPerson)
    }

    searchBySerialForReserved(serialNo){
        cy.get(this.weblocators.serialNo).should('be.visible').clear().type(serialNo)
    }

    clickOnApplyBtn(){
        cy.get(this.weblocators.applyBtn).should('be.visible').click
    }

    clickOnResetBtn(){
        cy.get(this.weblocators.resetBtn).should('be.visible').click()
    }

    clickOnGenerated2(){
        cy.get(this.weblocators.generated).should('be.visible').click()
    }
    
    clickOnSearchByGeneratedFilter(){
        cy.get(this.weblocators.searchByFilter).contains('filter_list').should('be.visible').click()
    }

    setOnSearchByCreatedPerson(createdPerson){
        cy.get(this.weblocators.searchByCreatedPerson).should('be.visible').clear().type(createdPerson)
    }

    setOnSearchBySerial(serialNo){
        cy.get(this.weblocators.searchBySerial).should('be.visible').clear().type(serialNo)
    }

    clickOnApplyBtn(){
        cy.get(this.weblocators.applyBtn).should('be.visible').click()
    }

    clickOnResetBtn(){
        cy.get(this.weblocators.resetBtn).should('be.visible').click()
    }

    clickOnNumberofUIDs(){
        cy.get(this.weblocators.numberOfUids).should('be.visible').click()
    }

    downloadOnUIDsExportfile(){
        cy.get(this.weblocators.downloadExportUIDs).should('be.visible').click()
    }

    verifyUIDGeneration(){
        cy.get(this.weblocators.assertUIDGeneration).should('include.text', 'UID Generation')
    }

}