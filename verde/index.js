var moreBtns = document.getElementsByClassName("art-no-s");
var more = 
[
    "Campanii de colectare a deșeurilor: In parteneriat cu ONG-uri locale, profesorii pot crea o experienta unica pentru elevi, experienta ce ii poate ajuta sa-si descopere pasiunea pentru voluntariat.",
    "Târg de economie circular: Un mod “sustenabil” de a folosi un obiect este sa il donezi. Poate aveai de gand sa arunci cartea de gatit care sta in dulap de cativa ani, dar de ce sa nu o dai cuiva care chiar are nevoie si sa primesti, la randul tau, un set de carti de joc pe care oricum voiai sa il cumperi?",
    "Organizarea de ateliere de reciclat: Folosind ziare vechi, reviste si cutii de carton, realizati machete si obiecte decorative cu care puteti infrumuseta sala de clasa. Lista e lunga, singura limita fiind timpul si creativitatea fiecarei clase.",
    "Plantarea de arbori și flori: Organizați o zi de plantare de arbori și de flori intr-un parc, intr-un spatiu public, sau chiar in curtea scolii/ liceului vostru. Astfel incurajati comunitatea sa se implice, si ajutati la crearea unui mediu mai verde si mai placut.",
    "Crearea unui cos de compost: Sustineti un atelier in care sa invatati copii despre diferitele tipuri de materiale care pot fi compostate (paine, coji de oua, resturi de fructe si legume) si instalati un cos de compost in curtea scolii. Puteti combina ideile 4 si 5, iar compostul colectat poate fi folosit drept ingrasamant pentru noua zona verde."
];

var show = {
    body: document.getElementsByClassName("more-on-op")[0],
    content: document.getElementsByClassName("morebox")[0]
}

function present(i)
{
    moreBtns[i].addEventListener("click", () =>{
        show.body.style.display = "flex";
        console.log(moreBtns.innerHTML);
        show.content.innerHTML = more[i];
    });
}

for(var i = 0; i<moreBtns.length; i++)
{
    present(i);
}