
var openedWindows = []

function openWindow(windowToOpen, path){
    originalName = windowToOpen;
    application = "";
    $.get( path, function( data ) {
        application = data;



        var random = Math.random()

        openedWindows.push(windowToOpen + random.toString())
        windowToOpen = windowToOpen + random.toString();
    
        
        $("#container").append('<div id="'+ windowToOpen +'" class="window"><div id="'+ windowToOpen +'Header" class="windowHeader">' + originalName +'</div>'+application+'</div>')
        openedWindows.push(windowToOpen);
        dragElement(document.getElementById(windowToOpen));
        appOpened(originalName, windowToOpen);

      });


    }