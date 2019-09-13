window.addEventListener('load', () => {
    var body : HTMLElement = document.body;
    body.classList.add('dark');

    var auth = new Authentification();
    auth.attach(body);
});

class Widget {
    private element : HTMLElement;

    constructor(className : string) {
        this.element = document.createElement('div');
        this.element.classList.add(className);
    }

    protected insert(elem : HTMLElement) {
        this.element.appendChild(elem);
    }

    attach(parent : HTMLElement) {
        parent.appendChild(this.element);
    }

    detach() {
        if (this.element.parentNode) {
            this.element = this.element.parentNode.removeChild(this.element);
        } else {
            throw 'Can\'t detach an element with parentNode property to null !';
        }
    }

}

class Authentification extends Widget {
    private form : HTMLFormElement;

    private signin_login : HTMLInputElement;
    private signin_password : HTMLInputElement;

    private register_login : HTMLInputElement;
    private register_password : HTMLInputElement;

    private static states = {
        
    }

    constructor() {
        super('authentificate');

        this.form = document.createElement('form');
        this.form.addEventListener('submit', (e) => { this.validate(e) })
        this.form.classList.add('authentification');

        this.signin_login = document.createElement('input');
        this.signin_login.type = 'text';

        this.signin_password = document.createElement('input');
        this.signin_password.type = 'password';

        this.register_login = document.createElement('input');
        this.register_login.type = 'text';

        this.register_password = document.createElement('input');
        this.register_password.type = 'password';

        this.form.appendChild(this.signin_login);
        this.form.appendChild(this.signin_password);
        this.insert(this.form);
    }

    private validate(event : Event) {
        event.preventDefault();
    }
}