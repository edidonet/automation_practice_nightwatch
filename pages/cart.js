
var login_actions = {
    with: function (email, password) {
        return this
            .navigate()
            .click('@signInButton')
            .setValue('@accountEmail', email)
            .setValue('@accountPassword', password)
            .click('@submitAccountButton')   
    }
}

module.exports = {
    url: 'http://automationpractice.com/',
    commands: [login_actions],
    elements: {
        signInButton: 'a.login',
        accountEmail: '#email',
        accountPassword: '#passwd',
        //accountEmail: '#noSlide > h1',
        submitAccountButton: 'button[id=SubmitLogin]',
        search: '#search_query_top',
        searchButton: 'button[name=submit_search]',
        product: 'a.product-name[title="Faded Short Sleeve T-shirts"]',
        addToCartButton: 'button.exclusive',
        divCheckout: '#layer_cart > div.clearfix',
        divCheckoutProduct: '.layer_cart_product',
        proceedToCheckoutButtonDiv: '.button.button-medium[title="Proceed to checkout"]',
        cartTitle: '#cart_title',
        deliveryAddressTxt: '.address.first_item',
        invoiceAddressTxt: '.address.last_item',
        proceedToCheckoutButtonPage: '.standard-checkout[title="Proceed to checkout"]',
        addressesTxt: 'h1.page-heading',
        proceedToCheckouButtonAddress: 'button[name="processAddress"]',
        shippingTxt: 'h1.page-heading',
        agreeChkbox: '#cgv',
        proceedToCheckouButtonShipping: 'button[name="processCarrier"]',
        paymentTxt: 'h1.page-heading',
        paymentButton: '.bankwire[title="Pay by bank wire"]',
        orderSummaryTxt: 'h1.page-heading',
        orderConfirmationButton: 'button.button-medium[type=submit]',
        orderConfirmationTxt: 'h1.page-heading',
        orderCompleteTxt: '.cheque-indent'
    }
}