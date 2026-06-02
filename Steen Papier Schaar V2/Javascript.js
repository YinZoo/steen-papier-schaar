// Elementen ophalen
const computerOutput = document.querySelector("#computer");
const spelerOutput = document.querySelector("#speler");
const resultaatOutput = document.querySelector("#resultaat");

// Knoppen ophalen
const buttons = document.querySelectorAll(".button");

// Mogelijke keuzes
const keuzes = ["Steen", "Papier", "Schaar"];

// Functie om een ronde te spelen
function speelSpel(spelerKeuze) {

    // Randomizer voor computer
    let randomGetal = Math.floor(Math.random() * 3);
    let computerKeuze = keuzes[randomGetal];

    // Resultaat tonen
    spelerOutput.innerHTML = spelerKeuze;
    computerOutput.innerHTML = computerKeuze;

    let resultaat = "";

    // Winnaar bepalen
    if (spelerKeuze === computerKeuze) {
        resultaat = "Gelijkspel!";
    }
    else if (
        (spelerKeuze === "Steen" && computerKeuze === "Schaar") || // "||" betekent "of"
        (spelerKeuze === "Papier" && computerKeuze === "Steen") ||
        (spelerKeuze === "Schaar" && computerKeuze === "Papier")
    ) {
        resultaat = "Speler wint!";
    }
    else {
        resultaat = "Computer wint!";
    }

    // Resultaat tonen
    resultaatOutput.innerHTML = resultaat;

    // Console gebruiken
    console.log("Speler:", spelerKeuze);
    console.log("Computer:", computerKeuze);
    console.log("Resultaat:", resultaat);
}

// addEventListener zorgt dat er iets gebeurt als je op een knop klikt. (forEach loopt door alle knoppen heen)
buttons.forEach(function(button) {
    button.addEventListener("click", function () {
        speelSpel(this.id);
    });
});