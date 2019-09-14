import { app, BrowserWindow } from 'electron';

let win : BrowserWindow;

function createWindow () {
    // Cree la fenetre du navigateur.
    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.webContents.openDevTools();

    // and load the index.html of the app.
    win.loadFile(__dirname + '/../app/index.html');
}

app.on('ready', createWindow)