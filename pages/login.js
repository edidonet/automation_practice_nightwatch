
var new_login_actions = {
    with: function (email) {
        return this
            .navigate()
            .click('@signInButton')
            .setValue('@emailCreationLogin', email)
            .click('@createAccountButton')   
    }
}

module.exports = {
    url: 'http://automationpractice.com/',
    commands: [new_login_actions],
    elements: {
        accountCreation: '#noSlide > h1',
        createAccountButton: 'button[id=SubmitCreate]',
        signInButton: 'a.login',
        emailCreationLogin: '#email_create',
        personalInfo: '#account-creation_form > div:nth-child(1) > h3',
        address: '#account-creation_form > div:nth-child(2) > h3',
        accountCreationError: '#create_account_error',
        emailUser: '#email',
        password: '#passwd',
        submitButton: '#SubmitLogin'
    }
}