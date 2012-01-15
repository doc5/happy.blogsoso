function openWindow(channel, category, item, options){
    var pageURL;
    var name = channel + "_" + category + "_" + item;
    var params=null;
    var already = false;
    switch(channel){
        case "apps":
            switch(category){
                case "music":
                    switch(item){
                        case "google":
                            pageURL = "/apps/music/google.html";
                            already = true;
                            params = "width=800, height=605";
                        break;
                    }
                break;
            }            
        break;
    }
    
    if(already){
        params =  (params == null ? "" : params + ",") + "toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no";
        var newWindow = window.open(pageURL, name, params);
        if (newWindow.location.href && newWindow.location.href!='about:blank') {
            newWindow.focus();
        }
    }
}


//var newWindow = window.open('', title, dimension); // title needs to be a constant
//if (newWindow.location.href && newWindow.location.href!='about:blank') {
//  // Window was already open and points to something
//  newWindow.focus();
//} else {
//  // new window make it point to something
//  newWindow.location.href = 'http://yoursite';
//}