const remote = require('electron').remote;

function exitButton() {
    var window = remote.getCurrentWindow();
    window.close();

}