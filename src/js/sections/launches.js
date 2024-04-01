import ElemHTML from "../elem-html.js";
import headphones__1 from '../../img/headphones__1.png'
import headphones__2 from '../../img/headphones__2.png'
import addToCart from '../service/add-to-cart.js'
class LaunchesBlock extends ElemHTML{
    

    constructor(classes = ''){
        super()
        this.classes = classes
    }
    setTemplate(){
        this.elem.classList.add(this.classes)
        this.elem.insertAdjacentHTML("afterbegin",` 
        <h2 class="launches__title launches__title-margin-bt">New Launches</h2>
        <div class="launches__wrapper bg-primary-products">
            
            <div class="launches__images">
                <img src="${headphones__1}" alt="headphones">
                <img class="down" src="${headphones__2}" alt="headphones">
            </div>
             
            <div class="launches-descr launches-descr-normal">
                <div class="launches-descr__title">Airdrop 500 Anc</div>
                <div class="launches-descr__description">Lorem ipsum is a placeholder text commonly used to demonstrate
                    the
                    visual form of a launches ... Read More</div>
                <div class="price price_launchess">
                    <p class="price__text">Price :</dp>
                    <p class="price__number">$45.99</>
                </div>
                <div class="launches__colors">
                    <div class="color black"></div>
                    <div class="color yellow"></div>
                    <div class="color blue"></div>
                </div>
                <div class="launches__button-container">
                    <button class="button-card  ">Add to cart</button>
                    <button class="button-outline  ">Explore More</button>
                </div>
            </div>
        </div> 
    `)
    }
    createLaunchesBlock(){
        this.render()
        const buyBtn = document.querySelector('.launches__wrapper').querySelector('.button-card')
        buyBtn.addEventListener('click',()=>{
            console.log('Add to cart')
            addToCart()
        })
    }
}
 


export default LaunchesBlock 