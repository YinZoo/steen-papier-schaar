// Element ophalen uit de HTML
const feestdagOutput = document.querySelector("#feestdag");

// API request maken
fetch("https://date.nager.at/api/v3/PublicHolidays/2026/NL")

    // Response omzetten naar JSON
    .then(function(response) {
        console.log(response);
        return response.json();
    })

    // JSON data gebruiken
    .then(function(data) {
        console.log(data);

        // Eerste feestdag tonen
        feestdagOutput.innerHTML = data[0].localName;
    })

    // Fouten opvangen
    .catch(function(error) {
        console.log(error);
        feestdagOutput.innerHTML = "Er ging iets fout.";
    });