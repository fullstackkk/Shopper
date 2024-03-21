import scss from './scss/main.scss'
import createMobileMenu from './js/mobile-menu.js'
import createWelcomePopup from './js/welcome-popup.js'
import tabs from './js/tabs.js'
import {cardInfoTopPicksList,cardInfoWatchesList} from './js/data/tabs-card.js'



createMobileMenu()
createWelcomePopup()

const tabSellersNames = ['Top Picks','Watches']
const tabEarphonesNames = ['Earbuds','Wireless','Wired']
tabs(tabSellersNames,[cardInfoTopPicksList,cardInfoWatchesList],'.sellers')
tabs(tabEarphonesNames,[cardInfoTopPicksList,cardInfoWatchesList,cardInfoTopPicksList],'.earphones')

 

// const user1 ={
//     name:"Albert",
//     hasJob:true,
//     checkHasJob (){
//         console.log(this.name)
//     },
//     children:{
//         name:"Oleg",
//         age:'1',
//         sayName(){
//             let sayAge = ()=>{
//                 console.log(this.age)
//             }
//             sayAge()
//             console.log(this.name)
//         }
//     }
// }

// user1.children.sayName()


function User(name = ''){
    this.name = name;
    this.hasJob = false;
    this.hasChildren = false;
    this.age = 0
    this.checkHasJob = function(){
        if(this.hasJob){
            console.log(`У ${this.name} есть работа`)
        }else{
            console.log(`У ${this.name} нет работы`)
        };
    }
    this.setHasJob= function(bool){
        // 
        // 
        //
        this.hasJob = bool
    }
    this.setAge = function(num){
        if(num > 0 && num < 99){
            this.age= num
        }else{
            throw new Error('Возраст не может быть меньше "0" и больше "99" лет')
        }
    }
    this.checkAge = function(){
        console.log(this.age)
    }
}

const user = new User("Albert")
const user2 = new User('Anna')
const user3 = new User('Anna')
const user4 = new User('Anna')
const user5 = new User('Anna')
const user6 = new User('Anna')
const user7 = new User('Anna')

user2.checkHasJob()
user2.setHasJob(true)
user2.checkHasJob()
user.setAge(9)
user.checkAge()

