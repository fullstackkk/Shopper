import scss from './scss/main.scss'
import MobileMenu from './js/sections/mobile-menu.js'
import createWelcomePopup from './js/welcome-popup.js'
import tabs from './js/tabs.js'
import { cardInfoTopPicksList, cardInfoWatchesList } from './js/data/tabs-card.js'
import Header from './js/sections/header.js'
import ProductsBlock from './js/sections/products.js'
import SellersBlock from './js/sections/sellers.js'
import EarphonesBlock from './js/sections/earphones.js'
import LaunchesBlock from './js/sections/launches.js'
import Footer from './js/sections/footer.js'

const header = new Header('header')
const productsBlock = new ProductsBlock('products')
const sellersBlock =new SellersBlock('sellers')
const earphonesBlock = new EarphonesBlock('earphones')
const launchesBlock = new LaunchesBlock('launches')
const footer = new Footer('footer')
const mobileMenu = new MobileMenu('mobile-menu hidden')

header.setTemplate()
header.createHeader()
productsBlock.setTemplate()
productsBlock.createProductsBlock()
sellersBlock.setTemplate()
sellersBlock.createSellersBlock()
earphonesBlock.setTemplate()
earphonesBlock.createEarphonesBlock()
launchesBlock.setTemplate()
launchesBlock.createLaunchesBlock()
footer.setTemplate()
footer.createFooter()
mobileMenu.setTemplate()
mobileMenu.createMobileMenu()


createWelcomePopup()

// const tabSellersNames = ['Top Picks', 'Watches']
// const tabEarphonesNames = ['Earbuds', 'Wireless', 'Wired']
// tabs(tabSellersNames, [cardInfoTopPicksList, cardInfoWatchesList], '.sellers')
// tabs(tabEarphonesNames, [cardInfoTopPicksList, cardInfoWatchesList, cardInfoTopPicksList], '.earphones')



