 var username = ""
 var password = ""
 var internetAccess = false;

 function beginSetupPage() {

     $(".firstPageContent").animate({
         opacity: 0,
         marginRight: 800
     }, 500)
     $(".firstPageContent").fadeOut(100, function () {
         $(".secondPageContent").fadeIn()
         $(".secondPageContent").animate({
             opacity: 100,
             marginLeft: 0
         }, 500)
     })
 }


 function thirdPage() {

     if ($('.internetAccess').is(':checked')) {
        internetAccess = true;
     }
     $('.secondPageContent').css("display", "table")
     $(".secondPageContent").animate({
         opacity: 0,
         marginLeft: -800
     }, 500)
     $(".secondPageContent").fadeOut(100, function () {
         $(".thirdPageContent").fadeIn()
         $(".thirdPageContent").animate({
             opacity: 100,
             marginLeft: 0
         }, 500)
     })
 }

 function fourthPage() {
     inputUsername = $(".username").val();
     inputPassword = $(".password").val();
     if (inputUsername == undefined || inputUsername.trim() == ""){
        $(".usernameValidationMessage").html("Password is required to continue!")
        return;
     }
     username = inputUsername;
     password = inputPassword;
     ipcRenderer.send('setupComplete', {username: username, password: password, preferences: {internetAccess: internetAccess}})

     $('.thirdPageContent').css("display", "table")
     $(".thirdPageContent").animate({
         opacity: 0,
         marginLeft: -800
     }, 500)
     $(".thirdPageContent").fadeOut(100, function () {
         $(".fourthPageContent").fadeIn()
         $(".fourthPageContent").animate({
             opacity: 100,
             marginLeft: 0
         }, 500)
     })
 }
 function restart(){
     window.location = "../SystemUI/index.html"
 }