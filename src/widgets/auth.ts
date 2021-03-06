import { Widget } from './widget';

enum AuthentificationState {
    REGISTER,
    SIGNIN
}

class AuthentificationWidget extends Widget {

    private form : HTMLFormElement;

    private signin_login : HTMLInputElement;
    private signin_password : HTMLInputElement;
    private signin_button : HTMLInputElement;
    private signin_callback : ((arg0: Auth.ISignin) => void) | null;

    private register_login : HTMLInputElement;
    private register_password : HTMLInputElement;
    private register_password_confirm : HTMLInputElement;
    private register_button: HTMLInputElement;
    private register_callback: ((arg0: Auth.IRegister) => void) | null;

    private state : AuthentificationState;

    constructor() {
        super('authentification');

        this.form = document.createElement('form');
        this.appendChild(this.form);

        this.signin_login = document.createElement('input');
        this.signin_login.type = 'text';
        this.signin_login.placeholder = 'login';

        this.signin_password = document.createElement('input');
        this.signin_password.type = 'password';
        this.signin_password.placeholder = 'password';

        this.signin_button = document.createElement('input');
        this.signin_button.type = 'submit';
        this.signin_button.value = 'Sign in';

        this.register_login = document.createElement('input');
        this.register_login.type = 'text';
        this.register_login.placeholder = 'login';

        this.register_password = document.createElement('input');
        this.register_password.type = 'password';
        this.register_password.placeholder = 'password';

        this.register_password_confirm = document.createElement('input');
        this.register_password_confirm.type = 'password';
        this.register_password_confirm.placeholder = 'confirm password';

        this.register_button = document.createElement('input');
        this.register_button.type = 'submit';
        this.register_button.value = 'Register';

        this.signin_callback = null;
        this.register_callback = null;

        this.register_button.addEventListener('click', (e) => {
            e.preventDefault();
            if (this.state === AuthentificationState.REGISTER) {
                if (this.register_callback) {
                    this.register_callback({
                        login: this.register_login.value,
                        password: this.register_password.value,
                        password_confirm: this.register_password_confirm.value
                    });
                }
            } else {
                this.switchState(AuthentificationState.REGISTER);
            }
        });

        this.signin_button.addEventListener('click', (e) => {
            e.preventDefault();
            if (this.state === AuthentificationState.SIGNIN) {
                if (this.signin_callback) {
                    this.signin_callback({
                        login: this.signin_login.value,
                        password: this.signin_password.value
                    });
                }
            } else {
                this.switchState(AuthentificationState.SIGNIN);
            }
        });

        this.state = AuthentificationState.SIGNIN;
        this.switchState(AuthentificationState.SIGNIN);
    }

    public setRegisterCallback(callback : (arg0: Auth.IRegister) => void) {
        this.register_callback = callback;
    }

    public setSigninCallback(callback : (arg0: Auth.ISignin) => void) {
        this.signin_callback = callback;
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

export { AuthentificationWidget };