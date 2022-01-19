
let selectedEinheit = "";
let vonPersonen = "";
let zuPesonen = "";
let menge = "";
let zutat = "";
let neueMenge = "";
let neueZeile= neueMenge + zutat;
let zutatenMenge = 0;
let textAnweisung = "";
let mengeGerundet = "";
let zubereitungMenge = 0;

function createListItem(name) {
    let li = document.createElement('li');
    li.textContent = name;
    return li;
}

const mainUl = document.querySelector('#mainUl');

const zubereitungList = document.querySelector('#zubereitungList');


function selectValue() {
    selectedEinheit = document.getElementById("auswahlBox").value;
}

function hinzufügen() {
    selectedMenge = document.getElementById("auswahlBox").value;
    vonPersonen = document.getElementById("vonPersonen").value;
    zuPesonen = document.getElementById("zuPersonen").value;
    menge = document.getElementById("menge").value;
    zutat = document.getElementById("zutat").value;
    if(menge < 10) {
        neueMenge = zuPesonen / vonPersonen * menge;
        mengeGerundet = neueMenge.toFixed(1);
        neueZeile = mengeGerundet + " " + selectedEinheit + " " + zutat;
    }else {
        neueMenge = Math.floor(zuPesonen / vonPersonen * menge);
        neueZeile = neueMenge + " " + selectedEinheit + " " + zutat;
    }
    mainUl.appendChild(createListItem(neueZeile));
    zutatenMenge++;
    console.log(zutatenMenge);
;

}

function myfunc() {
    document.getElementById("titleListe").innerHTML = prompt("Name des neues Rezeptes")
}

function myfunc_2() {
    document.getElementById("titleListe2").innerHTML = "Für " + prompt("Für wie viele Personen ist das Rezept?") + " Personen"
}

function deleteListItem() {
    mainUl.removeChild(mainUl.childNodes[zutatenMenge - 1])
    zutatenMenge--;
    console.log(zutatenMenge);
}

function hinzufügenAnweisung() {
    textAnweisung = document.getElementById("anweisung").value;
    zubereitungList.appendChild(createListItem(textAnweisung));
    zubereitungMenge++;
    console.log(zubereitungMenge)

}

function deleteAnweisung() {
    zubereitungList.removeChild(zubereitungList.childNodes[zubereitungMenge])
    zubereitungMenge--;
    console.log(zubereitungMenge);
}