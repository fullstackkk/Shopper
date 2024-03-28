import ElemHTML from "../elem-html.js";
import search from '../../img/search.svg'


class MobileMenu extends ElemHTML{

    constructor(classes = ''){
        super('section')
        this.classes = classes
    }
    setTemplate(){
        this.elem.classList.add('mobile-menu')
        this.elem.classList.add('hidden')
        this.elem.insertAdjacentHTML("afterbegin",`  
        
        <button class="mobile-menu__close">
            x
        </button>
        <label class="search__input__label">
            <button class="search__input__btn">
                <img src="${search}" alt="search">
            </button>
            <input class="search__input" type="text" placeholder="Search Items">
        </label>
        <ul class="mobile-menu__links">
            <li class="link"> <a class="menu-link" href="#">Features </a></li>
            <li class="link"> <a class="menu-link" href="#">Sellers </a></li>
            <li class="link"> <a class="menu-link" href="#">Earphones </a></li>
            <li class="link"> <a class="menu-link" href="#">Launches </a></li>
        </ul>
   
    `)
    }
    createMobileMenu(){
        this.render()
        const mobileMenu = document.querySelector('.mobile-menu')
        document.querySelector('.menu_button').addEventListener('click',(event)=>{
            mobileMenu.classList.remove('hidden')
            mobileMenu.classList.add('visible')
        })
        
        mobileMenu.querySelector('.mobile-menu__close')
            .addEventListener('click',(event)=>{
                mobileMenu.classList.remove('visible')
                mobileMenu.classList.add('hidden')
                
        })
    }
}
 


export default MobileMenu 
