const electron = require('electron');
const {
    app,
    BrowserWindow
} = electron;
const fs = require('fs');


app.on('ready', () => {
    let win = new BrowserWindow({
        fullscreen: true,
        frame: false,
        backgroundColor: "#000000"
    });
    win.loadURL(`file://${__dirname}/FirstBoot/index.html`)
});