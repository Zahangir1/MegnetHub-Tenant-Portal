import { loginPage } from '../../pages/login/loginPage'
import loginData from '../../fixtures/loginData.json'
const loginObj = new loginPage() 


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


// name: Login Test

// on:
//    push:
//    workflow_dispatch:


// jobs:
//   login_test:
//     runs-on: ubuntu-24.04
//     strategy:
//         fail-fast: false
//         matrix: 
//           browsers: [chrome, firefox, edge]
//     steps:
//       - name: Checkout
//         uses: actions/checkout@v4
//       # Install npm dependencies, cache them correctly
//       # and run all Cypress tests
//       - name: Run Login Test in  ${{ matrix.browsers }}
//         uses: cypress-io/github-action@v6
//         with:
//             browsers: ${{ matrix.browsers }}
//             command: npx cypress run --browser ${{ matrix.browsers }} --reporter-options reportDir=cypress/results/${{ matrix.browsers }}
      
//       - name: Merge Mochawesome Reports
//         run: npx mochawesome-merge cypress/reports/${{ matrix.browsers }}/*.json > cypress/reports/${{ matrix.browsers }}/merged-reports.json

//       - name: Generate HTML Reports
//         run: npx marge cypress/reports/${{ matrix.browsers }}/merged-reports.json --reportDir cypress/reports/${{ matrix.browsers }} -f "${{ matrix.browsers }}-report.html"

//       - name: Upload HTML Reports
//         uses: actions/upload-artifact@v4
//         with: 
//             name: Cypress HTML Report ${{ matrix.browsers }}
//             path: cypress/reports/${{ matrix.browsers }}

        
