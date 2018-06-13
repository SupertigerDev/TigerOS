var users = []
var loggedInUser = ""

$(function () {

    ipcRenderer.send('getAccounts')

    ipcRenderer.on('sendAccounts', (event, arg) => {
        users = arg
        append = "";

        users.forEach(element => {
            append += '<div class="accountListLogin" onclick="userLoginClicked(`'+ element +'`)"><i class="material-icons icon">account_circle</i>' + element + '</div>'
        });
        $('.accountsListLoginInner').html(append)
    })
});

function userLoginClicked(clickedButton){
    loggedInUser = clickedButton;
    $(".container").fadeOut(300, function(){
        $(this).remove();
        $("#particles-js").remove();
        //load SystemUI Interface
        $.get( "SystemInterface/Interface.html", function( data ) {
            $("body").prepend(data)
          });


    })
}



