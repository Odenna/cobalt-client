import { app, BrowserWindow } from 'electron';

function createWindow () {
    // Cree la fenetre du navigateur.
    let win: BrowserWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })

    // and load the index.html of the app.
    win.loadFile('../app/index.html')
}

app.on('ready', createWindow)