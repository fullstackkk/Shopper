export default class ElemHTML {
    elem = document.createElement('div')
    
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
        console.log('render')
    }
    addInnerHTML(content) {
        if (!content) {
            return
        }
         
        this.elem.insertAdjacentHTML('beforebegin', content)
         
    }
}