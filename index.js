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


function readFile(callback) {
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
    readFile(function (cb) {
        let win = new BrowserWindow({
            fullscreen: true,
            frame: false,
            backgroundColor: "#000000"
        });
        if (JSON.stringify(database) === '{}') {
            win.loadURL(`file://${__dirname}/FirstBoot/index.html`)
        } else {
            win.loadURL(`file://${__dirname}/SystemUI/index.html`)
        }

    })
    ipcMain.on('setupComplete', (event, detailsConfig) => {
        database[detailsConfig.username] = detailsConfig

        if (!fs.existsSync("Users")) {
            fs.mkdirSync("Users");
        }
        if (!fs.existsSync("Users/" + detailsConfig.username)) {
            fs.mkdirSync("Users/" + detailsConfig.username);
            fs.mkdirSync("Users/" + detailsConfig.username + "/Desktop");
        }

        saveDatabase()

    })


    ipcMain.on('getAccounts', (event) => {
        userArray = [];
        for (var field in database) {
            userArray.push(field)
        }
        event.sender.send('sendAccounts', userArray)
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