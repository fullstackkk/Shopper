import scss from './scss/main.scss'
import MobileMenu from './js/sections/mobile-menu.js'
import createWelcomePopup from './js/welcome-popup.js'
import Header from './js/sections/header.js'
import ProductsBlock from './js/sections/products.js'
import SellersBlock from './js/sections/sellers.js'
import EarphonesBlock from './js/sections/earphones.js'
import LaunchesBlock from './js/sections/launches.js'
import Footer from './js/sections/footer.js'

const header = new Header('header')
const productsBlock = new ProductsBlock('products')
const sellersBlock = new SellersBlock('sellers')
const earphonesBlock = new EarphonesBlock('earphones')
const launchesBlock = new LaunchesBlock('launches')
const footer = new Footer('footer')
const mobileMenu = new MobileMenu('mobile-menu hidden')

new Promise((res) => {
    header.setTemplate()
    header.createHeader()
    res()
}).then(() => {
    productsBlock.setTemplate()
    productsBlock.createProductsBlock()
}).then(async () => {
    sellersBlock.setTemplate()
    await sellersBlock.createSellersBlock()
}).then(async () => {
    earphonesBlock.setTemplate()
    await earphonesBlock.createEarphonesBlock() 
}).then(() => {
    launchesBlock.setTemplate()
    launchesBlock.createLaunchesBlock()
}).then(() => {
    footer.setTemplate()
    footer.createFooter()
}).then(() => {
    mobileMenu.setTemplate()
    mobileMenu.createMobileMenu()
}).then(() => {
    createWelcomePopup()
})






