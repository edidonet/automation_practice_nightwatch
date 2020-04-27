
module.exports = {
    // '@disabled': true,
    'existing user': (browser) => {
        let login = browser.page.login()

        login
            .with('t10@teste.com')
            .waitForElementVisible('@accountCreationError', 3000)
            .assert.containsText('@accountCreationError', 
            'An account using this email address has already been registered. Please enter a valid password or request a new one.')
    } 
}