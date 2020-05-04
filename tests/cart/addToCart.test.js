import userData from "../data/existingUser.json"
import testData from "../data/newUser.json"
import cartData from "../data/cart.json"

module.exports = {
    //'@disabled': true,
    'log in': (browser) => {
        let cart = browser.page.cart()
        
        cart.with(userData['email'], userData['password'])
    },
    'verify logged user': (browser) => {
        let user = browser.page.newUser()

        user
            .assert.containsText('@pageHeading', 'MY ACCOUNT')
            .assert.containsText('@infoAccount', 'Welcome to your account. Here you can manage all of your personal information and orders.')
            .assert.containsText('@userInfo', testData['first_name'] + " " + testData['last_name'])

    },
    'search for product': (browser) => {
        let cart = browser.page.cart()

        cart
            .setValue('@search', cartData['product'])
            .click('@searchButton')
            .waitForElementVisible('@product', 5000)

    },
    'click the product and add to cart': (browser) => {
        let cart = browser.page.cart()

        cart
            .click('@product')
            .click('@addToCartButton')

    },
    'click the proceed the checkout': (browser) => {
        let cart = browser.page.cart()

        cart   
            .waitForElementVisible('@divCheckout', 3000)
            .assert.containsText('@divCheckoutProduct', 'Product successfully added to your shopping cart')
            .click('@proceedToCheckoutButtonDiv') 
    },

    'click the proceed shopping cart summary': (browser) => {
        let cart = browser.page.cart()

        cart   
            .assert.containsText('@cartTitle', 'SHOPPING-CART SUMMARY')
            .assert.containsText('@deliveryAddressTxt', 'DELIVERY ADDRESS (MY ADDRESS)')
            .assert.containsText('@invoiceAddressTxt', 'INVOICE ADDRESS (MY ADDRESS)')
            .click('@proceedToCheckoutButtonPage') 
    },

    'click the proceed the address': (browser) => {
        let cart = browser.page.cart()

        cart   
            .waitForElementVisible('@addressesTxt', 3000)
            .assert.containsText('@addressesTxt', 'ADDRESSES')
            .click('@proceedToCheckouButtonAddress') 
    },

    'click the proceed the shipping': (browser) => {
        let cart = browser.page.cart()

        cart   
            .waitForElementVisible('@shippingTxt', 3000)
            .assert.containsText('@shippingTxt', 'SHIPPING')
            .click('@agreeChkbox')
            .click('@proceedToCheckouButtonShipping')
    },

    'click the proceed the payment method': (browser) => {
        let cart = browser.page.cart()

        cart   
            .waitForElementVisible('@paymentTxt', 3000)
            .assert.containsText('@paymentTxt', 'PLEASE CHOOSE YOUR PAYMENT METHOD')
            .click('@paymentButton')
    },

    'click the proceed the order summary': (browser) => {
        let cart = browser.page.cart()

        cart   
            .waitForElementVisible('@orderSummaryTxt', 3000)
            .assert.containsText('@orderSummaryTxt', 'ORDER SUMMARY')
            .click('@orderConfirmationButton')

    },
    
    'click the proceed the order confirmation': (browser) => {
        let cart = browser.page.cart()

        cart   
            .waitForElementVisible('@orderConfirmationTxt', 3000)
            .assert.containsText('@orderConfirmationTxt', 'ORDER CONFIRMATION')
            .assert.containsText('@orderCompleteTxt', 'Your order on My Store is complete.')

    }

}
