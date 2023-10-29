const { $ } = require("@wdio/globals");
const Page = require("./page");
class ProductPage extends Page {
    get minervaTshirt(){
        return $('.products.list.items.product-items > li:nth-child(1)')
    }
    get selectSizeS() {
        return $('.swatch-opt-1492 >div:nth-child(1) > div:nth-child(1) > div:nth-child(2)')
    }
    get selectColorBlue () {
        return $('.swatch-opt-1492 >div:nth-child(2) > div:nth-child(1) > div:nth-child(2)')
    }
    get btnAddToCart() {
        return $('.products.list.items.product-items > li:nth-child(1) > div >div > div:nth-child(5) > div > div:nth-child(1) > form > button')
    }
    async addProductToCart() {
        await this.selectSizeS.click()
        await this.selectColorBlue.click()
        await this.minervaTshirt.moveTo();
        await this.btnAddToCart.click()
    }
}
module.exports = new ProductPage()