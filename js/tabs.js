const cardInfoTopPicksList = [{
    cardTitle: "Безпроводные наушники №1",
    reviews:100,
    price:32,
},{
    cardTitle: "Безпроводные наушники №2",
    reviews:130,
    price:95,
},{
    cardTitle: "Безпроводные наушники №3",
    reviews:88,
    price:123,
}]
const cardInfoWatchesList = [{
    cardTitle: "Безпроводные наушники №456",
    reviews:100,
    price:32,
},{
    cardTitle: "Безпроводные наушники №981",
    reviews:130,
    price:95,
},{
    cardTitle: "Безпроводные наушники №330",
    reviews:88,
    price:123,
}]

// "beforebegin" – вставить html непосредственно перед elem,
// "afterbegin" – вставить html в начало elem,
// "beforeend" – вставить html в конец elem,
// "afterend" – вставить html непосредственно после elem.
// mobilemenu.insertAdjacentHTML('afterbegin', input)
// mobilemenu.remove('afterbegin', input)


// mobilemenu.append(div)
// mobilemenu.prepend(div)
// mobilemenu.before(div)
// mobilemenu.after(div) 
// mobilemenu.replaceWith(div) 

const sellersTabCardWrapper =  document.querySelector('.sellers').querySelector('.tab__card-wrapper')
const earphonesTabCardWrapper =  document.querySelector('.earphones').querySelector('.tab__card-wrapper')

const sellersTabBtnWrapper =document.querySelector('.sellers').querySelector('.tab__btn-wrapper')


function getCards(cardInfoList , elem, remove = false){
     
    const arr = cardInfoList.map(cardInfo => {
        const tab = `<div class="tab__card card">
                <div class="card__product">
                    <img class="card__img" src="./img/card__headphons.png" alt="card__headphons">
                    <div class="card__descr">
                        <h4 class="card__text">${cardInfo.cardTitle}</h4>
                        <div class="card__rating">
                            <img src="./img/red__star.svg" alt="rating">
                            <img src="./img/red__star.svg" alt="rating">
                            <img src="./img/red__star.svg" alt="rating">
                            <img src="./img/red__star.svg" alt="rating">
                            <img src="./img/red__star.svg" alt="rating">
                            <p class="card__rating-count">${cardInfo.reviews} Reviews</p>
                        </div>

                        <p class="card__price">$${cardInfo.price}</p>
                    </div>
                </div>
                <button class="card__btn button-card">Add to cart</button>
                <div class="card__discount">
                    <p>Save 60%</p>
                </div>
            </div>`
         return tab
            // elem.insertAdjacentHTML("beforeend",tab)
    })
    // if(remove){
    //     elem.remove("beforeend",arr.join())
    //     return
    // }
    elem.insertAdjacentHTML("beforeend",arr.join(' '))
}


sellersTabBtnWrapper.addEventListener("click",(event)=>{
    const target = event.target
    const emptyWrapper = document.createElement('div')
    emptyWrapper.classList.add('tab__card-wrapper')
    

    const ovalButtons = sellersTabBtnWrapper.querySelectorAll('button')
    ovalButtons.forEach(btn =>{
        btn.classList.remove('active')

    })
    target.classList.add('active')
    if(target.innerText == "Top Picks"){  
        // sellersTabCardWrapper.replaceWith(emptyWrapper)
        getCards(cardInfoTopPicksList,sellersTabCardWrapper,true)
    }else{ 
        // sellersTabCardWrapper.replaceWith(emptyWrapper) 
        getCards(cardInfoWatchesList,sellersTabCardWrapper,false)
    }
    
})




getCards(cardInfoTopPicksList,sellersTabCardWrapper)
// getCards(cardInfoList,earphonesTabCardWrapper)












 