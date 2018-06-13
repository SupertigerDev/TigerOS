var startOpened = false

jQuery(document).ready(function () {
    jQuery("body").click(function (event) {
        if ($(event.target).attr('class') != "startButton" && $(event.target).attr('class') != "startInterface") {

            if (startOpened) {

                $('.startInterface').animate({
                    bottom: -500,
                    opacity: 0
                }, 300, function () {
                    $('.startInterface').css('display', 'none');
                })
                startOpened = false;
            }
        }
    });
});

function showStartMenu() {
    $('.startUsername').html(loggedInUser)

    if (startOpened) {

        $('.startInterface').animate({
            bottom: -500,
            opacity: 0
        }, 300, function () {
            $('.startInterface').css('display', 'none');
        })
        startOpened = false;
    } else {
        $('.startInterface').css('display', 'block');

        $('.startInterface').animate({
            bottom: 48,
            opacity: 1
        }, 300)
        startOpened = true;
    }
}