window.onload = function() {
var content = document.getElementsByClassName("CountMe")[0].textContent;
var ReadTime = Math.ceil((content.split(" ").length)/200);
document.getElementsByClassName("ReadTime")[0].textContent= ReadTime+ " minutes to read.";
}