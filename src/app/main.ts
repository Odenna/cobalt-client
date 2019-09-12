window.addEventListener('load', () => {
    var body : HTMLElement = document.body;
    body.classList.add('dark');

    var auth = new Authentification(body);
    auth.show();
});

class Authentification {
    private element : HTMLElement;
    private parent : HTMLElement;

    constructor(parent : HTMLElement) {
        this.parent = parent;

        this.element = document.createElement('form');
        this.element.addEventListener('submit', (e) => { this.validate(e) })
        this.element.classList.add('authentification');
        
        var pseudo = document.createElement('input');
        pseudo.type = 'text';

        this.element.appendChild(pseudo);

        var password = document.createElement('input');
        password.type = 'password';

        this.element.appendChild(password);
    }

    private validate(event : Event) {
        event.preventDefault();
    }

    public show() {
        this.parent.appendChild(this.element);
    }

    public remove() {
        this.element = this.parent.removeChild(this.element);
    }
}