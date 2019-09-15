import { AuthentificationWidget } from './authentification/authentificationWidget';

window.addEventListener('load', () => {
    var body : HTMLElement = document.body;
    body.classList.add('dark');

    var auth = new AuthentificationWidget();
    auth.attach(body);
});