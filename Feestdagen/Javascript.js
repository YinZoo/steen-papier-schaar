// Element ophalen voor feestdag
const feestdagOutput = document.querySelector("#feestdag");

// Huidige datum ophalen
const vandaag = new Date();

// API request maken
fetch("https://date.nager.at/api/v3/PublicHolidays/2026/NL")

    // JSON ophalen
    .then(function(response) {
        return response.json();
    })

    // Data gebruiken
    .then(function(data) {

        console.log(data);

        // Door feestdagen heen lopen
        for (let i = 0; i < data.length; i++) {

            // Datum omzetten naar Date object
            const feestdagDatum = new Date(data[i].date);

            // Vergelijken met huidige datum
            if (feestdagDatum > vandaag) {

                // Eerstvolgende feestdag tonen
                feestdagOutput.innerHTML =
                    data[i].localName + " - " + data[i].date;

                break;
            }
        }
    });

// Tabel body ophalen
const tabelBody = document.querySelector("#tabelBody");

// Database ophalen via PHP
fetch("database.php")

    // JSON omzetten
    .then(function(response) {

        return response.json();

    })

    // Data gebruiken
    .then(function(data) {

        console.log(data);

        // Door alle database resultaten heen lopen
        for (let i = 0; i < data.length; i++) {

            // Nieuwe tabel rij maken
            const nieuweRij = document.createElement("tr");

            // HTML toevoegen aan de rij
            nieuweRij.innerHTML = `
                <td>${data[i].ID}</td>
                <td>${data[i].Name}</td>
                <td>${data[i].Email}</td>
                <td>${data[i].Hours}</td>
            `;

            // Rij toevoegen aan tabel
            tabelBody.appendChild(nieuweRij);

        }

    });