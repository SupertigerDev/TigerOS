var currentFileLocation = "/Users/" + loggedInUser + "/Desktop/"

function appOpened(originalName, windowToOpen, div) {

    ipcRenderer.send("filesGet", currentFileLocation, windowToOpen)


    $("#" + windowToOpen + " .filesAddressBarInner").keypress(function (e) {
        if (e.which == 13) {
            value = $("#"+windowToOpen +" .filesAddressBarInner").val()

            if (!value.endsWith("/")) {
                value = value + "/"
            }
            ipcRenderer.send("filesGet", value, windowToOpen)
        }
    });


    $("#" + windowToOpen + " .place").click(function () {
        clickedPlace = $(this)[0].children[1].innerText
        if (clickedPlace == "System Files") {
            ipcRenderer.send("filesGet", "/", windowToOpen)
        }else if (clickedPlace == "Desktop"){
            ipcRenderer.send("filesGet", "/Users/" + loggedInUser + "/Desktop/", windowToOpen)  
        }
    });


    ipcRenderer.on('filesSend', (event, filesAndFolders, targetWindow, location) => {

        var append = ""
        filesAndFolders.forEach(element => {
            if (element.isDirectory) {
                append += '<div class="fileFolder" ondblclick="openDirectory(this)" ><i class="material-icons thumbnailFiles">folder</i> <span id="folder">' + element.name + '</span></div>'
            } else {
                append += '<div class="fileFolder" ondblclick="openDirectory(this)"><i class="material-icons thumbnailFiles">description</i> <span id="file">' + element.name + '</span></div>'
            }

        });
        currentFileLocation = location
        $("#"+targetWindow+" .filesAddressBarInner").val(currentFileLocation)

        $("#" + targetWindow + " .filesFoldersArea").html(append)
        if (currentFileLocation == "/") {
            $("#"+targetWindow+" .place").removeClass("selectedLeftBar")
            $("#"+targetWindow+" .systemFilesPlace").addClass("selectedLeftBar")
        } else if (currentFileLocation == "/Users/" + loggedInUser + "/Desktop/") {
            $("#"+targetWindow+" .place").removeClass("selectedLeftBar")
            $("#"+targetWindow+" .desktopPlace").addClass("selectedLeftBar")
        } else {
            $("#"+targetWindow+" .place").removeClass("selectedLeftBar")
        }

    })
}

function openDirectory(div) {
    span = $(div)[0].children[1]
    windowName = $(div).offsetParent()[0].id;
    if (span.id == "folder") {
        ipcRenderer.send("filesGet", currentFileLocation + span.innerText + "/", windowName)
        console.log(currentFileLocation)
    }
}