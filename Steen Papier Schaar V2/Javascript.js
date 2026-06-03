// Elementen ophalen
const computerOutput = document.querySelector("#computer");
const spelerOutput = document.querySelector("#speler");
const resultaatOutput = document.querySelector("#resultaat");

// Knoppen ophalen
const buttons = document.querySelectorAll(".button");

// Mogelijke keuzes
const keuzes = ["Steen", "Papier", "Schaar"];

//score elementen ophalen
const spelerScoreOutput = document.querySelector("#spelerScore");
const computerScoreOutput = document.querySelector("#computerScore");

// score bijhouden
let spelerScore = 0;
let computerScore = 0;

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

        spelerScore++; // "++" verhoogt de score met 1
        spelerScoreOutput.innerHTML = spelerScore; //spelerScoreOutput.innerHTML werkt de score bij in de HTML

    }
    else {
        resultaat = "Computer wint!";

        computerScore++;
        computerScoreOutput.innerHTML = computerScore;
    }

    // Resultaat tonen
    resultaatOutput.innerHTML = resultaat;

    // Console gebruiken
    console.log("Speler:", spelerKeuze);
    console.log("Computer:", computerKeuze);
    console.log("Resultaat:", resultaat);
}


// forEach loopt door alle knoppen heen.
buttons.forEach(function(button) {
    // addEventListener zorgt dat er iets gebeurt als je op een knop klikt. 
    button.addEventListener("click", function () {
        // this.innerHTML geeft de tekst van de knop die je hebt geklikt (Steen, Papier of Schaar) door aan de speelSpel functie.
        speelSpel(this.innerHTML);
    });
});