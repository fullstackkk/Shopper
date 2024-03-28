export default class ElemHTML {
     
    constructor(tag = 'div'){
        this.elem = document.createElement(tag)
    }
    
    setClasses(className = '') {
        this.elem.classList.add(className)
    }
    removeClasses(className = '') {
        this.elem.classList.remove(className)
    }

    render(containter = 'body') {
        if (!containter) {
            return
        }
        document.querySelector(containter).append(this.elem)
    }
    addInnerHTML(content) {
        if (!content) {
            return
        }
         
        this.elem.insertAdjacentHTML('beforebegin', content)
         
    }
}