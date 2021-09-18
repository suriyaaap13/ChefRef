// setting focus to the search bar
setFocus();
function setFocus(){
    var input = document.getElementById('search-bar');
    input.focus();
}
// directing to index.html on clicking the close button
var close = document.querySelector('.close');
close.onclick = function(){
    location.replace("./index.html");
}


