import { AuthentificationWidget } from '../widgets/auth';

class Authentification {
    private widget : AuthentificationWidget;

    constructor() {
        this.widget = new AuthentificationWidget();

        this.widget.setRegisterCallback(this.register);
        this.widget.setSigninCallback(this.signin);
    }

    private register(user : Auth.IRegister) {
        console.warn('TODO : ', user)
    }

    private signin(user : Auth.ISignin) {
        console.warn('TODO : ', user)
    }

    public showWidgets() {
        this.widget.attach(document.body);
    }
}

export { Authentification };