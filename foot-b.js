var ft = document.getElementById("foot");
var paragraphs = document.querrySelector("main");
var nav = document.querrySelector("nav");
var j = paragraphs.clientHeight;

if(window.innerHeight > j) {
    ft.style.marginTop =  (window.innerHeight - paragraphs.clientHeight - nav.clientHeight/2)+ "px";
}
