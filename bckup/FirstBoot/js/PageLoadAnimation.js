splashScreenState = true;

$(document).ready(function () {
    $('body').css('cursor', 'none');

    $(".logo").css({
        marginTop: $(document).height() / 2 - 100
    })

    setTimeout(function () {
        splashScreenState = false;

        $(".container").css("backgroundColor", "rgba(0,0,0,0.4)");
        $(".logo").animate({
            marginTop: 0
        }, 500)
        $(".container").animate({
            marginLeft: $(document).width() / 2 - 800 + 400,
            marginTop: $(document).height() / 2 - 500 + 250,
            width: 800,
            height: 500,
        }, 500, function () {
            $('body').css('cursor', 'default');
            $(".firstPageInnerContent").fadeIn();

        });
    }, 1000)

});

$(window).resize(function () {
    if (splashScreenState == true) {
        $(".logo").css({
            marginTop: $(document).height() / 2 - 100
        })
    } else {
        $(".logo").css({
            marginTop: 0
        })
        $(".container").animate({
            marginLeft: $(document).width() / 2 - 800 + 400,
            marginTop: $(document).height() / 2 - 500 + 250
        }, 10);
    }

});