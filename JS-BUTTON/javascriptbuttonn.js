function change() {
    var x = document.querySelectorAll("div");
    var i;
    for(i = 0;i < x.length;i++) {
        if(x[i].innerHTML=="find") {
	    x[i].innerHTML = "found";
	    x[i].style.background = "lightblue";
        }
    }
}