// app.js


function fetchJoke() {
    //lavet et HTTP kald til til den URL der er anvist
    fetch('https://icanhazdadjoke.com/', {
        //GET-forespørgsel, vi henter dataen
        method: 'GET',
        //siger vi gerne vil have dataen i json format
        headers: {
            'Accept': 'application/json'
        }
    })
    //når GET kaldet er færdig og vi har dataen bliver response objektet sendt til denne metode
    //response.json bearbejder daten til json-objekt.
    //json() gør det muligt at arbejde med data i json format
    .then(response => response.json())
    //tager det json-objekt der er blevet parseret fra API-svaret og sender det videre som data til næste funktion
    .then(data => {
        //tager fat i div'en med id=joke-container
        const jokeContainer = document.getElementById('joke-container');
        // indsætter joke i div'en
        jokeContainer.textContent = data.joke;
    })
}

// Kald funktionen når siden er loadet (alt html er læst og behandlet)
window.onload = fetchJoke;
