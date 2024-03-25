import ElemHTML from "../elem-html.js";


class SellersBlock extends ElemHTML{
    elem = document.createElement('section')

    constructor(classes = ''){
        super()
        this.classes = classes
    }

    setTemplate(){
        this.elem.classList.add(this.classes)
        this.elem.insertAdjacentHTML("afterbegin",`  <section class="sellers" id="sellers">
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
                        <img class="card__img" src="../src/img/card__headphons.png" alt="card__headphons">
                        <div class="card__descr">
                            <h4 class="card__text">Boat Rockerz 333</h4>
                            <div class="card__rating">
                                <img src="../src/img/red__star.svg" alt="rating">
                                <img src="../src/img/red__star.svg" alt="rating">
                                <img src="../src/img/red__star.svg" alt="rating">
                                <img src="../src/img/red__star.svg" alt="rating">
                                <img src="../src/img/red__star.svg" alt="rating">
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
                        <img class="card__img" src="../src/img/card__headphons__2.png" alt="card__headphons">
                        <div class="card__descr">
                            <h4 class="card__text">Boat kerz 234</h4>
                            <div class="card__rating">
                                <img src="../src/img/red__star.svg" alt="rating">
                                <img src="../src/img/red__star.svg" alt="rating">
                                <img src="../src/img/red__star.svg" alt="rating">
                                <img src="../src/img/red__star.svg" alt="rating">
                                <img src="../src/img/red__star.svg" alt="rating">
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
                        <img class="card__img" src="../src/img/card__headphons__3.png" alt="card__headphons">
                        <div class="card__descr">
                            <h4 class="card__text">Boat Rockerz 323</h4>
                            <div class="card__rating">
                                <img src="../src/img/red__star.svg" alt="rating">
                                <img src="../src/img/red__star.svg" alt="rating">
                                <img src="../src/img/red__star.svg" alt="rating">
                                <img src="../src/img/red__star.svg" alt="rating">
                                <img src="../src/img/red__star.svg" alt="rating">
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
    </section>
     `)
    }
    createSellersBlock(){
        this.render()
    }
}
 


export default SellersBlock 