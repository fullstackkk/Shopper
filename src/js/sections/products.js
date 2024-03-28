import ElemHTML from "../elem-html.js";
import headphones__1 from '../../img/headphones__1.png'
import headphones__2 from '../../img/headphones__2.png'
import headphones__3 from '../../img/headphones__3.png'


class ProductsBlock extends ElemHTML{
    

    constructor(classes = ''){
        super()
        this.classes = classes
    }
    setTemplate(){
        this.elem.classList.add(this.classes)
        this.elem.insertAdjacentHTML("afterbegin",`  
        <!-- левый блок -->
        <div class="images ">
            <h2 class="images__title">Apple wireless Airpod</h2>
            <div class="images__container images__container_products">
                <img class="images__container_1" src="${headphones__1}" alt="headphones">
                <img class="images__container_2" src="${headphones__2}" alt="headphones">
                <img class="images__container_3" src="${headphones__3}" alt="headphones">
            </div>
            <div class="price price_products">
                <p class="price__text">Price :</dp>
                <p class="price__number">$45.99</>
            </div>
        </div>
        <!-- правый блок -->
        <div class="product-descr product-descr-normal">
            <div class="product-descr__title">Our Featured Products</div>
            <div class="product-descr__description">Lorem ipsum is a placeholder text commonly used to demonstrate the
                visual form of a product</div>
            <button class="button-card button-card_product-descr">Add to cart</button>
            <button class="button-outline button-outline_product-descr">View more</button>
        </div>
    `)
    }
    createProductsBlock(){
        this.render()
    }
}
 


export default ProductsBlock 