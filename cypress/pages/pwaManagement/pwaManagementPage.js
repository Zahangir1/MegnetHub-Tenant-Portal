export class pwaManagementPage{

    webloactors = {
        sideNavBar: '#sidenav-bar',
        navLink: 'a[class="mat-ripple nav-link ng-star-inserted"]',
        pwaManagementModule: 'a[class="mat-ripple nav-link ng-star-inserted"] span[class="nav-link-title ng-star-inserted"]',
        assertPWA: 'h2[class="text-bold font-size-24 m-0"]',
        createPWA: 'button[mat-flat-button][color="primary"] span[class="font-inter"]',
        textField: 'mat-expansion-panel-header[role="button"] mat-panel-title[fxlayoutalign="space-between center"]',
        textArea: 'iframe[class="tox-edit-area__iframe"]',
        checkbox1: 'span[class="mat-checkbox-inner-container mat-checkbox-inner-container-no-side-margin"] input[type="checkbox"]',
        scrollToPWATemp: '[formarrayname="MAGPWAWidgets"]',
        redirectionLink: 'mat-expansion-panel-header[role="button"] mat-panel-title[fxlayoutalign="space-between center"]',
        linkUrl: 'iframe[class="tox-edit-area__iframe"]',
        copyToAllLanguages: 'button[class="mat-focus-indicator height-48 secondary-bg-color secondary-text-color-two batch-create-button mat-button mat-button-base"]',
        confirmBtn: 'button[color="primary"][class="mat-focus-indicator reserved-uid-button height-48 white-text-color mat-raised-button mat-button-base mat-primary"]',
        publishBtn: 'button[color="primary"][class="mat-focus-indicator height-48 mat-flat-button mat-button-base mat-primary"]',
        submitBtn: 'button[color="primary"][type="submit"][class="mat-focus-indicator reserved-uid-button height-48 white-text-color mat-raised-button mat-button-base mat-primary"]',
        verifyCreatePWA: 'h2[class="text-bold font-size-24 m-0"]',
        // Search PWA Template & Filter by Name
        filterList: '.mat-form-field-suffix>.mat-focus-indicator>.mat-button-wrapper > .mat-icon',
        searchByName: 'div.mat-form-field-infix>input.mat-input-element',
        selectOnStatus: '.mat-select>.mat-select-trigger>.mat-select-value',
        selectOption: 'mat-option > .mat-option-text',
        selectValue: "mat-option > span.mat-option-text",
        applyBtn: 'button[color="primary"][type="submit"] span[class="mat-button-wrapper"]',
        kebabMenuActionIcon: '.mat-focus-indicator.mat-menu-trigger.mat-icon-button.mat-button-base',
        assignBatch: "div[class='cdk-overlay-container'] button:nth-child(2)",
        searchAssignBatch: 'div.mat-chip-list-wrapper > input.mat-input-element',
        selectAssignBatch: 'span.mat-option-text',
        assignBtn: 'button.mat-flat-button[color="primary"]',
        unassignBtn: 'tbody[role="rowgroup"]>tr>td>button.mat-focus-indicator',
        assert: 'tbody[role="rowgroup"]>tr>td:nth-child(1)',
        unassignBatchConfirmBtn: 'button.mat-raised-button[color="primary"]'




    }


    clickOnPWAManagement(navbar){
        cy.get(this.webloactors.sideNavBar).click({ force: true })
            cy.get(this.webloactors.navLink).should('have.length', '8')
            cy.get(this.webloactors.navLink).each(($el) => {
                if ($el.text().trim() === navbar) {
                    cy.wrap($el).should('be.visible').click()
                }   
            })
            cy.get(this.webloactors.pwaManagementModule).eq(3).contains('PWA Management').should('be.visible').click({force:true})
    }

    clickOnCreatePWA(){
        cy.get(this.webloactors.createPWA).should('be.visible').click()
    }

    clickOnCheckbox1(){
        cy.get(this.webloactors.checkbox1).first().should('be.visible').click({force: true})
    }

    clikcOnTextField(){
        cy.get(this.webloactors.textField).contains('Text Field').should('have.text', 'Text Field').click()
    }

    setOnTextArea(pwaText){
        cy.get(this.webloactors.textArea).its('0.contentDocument.body').should('be.visible').then(cy.wrap).clear().type(pwaText)
    }

    clickOnScrollToPWATemplate(){
        cy.get(this.webloactors.scrollToPWATemp).scrollTo('top', { duration: 1000 }).scrollTo('top').scrollTo(500, 0).should('be.visible').click({force: true})
    }

    clickOnCheckbox2(){
        cy.get(this.webloactors.checkbox1).last().should('be.visible').click({force: true})
    }

    clickOnRedirectionLink(){
        cy.get(this.webloactors.redirectionLink).contains('Redirection Link').should('have.text', 'Redirection Link').click()
    }

    setOnRedirectionLink(linkurl){
        cy.get(this.webloactors.linkUrl).its('0.contentDocument.body').should('be.visible').then(cy.wrap).clear().type(linkurl)
    }

    clickOnCopyToAllLanguages(){
        cy.get(this.webloactors.copyToAllLanguages).should('be.visible').click()
    }

    clickOnconfirmBtn(){
        cy.get(this.webloactors.confirmBtn).should('be.visible').click()
    }

    clickOnPublishBtn(){
        cy.get(this.webloactors.publishBtn).should('be.visible').click()
    }

    clickOnSubmitBtn(){
        cy.get(this.webloactors.submitBtn).should('be.visible').click()
    }

    verifyCreatePWA(){
        cy.get(this.webloactors.verifyCreatePWA).should('include.text', 'PWA Management')
    }

    clickOnFilterList(){
        cy.get(this.webloactors.filterList).should('be.visible').click()
    }

    setSearchByName(searchByname){
        cy.get(this.webloactors.searchByName).eq(1).should('be.visible').type(searchByname)
    }

    selectOnStatus(option){
        cy.get(this.webloactors.selectOnStatus).eq(0).click({ force: true })
            cy.get(this.webloactors.selectOption).should('have.length', '3')
            cy.get(this.webloactors.selectOption).each(($el) => {
                if ($el.text().trim() === option) {
                    cy.wrap($el).should('be.visible').click()
                }   
            })
            cy.get(this.webloactors.selectValue).eq(0).should('be.visible').click({force:true})
    }

    clickOnapplyBtn(){
        cy.get(this.webloactors.applyBtn).should('be.visible').click()
    }

     clickOnkebabMenuActionIcon(){
        cy.get(this.webloactors.kebabMenuActionIcon).should('be.visible').click()
    }

    clickOnAssignBatch(){
        cy.get(this.webloactors.assignBatch).should('be.visible').click()
    }

    searchOnAssignBatch(batch){
        cy.get(this.webloactors.searchAssignBatch).should('be.visible').type(batch)
    }

    selectOnAssignBatch(){
        cy.get(this.webloactors.selectAssignBatch).eq(0).should('be.visible').click()
        //cy.contains('span.mat-option-text', ' Updated PWA Batch Template ').click()
    }

    clickOnAssignBtn(){
        cy.get(this.webloactors.assignBtn).should('be.visible').click()
    }

    clickOnUnassignBatch(){
        cy.get(this.webloactors.unassignBtn).should('be.visible').click()
        cy.get(this.webloactors.assert).should('contain.text', ' Black Cherry Waterloo ')
    }

    clickOnunassignBatchConfirmBtn(){
        cy.get(this.webloactors.unassignBatchConfirmBtn).should('be.visible').click()
    }



}
