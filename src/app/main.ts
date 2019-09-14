window.addEventListener('load', () => {
    var body : HTMLElement = document.body;
    body.classList.add('dark');

    var auth = new AuthentificationWidget();
    auth.attach(body);
});

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

enum AuthentificationState {
    REGISTER,
    SIGNIN
}

class AuthentificationWidget extends Widget {
    private form : HTMLFormElement;

    private signin_login : HTMLInputElement;
    private signin_password : HTMLInputElement;
    private signin_button : HTMLInputElement;

    private register_login : HTMLInputElement;
    private register_password : HTMLInputElement;
    private register_password_confirm : HTMLInputElement;
    private register_button: HTMLInputElement;

    private state : AuthentificationState;

    constructor() {
        super('authentification');

        this.form = document.createElement('form');
        this.appendChild(this.form);

        this.signin_login = document.createElement('input');
        this.signin_login.type = 'text';

        this.signin_password = document.createElement('input');
        this.signin_password.type = 'password';

        this.signin_button = document.createElement('input');
        this.signin_button.type = 'submit';
        this.signin_button.value = 'Sign in';

        this.register_login = document.createElement('input');
        this.register_login.type = 'text';

        this.register_password = document.createElement('input');
        this.register_password.type = 'password';

        this.register_password_confirm = document.createElement('input');
        this.register_password_confirm.type = 'password';

        this.register_button = document.createElement('input');
        this.register_button.type = 'submit';
        this.register_button.value = 'Register';

        this.register_button.addEventListener('click', (e) => {
            e.preventDefault();
            if (this.state === AuthentificationState.REGISTER) {
                this.submitRegister();
            } else {
                this.switchState(AuthentificationState.REGISTER);
            }
        });

        this.signin_button.addEventListener('click', (e) => {
            e.preventDefault();
            if (this.state === AuthentificationState.SIGNIN) {
                this.submitSignin();
            } else {
                this.switchState(AuthentificationState.SIGNIN);
            }
        });

        this.state = AuthentificationState.SIGNIN;
        this.switchState(AuthentificationState.SIGNIN);
    }

    private submitRegister() {
        // TODO
    }

    private submitSignin() {
        // TODO
    }

    public switchState(state : AuthentificationState) {
        while (this.form.firstChild) {
            this.form.removeChild(this.form.firstChild);
        }
        this.state = state;
        switch(this.state) {
            case AuthentificationState.REGISTER:
                this.form.appendChild(this.register_login);
                this.form.appendChild(this.register_password);
                this.form.appendChild(this.register_password_confirm);
                this.form.appendChild(this.signin_button);
                this.form.appendChild(this.register_button);
                break;
            case AuthentificationState.SIGNIN:
                this.form.appendChild(this.signin_login);
                this.form.appendChild(this.signin_password);
                this.form.appendChild(this.signin_button);
                this.form.appendChild(this.register_button);
                break;
        }
    }
}