module.exports = {

    emailId: (browser) => {
        var todayDate = new Date().toLocaleDateString(undefined, {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
        var timeNow = new Date()
        timeNow = timeNow.getUTCHours().toString()
            + "-" + timeNow.getUTCMinutes().toString()
            + "-" + timeNow.getUTCSeconds().toString()
            + "-" + timeNow.getUTCMilliseconds().toString()
        var emailString = timeNow + "+" + todayDate + "@test.com"
        return emailString
    }
}

