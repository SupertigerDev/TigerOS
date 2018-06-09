const electron = require('electron');
const {
    app,
    BrowserWindow
} = require('electron');
const {
    ipcMain
} = require('electron');

const fs = require('fs');
var database = {};


function readFile(callback){
    fs.readFile('db.json', 'utf8', function readFileCallback(err, data) {
        if (err) {
            callback(err)
        } else {
            database = JSON.parse(data);
            callback(true)
        }
    });
    
}


app.on('ready', () => {
    readFile(function(cb){
        let win = new BrowserWindow({
            fullscreen: true,
            frame: false,
            backgroundColor: "#000000"
        });
        if (typeof database.accounts == "undefined"){
            win.loadURL(`file://${__dirname}/FirstBoot/index.html`)
        }else{
            win.loadURL(`file://${__dirname}/SystemUI/index.html`)
        }

    })
    ipcMain.on('setupComplete', (event, detailsConfig) => {
        database["accounts"] = {detailsConfig}
        saveDatabase()
        console.log(database)

    })
});


function saveDatabase() {

    var json = JSON.stringify(database)
    fs.writeFile('db.json', json, (err) => {
        if (err) {
            console.log(err);
        }
    });

}