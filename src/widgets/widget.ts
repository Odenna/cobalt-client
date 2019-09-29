class Widget {
    private element : HTMLElement;

    constructor(className : string) {
        this.element = document.createElement('div');
        this.element.classList.add('widget');
        this.element.classList.add(className);
    }

    protected appendChild(elem : HTMLElement) {
        this.element.appendChild(elem);
    }

    attach(parent : HTMLElement) {
        parent.appendChild(this.element);
    }

    detach() {
        if (this.element.parentNode) {
            this.element = this.element.parentNode.removeChild(this.element);
        } else {
            throw "Can't detach an element with parentNode property to null !";
        }
    }

}

export { Widget };