var ft = document.getElementById("foot");
var paragraphs = document.getElementsByClassName("art-paragraph");
var j = 0;
for(var i = 0; i<paragraphs.length; i++)
{
    j = j + paragraphs[i].clientHeight;
}

if(window.innerHeight > j) {
    ft.style.position = "absolute";
    ft.style.top =  (window.innerHeight - ft.clientHeight)+ "px";
}