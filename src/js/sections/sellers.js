import ElemHTML from "../elem-html.js";
import redStar from '../../img/red__star.svg'
import card__headphons from '../../img/card__headphons.png'
import card__headphons__2 from '../../img/card__headphons__2.png'
import card__headphons__3 from '../../img/card__headphons__3.png'
import getSellers from '../service/get-sellers.js'
import tabs from '../tabs.js'
import { cardInfoWatchesList } from '../data/tabs-card.js'

const tabSellersNames = ['Top Picks', 'Watches']
class SellersBlock extends ElemHTML{
    

    constructor(classes = ''){
        super('section')
        this.classes = classes
        this.topPicks = []
        this.topWatches = []
    }

    setTemplate(){
        this.elem.classList.add(this.classes)
        this.elem.insertAdjacentHTML("afterbegin",` 
        
        <h2 class="sellers__title sellers__title-margin-bt">Top Sellers</h2>
        <div class="tab container">
            <div class="tab__btn-wrapper">
                <button class="button-oval active">Top Picks</button>
                <button class="button-oval">Watches</button>
            </div>
            <div class="tab__card-wrapper">
                <!-- 1 -->
                <div class="tab__card card">
                    <div class="card__product">
                        <img class="card__img" src="${card__headphons}" alt="card__headphons">
                        <div class="card__descr">
                            <h4 class="card__text">Boat Rockerz 333</h4>
                            <div class="card__rating">
                                <img src="${redStar}" alt="rating">
                                <img src="${redStar}" alt="rating">
                                <img src="${redStar}" alt="rating">
                                <img src="${redStar}" alt="rating">
                                <img src="${redStar}" alt="rating">
                                <p class="card__rating-count">75 Reviews</p>
                            </div>

                            <p class="card__price">$20</p>
                        </div>
                    </div>
                    <button class="card__btn button-card">Add to cart</button>
                    <div class="card__discount">
                        <p>Save 60%</p>
                    </div>
                </div>
                <!-- 2 -->

                <div class="tab__card card">
                    <div class="card__product card__product_blue">
                        <img class="card__img" src="${card__headphons__2}" alt="card__headphons">
                        <div class="card__descr">
                            <h4 class="card__text">Boat kerz 234</h4>
                            <div class="card__rating">
                                <img src="${redStar}" alt="rating">
                                <img src="${redStar}" alt="rating">
                                <img src="${redStar}" alt="rating">
                                <img src="${redStar}" alt="rating">
                                <img src="${redStar}" alt="rating">
                                <p class="card__rating-count">75 Reviews</>
                            </div>

                            <p class="card__price">$40</p>
                        </div>
                    </div>
                    <button class="card__btn button-card">Add to cart</button>

                </div>  
                <!-- 3 -->
                 <div class="tab__card card">
                    <div class="card__product card__product_purp">
                        <img class="card__img" src="${card__headphons__3}" alt="card__headphons">
                        <div class="card__descr">
                            <h4 class="card__text">Boat Rockerz 323</h4>
                            <div class="card__rating">
                                <img src="${redStar}" alt="rating">
                                <img src="${redStar}" alt="rating">
                                <img src="${redStar}" alt="rating">
                                <img src="${redStar}" alt="rating">
                                <img src="${redStar}" alt="rating">
                                <p class="card__rating-count">75 Reviews</p>
                            </div>

                            <p class="card__price">$30</p>
                        </div>
                    </div>
                    <button class="card__btn button-card">Add to cart</button>
                    <div class="card__discount card__discount_purp">
                        <p>Save 40%</p>
                    </div>
                </div>  
            </div>
        </div>
    
     `)
    }
    async createSellersBlock(){
        this.topPicks = await getSellers()
        console.log(this.topPicks)
        this.render()
        tabs(tabSellersNames, [this.topPicks, cardInfoWatchesList], '.sellers')
    }
}
 


export default SellersBlock 