import testData from "../data/newUser.json"
import email from "../../support/emailId"

module.exports = {
    //'@disabled': true,
    'new user': (browser) => {
        let login = browser.page.login()
        console.log(email.emailId())
        login
            .with(email.emailId())
            .assert.containsText('@accountCreation', 'CREATE AN ACCOUNT')
            .assert.containsText('@personalInfo', 'YOUR PERSONAL INFORMATION')
            .assert.containsText('@address', 'YOUR ADDRESS')
    },
    'fill in user data in the form': (browser) => {
        let user = browser.page.newUser()

        user
            .waitForElementVisible('@creationForm', 3000)
            .setValue('@customerFirstName', testData['first_name'])
            .setValue('@customerLastName', testData['last_name'])
            .setValue('@customerPassword', testData['password'])
            .setValue('@addrFirstName', testData['first_name_addr'])
            .setValue('@addrLastName', testData['last_name_addr'])
            .setValue('@customerAddress1', testData['addr_line_1'])
            .setValue('@customerAddress2', testData['addr_line_2'])
            .setValue('@customerCity', testData['city'])
            .setValue('@customerState', testData['state'])
            .setValue('@customerZipcode', testData['zip'])
            .setValue('@customerMobile', testData['mobile_phone'])
            .click('@submitAccount')
    },
    'verify logged user and log out': (browser) => {
        let user = browser.page.newUser()
        
        user
            .assert.containsText('@pageHeading', 'MY ACCOUNT')
            .assert.containsText('@infoAccount', 'Welcome to your account. Here you can manage all of your personal information and orders.')
            .assert.containsText('@userInfo', testData['first_name'] + " " + testData['last_name'])
            .click('@userLogout')
    }
}