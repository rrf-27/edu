

var ft = document.getElementById("foot");
var paragraphs = document.getElementsByClassName("art-paragraph");
var j = 0;
for(var i = 0; i<paragraphs.length; i++)
{
    j = j + paragraphs[i].clientHeight;
}

if(window.innerHeight > j) {
    ft.style.position = "relative";
    ft.style.marginTop =  (window.innerHeight - j - ft.clientHeight)+ "px";
}
var footBtn = document.getElementsByClassName("case-middle")[0];
footBtn.onclick = () => {
    window.scrollTo(0, 0);
}
