import ElemHTML from "../elem-html.js";
import search from '../../img/search.svg'
import human from '../../img/human.svg'
import basket from '../../img/basket.svg'
import avatar__1 from '../../img/avatar__1.png'
import avatar__2 from '../../img/avatar__2.png'
import avatar__3 from '../../img/avatar__3.png'
import avatar__4 from '../../img/avatar__4.png'
import play from '../../img/play.png'
import headphones from '../../img/headphones.png'
import star from '../../img/star.svg'

class Header extends ElemHTML{
    

    constructor(classes = ''){
        super()
        this.classes = classes
    }
    setTemplate(){
        this.elem.classList.add(this.classes)
        this.elem.insertAdjacentHTML("afterbegin",`  
        <div class="container ">
            <nav class="navbar navbar_header">
                <div class="controls">
                    <h3 class="logo__title">Shop<span>per</span></h3>
                    <button class="menu_button"> <hr class="black"></button>
                    <label class="search__input__label">
                        <button class="search__input__btn">
                            <img src="${search}" alt="search">
                        </button>
                        <input class="search__input" type="text" placeholder="Search Items">
                    </label>
                    <button class="basket rotate-center">
                        <img src="${basket}" alt="basket">
                        <p class="basket__text">0 Items Added</p>
                    </button>
                    <button class="login">
                        <img src="${human}" alt="login">
                        <p class="login__text">Login or Sign Up</p>
                    </button>

                </div>
                <ul class="links">
                    <li class="link"> <a class="menu-link" href="#">Features </a></li>
                    <li class="link"> <a class="menu-link" href="#sellers">Sellers </a></li>
                    <li class="link"> <a class="menu-link" href="#earphones">Earphones </a></li>
                    <li class="link"> <a class="menu-link" href="#launches">Launches </a></li>
                </ul>
            </nav>
            <!-- About  -->
            <div class="about">
                <!-- left block -->
                <div class="about__descr">
                    <h1 class="title">Discover Our Latest Products</h1>
                    <p class="about__descr_text">Lorem ipsum is a placeholder text commonly used to demonstrate the
                        visual
                        form of a product</p>
                    <div class="about__descr__container">
                        <button class="about__descr_btn">Buy Now</button>
                        <div class="about__reviews">
                            <div class="icons">
                                <img class="icon icon_1" src="${avatar__1}" alt="avatar">
                                <img class="icon icon_2" src="${avatar__2}" alt="avatar">
                                <img class="icon icon_3" src="${avatar__3}" alt="avatar">
                                <img class="icon icon_4" src="${avatar__4}" alt="avatar">
                            </div>
                            <p class="about__reviews_descr">15k Well Reviews</p>
                        </div>
                    </div>
                </div>
                <!-- right block -->
                <div class="about__interactive">
                    <div class="play">
                        <div class="play__img">
                            <img src="${play}" alt="play" />
                        </div>
                        <div class="play__img-round"></div>
                        <button class="play__text">Play Video</button>
                    </div>
                    <div class="about__interactive__title">
                        <p class="title__word title__word_R">R</p>
                        <p class="title__word title__word_e">e</p>
                        <p class="title__word title__word_d">d</p>
                        <p class="title__word title__word_B">B</p>
                        <p class="title__word title__word_e-e">e</p>
                        <p class="title__word title__word_a">a</p>
                        <p class="title__word title__word_t">t</p>
                        <p class="title__word title__word_s">s</p>
                        <p class="title__word title__word_M">M</p>
                        <p class="title__word title__word_I">I</p>
                        <p class="title__word title__word_9">9</p>
                        <p class="title__word title__word_c">c</p>
                        <p class="title__word title__word_2">2</p>
                        <p class="title__word title__word_z">z</p>
                        <p class="title__word title__word_m">m</p>
                        <p class="title__word title__word_sl">/</p>
                        <p class="title__word title__word_a-a">a</p>
                        <img class="headphones__img" src="${headphones}" alt="headphones">
                        <p class="headphones__text">$50</p>
                        <img class="star star__first" src="${star}" alt="star">
                        <img class="star star__second" src="${star}" alt="star">
                    </div>

                </div>

            </div>
        </div>
     `)
    }
    createHeader(){
        this.render()
    }
}
 


export default Header 