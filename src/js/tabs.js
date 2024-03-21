import getCards from './get-cards.js'

export default function tabs(tabNames,dataCards,tabContainerElement ){
    // tabNames - string[]
    // dataCards - {
    //     cardTitle: string,
    //     reviews: number,
    //     price: number,
    // }[][]
    // tabContainerElement - Element | null

    if(!tabContainerElement) {
        return
    }
    
    const tabCardWrapper =  document.querySelector(`${tabContainerElement}`).querySelector('.tab__card-wrapper')
    const tabBtnWrapper =document.querySelector(`${tabContainerElement}`).querySelector('.tab__btn-wrapper')

    tabBtnWrapper.addEventListener("click",(event)=>{
        const target = event.target
        const emptyWrapper = document.createElement('div')
        emptyWrapper.classList.add('tab__card-wrapper')
        
    
        const ovalButtons = tabBtnWrapper.querySelectorAll('button')
        ovalButtons.forEach(btn =>{
            btn.classList.remove('active')
        })
        target.classList.add('active')

        tabNames.forEach((tab,index) =>{
          if( tab == target.innerText){
              getCards(dataCards[index],tabCardWrapper)

          }
        })        
    })
}









 