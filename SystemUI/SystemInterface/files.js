
 function appOpened(originalName, windowToOpen){
    ipcRenderer.send("filesGet", "/", windowToOpen)


    ipcRenderer.on('filesSend', (event, filesAndFolders, targetWindow) => {

        var append = ""
        filesAndFolders.forEach(element => {
            if (element.isDirectory){
                append += '<div class="fileFolder"><i class="material-icons thumbnailFiles">folder</i> '+ element.name +'</div>'
            }else{
                append += '<div class="fileFolder"><i class="material-icons thumbnailFiles">description</i> '+ element.name +'</div>'
            }
            
        });
        target = document.getElementById(windowToOpen).getElementsByClassName("filesFoldersArea")[0];
        target.innerHTML = append
    
    })
 }