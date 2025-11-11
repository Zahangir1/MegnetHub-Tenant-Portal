export class batchManagementPage{

    weblocators ={
        // Batch Management Search & Filter Section
        sideNavBar: '#sidenav-bar',
        navLink: 'a[class="mat-ripple nav-link ng-star-inserted"]',
        batchManagementModule: 'a[class="mat-ripple nav-link ng-star-inserted"] span[class="nav-link-title ng-star-inserted"]',
        searchIconMenu: '.mat-icon.notranslate.primary-icon-color.material-icons.mat-icon-no-color',
        searchByBatchName: '.mat-form-field-infix',
        searchByCreatedPerson: '.mat-form-field-infix',
        searchByUID: ".mat-form-field-infix",
        searchByVerificationUrl: ".mat-form-field-infix",
        searchBySerial: ".mat-form-field-infix",
        selectDropdownStatusBar: '#mat-select-value-1',
        dropDownOption1: 'mat-option[role="option"] .mat-option-text',
        dropDownOption2: '.mat-form-field-infix',
        applyBtn: 'button[type="submit"]',
        //Batch List
        batchList: 'datatable-body[role="rowgroup"]',
        //Batch Delete
        kebabMenuIcon: 'datatable-scroller.datatable-scroll > .datatable-row-wrapper > .datatable-body-row > .datatable-row-group > .datatable-body-cell:nth-child(8) > .datatable-body-cell-label > .ng-star-inserted > .mat-icon-button[class="mat-focus-indicator mat-menu-trigger mat-icon-button mat-button-base"]',
        deleteBatch: '.cdk-overlay-pane > .mat-menu-panel > .mat-menu-content > .mat-focus-indicator',
        confirmBtn: 'button.mat-raised-button[color="primary"]',
        cancelBtn: 'button.cancel-btn-bg > span[class="mat-ripple mat-button-ripple"]',
        // Batch Template Search & Filter Section
        batchTemplate: '.mat-focus-indicator.height-44.mat-flat-button.mat-button-base.mat-accent.ng-star-inserted',
        batchTemplateFilterMenu: 'mat-icon[class="mat-icon notranslate primary-icon-color material-icons mat-icon-no-color"]',
        searchByTemplateName: '.mat-form-field-infix > input[type="text"]',
        createdPerson: '.mat-form-field-infix > input[type="text"]',
        applyButton: 'button[type="submit"] span[class="mat-button-wrapper"]',
        // Delete Batch Template
        kebabIcon: 'button[class="mat-focus-indicator mat-menu-trigger mat-icon-button mat-button-base"]',
        actionMenu: 'div[role="menu"]', 
        deleteBtn: 'button[role="menuitem"] mat-icon[class="mat-icon notranslate material-icons mat-icon-no-color"]',
        confirmDltTemp: 'button[class="mat-focus-indicator height-48 px-32 mat-raised-button mat-button-base mat-primary ng-star-inserted"]',
         // Batch Template Create
        createNewTemplate: "button[class='mat-focus-indicator height-48 white-text-color mat-flat-button mat-button-base mat-primary']",
        assertBtachTemplate: "h2[class='text-bold font-size-24 m-0 ng-star-inserted']",
        templateName: "[formcontrolname='TemplateName']",
        pwaTemplateByName: "[formcontrolname='Name']",
        selectPWATemplate: '.mat-option-text',
        createBtn: 'button[class="mat-focus-indicator height-48 white-text-color batch-template-create-button mat-flat-button mat-button-base mat-primary"]',
        submitCreateBtn: 'button[mat-raised-button][color="primary"] > .mat-button-wrapper',
        assertBatchTemplate:'h2[class="text-bold font-size-24 mt-0 mb-0 mr-0 ml-16"]',
        batchTemplateResetBtn: 'button[class*="mat-focus-indicator"][color="accent"] > .mat-button-wrapper',
        action: ':nth-child(1) > .datatable-body-row > .datatable-row-center > :nth-child(5) > .datatable-body-cell-label > div.ng-star-inserted > .mat-focus-indicator > .mat-button-wrapper > .mat-icon',
        deleteTemp: '.mat-menu-content > :nth-child(2) > span',
        deleteConfirm: '.mat-raised-button',
        backBtn: '.mat-icon.notranslate.back-icon.cursor-pointer.material-icons.mat-icon-no-color',
        newBatch: '.mat-primary > .mat-button-wrapper > .font-inter',
        // Create New Batch
        /* batchManagement: ':nth-child(3) > .mat-ripple > .nav-link-title', */
        assertBatchManagement: "h2[class='text-bold font-size-24 m-0 mx-24']",
        newBatch: 'button[class="mat-focus-indicator height-44 mat-flat-button mat-button-base mat-primary ng-star-inserted"] span[class="font-inter"]',
        assertCreateNewBatch: "p[class='inter-bold font-size-24 m-0']",
        scrollToNewBatch: 'form[class="ng-untouched ng-pristine ng-invalid"]',
        addBatchName: 'input[formcontrolname="Name"]',
        addQuantity: 'input[formcontrolname="NumberOfUID"]',
        searchBatchTemplateByName: '[formcontrolname="BatchTemplateName"]',
        selectBatchTemplate: '[role="option"]',
        chooseBatchTemplate: '.mat-autocomplete-panel > .mat-option > span[class="mat-option-text"]',
        scrollIntoCreatedBatch: '#container-3 > .ps__rail-y > .ps__thumb-y',
        searchByCertificateName: '[formcontrolname="CertificateName"]',
        selectCertificate: '.cdk-overlay-pane >.mat-autocomplete-panel > .mat-option',
        scrollInToViewPage: 'div[class="border-radius-8 white-bg-color p-24 mx-112"]',
        assertCreatBatch: '',
        scrollIntoAdditionalField: 'div[class="border-radius-8 white-bg-color p-24 mx-112"]',
        lotNumber: 'input[formcontrolname="Value"][type="text"]',
        articleNumber: 'input[formcontrolname="Value"][type="text"]',
        dateOfManufacturing: 'input[formcontrolname="Value"][type="date"]',
        expireMonth: 'input[formcontrolname="Value"][type="number"]',
        tokenInititorName: 'input[formcontrolname="Value"][type="text"]',
        unitOfMeasurement: 'input[formcontrolname="Value"][type="number"]',
        tokenPerUid: 'input[formcontrolname="Value"][type="number"]',
        tokenBufferAmount: 'input[formcontrolname="Value"][type="number"]',
        activateWallet: '.white-bg-color > div.ng-star-inserted > :nth-child(1)',
        saveAsTemplate: 'div.ng-star-inserted > :nth-child(2) > .mat-button-wrapper > .font-inter',
        createBatchBtn: '.white-text-color > .mat-button-wrapper > .font-inter',
        createSubmitBtn: 'button[color="primary"][class="mat-focus-indicator height-48 px-32 mat-raised-button mat-button-base mat-primary ng-star-inserted"] >.mat-button-wrapper',
        exportBatchInformation: 'div[fxlayoutalign="start center"] button',
        downloadExportFile: 'button[class="mat-focus-indicator height-48 secondary-bg-color secondary-text-color-two mat-button mat-button-base ng-star-inserted"]',
        batchNameByUIDs: ':nth-child(1) > .datatable-body-row > .datatable-row-center > :nth-child(1) > .datatable-body-cell-label > .mat-tooltip-trigger > .ml-12',
        specificUIDs: ':nth-child(1) > .uid-overflow'

    }


    clickOnbatchManagement(navbar){
        cy.get(this.weblocators.sideNavBar).click({ force: true })
            cy.get(this.weblocators.navLink).should('have.length', '8')
            cy.get(this.weblocators.navLink).each(($el) => {
                if ($el.text().trim() === navbar) {
                    cy.wrap($el).should('be.visible').click()
                }   
            })
            cy.get(this.weblocators.batchManagementModule).eq(2).should('be.visible').click({force:true})
    }

    clickOnSearchMenu(){
        cy.get(this.weblocators.searchIconMenu).should('be.visible').click()
    }

    clickOnSearchByBatchName(batchName){
        cy.get(this.weblocators.searchByBatchName).eq(1).should('be.visible').type(batchName)
    }

    setSearchByCreatedPerson(createdPerson){
        cy.get(this.weblocators.searchByCreatedPerson).eq(2).should('be.visible').type(createdPerson)
    }

    setSearchByUID(uid){
        cy.get(this.weblocators.searchByUID).eq(3).should('be.visible').type(uid)
    }

    setSearchByVerificationUrl(verificationUrl){
        cy.get(this.weblocators.searchByVerificationUrl).eq(4).should('be.visible').type(verificationUrl)
    }

    setSearchBySerial(serial){
        cy.get(this.weblocators.searchBySerial).eq(5).should('be.visible').type(serial)
    }

/*
    clickOnDropdownStatusBar(){
        cy.get(this.weblocators.selectDropdownStatusBar).should('be.visible').click()
    }

    selectOnActiveStatus(){
        cy.get(this.weblocators.dropDownOption1).contains('ALL').first().should('be.visible').click()
    }

    selectInactiveStatus(){
        cy.get(this.weblocators.dropDownOption2).should('be.visible').click()
    }

    */
    
    clickOnAppyBtn(){
        cy.get(this.weblocators.applyBtn).should('be.visible').click()
    }

    clickOnBatchList(){
        cy.get(this.weblocators.batchList).should('be.visible').click()
    }

    clickOnKebabMenuIcon(){
        cy.get(this.weblocators.kebabMenuIcon).eq(0).should('be.visible').click()
    }

    clickOndeleteBatch(){
        //cy.get(this.weblocators.deleteBatch).eq(1).should('be.visible').click()
        cy.get('button').contains('Delete Batch').click()

    }

    clickOnConfirmTheDeleteBatch(){
        cy.get(this.weblocators.confirmBtn).should('be.visible').click()
    }

    clickOnCancelBtn(){
        //cy.get(this.weblocators.cancelBtn).should('be.visible').click({ force: true })
        cy.contains('button', 'Cancel').click()
    }

    clickOnBatchTemplate(){
        cy.get(this.weblocators.batchTemplate).eq(1).should('be.visible').click()
    }

    clickOnBatchTemplateFilterMenu1(){
        cy.get(this.weblocators.batchTemplateFilterMenu).should('be.visible').click({force:true})
    }

    clickOnBatchTemplateFilterMenu2(){
        cy.get(this.weblocators.batchTemplateFilterMenu).should('be.visible').click({force:true})
    }

    batchTemplateNameForSearch(tempName){
        cy.get(this.weblocators.searchByTemplateName).first().should('be.visible').type(tempName)
    }

    createdPersonForSearch(person){
        cy.get(this.weblocators.createdPerson).last().should('be.visible').type(person)
    }

    clickOnApplyButton(){
        cy.get(this.weblocators.applyButton).should('be.visible').click()
    }

    clickOnkebabActionIcon(){
        cy.get(this.weblocators.kebabIcon).eq(0).should('be.visible').click({force:true})
    }

    clickDeleteTemplate(){
        cy.get(this.weblocators.deleteBtn).eq(1).should('be.visible').click()
    }

    clickOnConfirmDltTemp(){
        cy.get(this.weblocators.confirmDltTemp).should('be.visible').click()
    }

    clickOnCreateNewTemplate(){
        cy.get(this.weblocators.createNewTemplate).should('be.visible').click()
    }

    verifyBatchTemplatePage(){
        cy.get(this.weblocators.assertBtachTemplate).should('include.text', 'Create New Batch Template')
    }

    setTemplateName(temp_name){
        cy.get(this.weblocators.templateName).should('be.visible').and('have.value', '').type(temp_name, {force:true})
    }

    clickOnPWATemplateByName(pwaname){
        cy.get(this.weblocators.pwaTemplateByName).should('be.visible').and('have.value', '').type(pwaname, {force:true})
    }

    selectPWATemplate(){
        cy.get(this.weblocators.selectPWATemplate).should('be.visible').click()
    }

    clickOnCreateBtn(){
        cy.get(this.weblocators.createBtn).should('be.visible').click()
    }

    clickOnSubmitCreateBtn(){
        cy.get(this.weblocators.submitCreateBtn).should('be.visible').click({force:true})
    }

    verifyBatchTemplate(){
        cy.get(this.weblocators.assertBatchTemplate).should('include.text', 'Batch Templates')
    }

    clickOnBatchTemplateResetBtn(){
        cy.get(this.weblocators.batchTemplateResetBtn).should('be.visible').click()
    }

    clickOnAction(){
        cy.get(this.weblocators.action).should('be.visible').click()
    }

    clickOnDeleteTemplate(){
        cy.get(this.weblocators.deleteTemp).should('be.visible').click()
    }

    clickOnDeleteConfirmBtn(){
        cy.get(this.weblocators.deleteConfirm).should('be.visible').click()
    }

    clickOnBatchTemplateBackBtn(){
        cy.get(this.weblocators.backBtn).should('be.visible').click()
    }

    // clickOnBatchManagement(){
    //     cy.get(this.weblocators.batchManagement).should('be.visible').click()
    // }

    verifyBatchManagement(){
        cy.get(this.weblocators.assertBatchManagement).should('include.text', 'Batch Management')    
    }

    clickOnNewBatch(){
        cy.get(this.weblocators.newBatch).should('be.visible').click()
    }

    verifyNewBatch(){
        cy.get(this.weblocators.assertCreateNewBatch).should('include.text', 'Create New Batch')
    }

    clickOnScrollToNewBatch(){
        cy.get(this.weblocators.scrollToNewBatch).scrollTo('top', { duration: 1000 }).scrollTo('top')
        .scrollTo(500, 0).should('be.visible').click({force: true})
    }

    setBatchName(bName){
        cy.get(this.weblocators.addBatchName).first().should('be.visible').and('have.value', '').type(bName, {force: true})
    }

    setBatchQuantity(quantity){
        cy.get(this.weblocators.addQuantity).should('be.visible').and('have.value', '').type(quantity, {force: true})
    }

    selectBatchTemplate(batchname) {
        cy.get(this.weblocators.searchBatchTemplateByName).click({ force: true })
            cy.get(this.weblocators.searchBatchTemplateByName)
                .type(batchname, {force: true})
            cy.get(this.weblocators.selectBatchTemplate).should('have.length', '15')
            cy.get(this.weblocators.selectBatchTemplate).each(($el) => {
                if ($el.text().trim() === batchname) {
                    cy.wrap($el).should('be.visible').click() 
                }   
            })
            cy.get(this.weblocators.chooseBatchTemplate).eq(1).should('be.visible').click({force:true})

        }

    selectCertificate(certificate){
        cy.get(this.weblocators.searchByCertificateName).click({force:true})
            cy.get(this.weblocators.searchByCertificateName)
                .type(certificate, {force: true})
            cy.get(this.weblocators.selectCertificate).should('have.length', '1')
            cy.get(this.weblocators.selectCertificate).each(($el) => {
                if ($el.text().trim() === certificate) {
                    cy.wrap($el).should('be.visible').click()
                }   
            })
            cy.contains('.mat-option-text', 'ICMP Certificate ( ICMP, ICMP, 2025-04-25 )').click({force:true})  
        }

    clickOnScrollToAdditionalFiled(){
        cy.get(this.weblocators.scrollIntoAdditionalField).realMouseWheel({ deltaY: 200 })
    }

    setLotNumber(lot){
        cy.get(this.weblocators.lotNumber).eq(0).should('be.visible').type(lot, {force:true})
    }

    setArticleNumber(ean){
        cy.get(this.weblocators.articleNumber).eq(1).should('be.visible').type(ean, {force:true})
    }

    setDateOfManufacturing(dom){
        cy.get(this.weblocators.dateOfManufacturing).should('be.visible').eq(0).type(dom, {force:true})
    }

    setExpireMonth(em){
        cy.get(this.weblocators.expireMonth).eq(0).type(em, {force:true})
    }

    setTokenInitiatorName(tin){
        cy.get(this.weblocators.tokenInititorName).eq(2).type(tin, {force:true})
    }

    setUnitOfMeasurment(uom){
        cy.get(this.weblocators.unitOfMeasurement).eq(1).type(uom, {force:true})
    }

    setTokenPerUid(tpu){
        cy.get(this.weblocators.tokenPerUid).eq(2).type(tpu, {force:true})
    }

    setTokenBufferAmount(tba){
        cy.get(this.weblocators.tokenBufferAmount).eq(3).type(tba, {force:true})
    }

    clickOnActivateWallet(){
        cy.get(this.weblocators.activateWallet).should('be.visible').click()
    }

    clickOnSaveAsTemplate(){
        cy.get(this.weblocators.saveAsTemplate).should('be.visible').click()
    }

    clickOnCreateBtn(){
        cy.get(this.weblocators.createBatchBtn).should('be.visible').click()
    }

    clickOnCreateSubmitBtn(){
        cy.get(this.weblocators.createSubmitBtn).should('be.visible').click()
    }

    downloadBatchInformation(){
        cy.contains('button', 'Export').should('be.visible','Export').click({force:true})
        //cy.get(this.weblocators.downloadExportFile).first().should('be.visible').click({force:true})
    }

    clickOnNameByUIDs() {
        cy.get(this.weblocators.batchNameByUIDs).should('be.visiblr').click()
    }

    clickOnSpecificUIDs(){
        cy.get(this.weblocators.specificUIDs).click()
    }

     
}