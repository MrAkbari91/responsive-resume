
    /* To Disable Inspect Element */
    $(document).bind("contextmenu", function(e) {
        e.preventDefault();
    });

$(document).keydown(function(e) {
    if (e.which === 123) {
        return false;
    }
    if (e.which===114) {
        return false;
    }
    if (e.which===191) {
        return false;
    }

}); 

    document.onkeydown = function(e) {
        if (event.keyCode == 123) {
            return false;
        }
        if (e.ctrlKey && e.keyCode == 'A'.charCodeAt(0)) {
            return false;
        }
        if (e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)) {
            return false;
        }
        if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
            return false;
        }
        if (e.ctrlKey && e.keyCode == 'H'.charCodeAt(0)) {
            return false;
        }
        if (e.ctrlKey && e.keyCode == 'F'.charCodeAt(0)) {
            return false;
        }
        if (e.ctrlKey && e.keyCode == 'E'.charCodeAt(0)) {
            return false;
        }
        if (e.ctrlKey && e.keyCode == 'K'.charCodeAt(0)) {
            return false;
        }
        if (e.ctrlKey && e.keyCode == 'L'.charCodeAt(0)) {
            return false;
        }
         if (e.ctrlKey && e.keyCode == 'G'.charCodeAt(0)) {
            return false;
        }
        if (e.ctrlKey && e.keyCode == 'P'.charCodeAt(0)) {
            return false;
        }
        if (e.ctrlKey && e.keyCode == 'O'.charCodeAt(0)) {
            return false;
        }
          if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
            return false;
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
            return false;
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
            return false;
        }
    } 

