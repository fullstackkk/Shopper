import scss from './scss/main.scss'
import createMobileMenu from './js/mobile-menu.js'
import createWelcomePopup from './js/welcome-popup.js'
import tabs from './js/tabs.js'
import { cardInfoTopPicksList, cardInfoWatchesList } from './js/data/tabs-card.js'
import Header from './js/sections/header.js'
import ProductsBlock from './js/sections/products.js'
import SellersBlock from './js/sections/sellers.js'

const header = new Header('header')
const productsBlock = new ProductsBlock('products')
const sellersBlock =new SellersBlock('sellers')

header.setTemplate()
header.createHeader()
productsBlock.setTemplate()
productsBlock.createProductsBlock()
sellersBlock.setTemplate()
sellersBlock.createSellersBlock()

createMobileMenu()
createWelcomePopup()

const tabSellersNames = ['Top Picks', 'Watches']
const tabEarphonesNames = ['Earbuds', 'Wireless', 'Wired']
tabs(tabSellersNames, [cardInfoTopPicksList, cardInfoWatchesList], '.sellers')
tabs(tabEarphonesNames, [cardInfoTopPicksList, cardInfoWatchesList, cardInfoTopPicksList], '.earphones')



 
 
 



// class Card extends ElemHTML {
//     elem = document.createElement('div')

//     constructor(cardTitle,reviews,price,name){
//         super(name)
//         this.price = price
//         this.cardTitle = cardTitle
//         this.reviews = reviews
//     }
//     setTemplate(){
//         this.elem.insertAdjacentHTML('beforeend', `
//         <div class="card__product">
//             <img class="card__img" src="./img/card__headphons.png" alt="card__headphons">
//             <div class="card__descr">
//                 <h4 class="card__text">${this.cardTitle}</h4>
//                 <div class="card__rating">
//                     <img src="./img/red__star.svg" alt="rating">
//                     <img src="./img/red__star.svg" alt="rating">
//                     <img src="./img/red__star.svg" alt="rating">
//                     <img src="./img/red__star.svg" alt="rating">
//                     <img src="./img/red__star.svg" alt="rating">
//                     <p class="card__rating-count">${this.reviews} Reviews</p>
//                 </div>
    
//                 <p class="card__price">$${this.price}</p>
//             </div>
//         </div>
//         <button class="card__btn button-card">Add to cart</button>
//         <div class="card__discount">
//             <p>Save 60%</p>
//         </div> `)
//     }

//     createCard(container) {
//         this.render(container)
//     }
// }

// const card = new Card()
// card.setTemplate()
// card.setClasses('tab__card')
// card.setClasses('card')
// card.createCard('.header')












