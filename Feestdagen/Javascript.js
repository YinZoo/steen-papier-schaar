// Element ophalen uit de HTML (Zoekt naar de id "feestdag")
const feestdagOutput = document.querySelector("#feestdag");

// Huidige datum ophalen
const vandaag = new Date();

// "fetch" haalt data op van de API, de link is een website die informatie geeft over feestdagen in Nederland in 2026
fetch("https://date.nager.at/api/v3/PublicHolidays/2026/NL")

    // De function response wacht todat de data is opgehaald
    .then(function(response) {
        // Daarna wordt de data omgezet naar JSON formaat.
        return response.json();
    })

    // De data nu in JSON formaat wordt nu gelogd in de console.
    .then(function(data) {
        console.log(data);

        // Loopt door alle feestdagen in de data heen
        for (let i = 0; i < data.length; i++) {

            // data[i] pakt een feestdag uit de lijst en .date pakt de datum van die feestdag.
            // Deze datum wordt omgezet naar een Date object zodat ik deze later kan vergelijken met de huidige datum.
            const feestdagDatum = new Date(data[i].date);

            // Hier vergelijk ik de datum van de feestdag met de huidige datum.
            if (feestdagDatum > vandaag) {

                // Eerstvolgende feestdag tonen
                feestdagOutput.innerHTML =
                    data[i].localName + " - " + data[i].date;

                // Stoppen zodra de eerste gevonden is
                break;
            }

        }

    });