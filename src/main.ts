import { Authentification } from './controllers/auth';

window.addEventListener('load', () => {
    var body : HTMLElement = document.body;
    body.classList.add('dark');

    var auth = new Authentification();
    auth.showWidgets();
});