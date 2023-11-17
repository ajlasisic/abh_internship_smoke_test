const { $ } = require('@wdio/globals')
const Page = require('./Page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AccountPage extends Page {
    /**
     * define selectors using getter methods
     */
    get messageAlert () {
        return $('.message-success.success.message > div');
    }
}

module.exports = new AccountPage();
