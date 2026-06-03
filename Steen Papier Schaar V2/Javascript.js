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

// Win streak elementen ophalen
const winStreakOutput = document.querySelector("#winStreak");
const hoogsteStreakOutput = document.querySelector("#hoogsteStreak");

// score bijhouden
let spelerScore = 0;
let computerScore = 0;
let winStreak = 0;
let hoogsteStreak = 0;

// Functie om een ronde te spelen
function speelSpel(spelerKeuze) {

    // Randomizer voor computer
    let randomGetal = Math.floor(Math.random() * 3); // Math.random() geeft een getal tussen 0 en 1, dit vermenigvuldig ik met 3 zodat ik in totaal 3 keuzes heb (0, 1 en 2).
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

        winStreak++;
        winStreakOutput.innerHTML = winStreak;
        if (winStreak > hoogsteStreak) { // Controleer of de huidige streak een nieuw record is
            hoogsteStreak = winStreak;
            hoogsteStreakOutput.innerHTML = hoogsteStreak;
        }
    }
    else {
        resultaat = "Computer wint!";

        computerScore++;
        computerScoreOutput.innerHTML = computerScore;

        winStreak = 0; // reset de win streak als de computer wint
        winStreakOutput.innerHTML = winStreak;
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