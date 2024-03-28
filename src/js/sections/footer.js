import ElemHTML from "../elem-html.js";


class Footer extends ElemHTML{
    elem = document.createElement('footer')

    constructor(classes = ''){
        super()
        this.classes = classes
    }
    setTemplate(){
        this.elem.classList.add(this.classes)
        this.elem.insertAdjacentHTML("afterbegin",`  
        <div class="row-1" id="ft">
            <p class="row-1__text ">Ready to get started?</p>
            <button class="row-1__btn button-card button-card_footer">Get started</button>
        </div>
        <div class="row-2">
            <div class="row-2__col-1">
                <p class="row-2__text">Subscribe to our
                    Website</p>
                <label class="row-2__input">
                    <button><svg width="20" height="21" viewBox="0 0 20 21" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7.15417 14.1333L10.975 10.3125L7.15417 6.49167L8.33334 5.3125L13.3333 10.3125L8.33334 15.3125L7.15417 14.1333Z"
                                fill="white" />
                        </svg>
                    </button>
                    <input type="text" placeholder="Email address">
                </label>
            </div>
            <div class="row-2__col-2">
                <a class="footer__link" href="#">Services</a>
                <a class="footer__link" href="#">Email Marketing</a>
                <a class="footer__link" href="#">Campaigns</a>
                <a class="footer__link" href="#">Branding</a>
                <a class="footer__link" href="#">Offline</a>
            </div>

            <div class="row-2__col-3">
                <a class="footer__link" href="#">About</a>
                <a class="footer__link" href="#">Our Story</a>
                <a class="footer__link" href="#">Benefits</a>
                <a class="footer__link" href="#">Team</a>
                <a class="footer__link" href="#">Careers</a>
            </div>
            <div class="row-2__col-4">
                <a class="footer__link" href="#">Help</a>
                <a class="footer__link" href="#">FAQs</a>
                <a class="footer__link" href="#">Contact Us</a>
            </div>
        </div>
        <div class="row-3">
            <p class="row-3__conditions">Terms & Conditions</p>
            <p class="row-3__policy">Privacy Policy</p>
            <div class="row-3__links">
                <a href="#"><svg width="10" height="20" viewBox="0 0 10 20" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8.14996 3.29509H9.96164V0.139742C9.64908 0.0967442 8.57414 0 7.32226 0C4.71016 0 2.92081 1.643 2.92081 4.66274V7.44186H0.0383301V10.9693H2.92081V19.845H6.45487V10.9701H9.22076L9.65983 7.44269H6.45404V5.01251C6.45487 3.99297 6.72939 3.29509 8.14996 3.29509Z"
                            fill="#111111" />
                    </svg>
                </a>
                <a href="#">
                    <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M22 2.11613C21.1819 2.475 20.3101 2.71288 19.4013 2.82838C20.3363 2.27013 21.0499 1.39287 21.3854 0.3355C20.5136 0.85525 19.5511 1.22238 18.5254 1.42725C17.6976 0.545875 16.5179 0 15.2309 0C12.7339 0 10.7236 2.02675 10.7236 4.51137C10.7236 4.86888 10.7539 5.21263 10.8281 5.53988C7.0785 5.357 3.76062 3.55988 1.53175 0.82225C1.14262 1.49738 0.914375 2.27012 0.914375 3.102C0.914375 4.664 1.71875 6.04862 2.91775 6.85025C2.19312 6.8365 1.48225 6.62613 0.88 6.29475C0.88 6.3085 0.88 6.32638 0.88 6.34425C0.88 8.536 2.44338 10.3565 4.4935 10.7759C4.12638 10.8763 3.72625 10.9244 3.311 10.9244C3.02225 10.9244 2.73075 10.9079 2.45712 10.8474C3.0415 12.6335 4.69975 13.9466 6.6715 13.9893C5.137 15.1896 3.18863 15.9129 1.07938 15.9129C0.7095 15.9129 0.35475 15.8964 0 15.851C1.99787 17.1394 4.36563 17.875 6.919 17.875C15.2185 17.875 19.756 11 19.756 5.04075C19.756 4.84137 19.7491 4.64887 19.7395 4.45775C20.6346 3.8225 21.3867 3.02913 22 2.11613Z"
                            fill="#111111" />
                    </svg>

                </a>
                <a href="#"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M6.875 0H15.125C18.9214 0 22 3.07862 22 6.875V15.125C22 18.9214 18.9214 22 15.125 22H6.875C3.07862 22 0 18.9214 0 15.125V6.875C0 3.07862 3.07862 0 6.875 0ZM15.125 19.9375C17.7787 19.9375 19.9375 17.7787 19.9375 15.125V6.875C19.9375 4.22125 17.7787 2.0625 15.125 2.0625H6.875C4.22125 2.0625 2.0625 4.22125 2.0625 6.875V15.125C2.0625 17.7787 4.22125 19.9375 6.875 19.9375H15.125Z"
                            fill="#111111" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M5.5 11C5.5 7.96263 7.96263 5.5 11 5.5C14.0374 5.5 16.5 7.96263 16.5 11C16.5 14.0374 14.0374 16.5 11 16.5C7.96263 16.5 5.5 14.0374 5.5 11ZM7.5625 11C7.5625 12.8948 9.10525 14.4375 11 14.4375C12.8948 14.4375 14.4375 12.8948 14.4375 11C14.4375 9.10388 12.8948 7.5625 11 7.5625C9.10525 7.5625 7.5625 9.10388 7.5625 11Z"
                            fill="#111111" />
                        <circle cx="16.9124" cy="5.08737" r="0.732875" fill="#111111" />
                    </svg>

                </a>
            </div>
        </div>
        `)
    }
    createFooter(){
        this.render()
    }
}
 


export default Footer 