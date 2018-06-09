const remote = require('electron').remote;

function exitButton() {

    $('.container').fadeOut()

    $("#particles-js").animate({
        left: $(document).width(),
        opacity: 0
    }, 2000, function () {
        var window = remote.getCurrentWindow();
        window.close();
    })


}