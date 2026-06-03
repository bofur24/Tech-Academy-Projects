// Get Joke Function
function getRandomJoke() {
    fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => response.json())
        .then(data => document.getElementById('jokeDisplay').textContent = `${data.setup} - ${data.punchline}`)
        .catch(err => {
            document.getElementById('jokeDisplay').textContent = 'Error Fetching Joke';
        });
}

function getCatFacts() {
    fetch('https://catfact.ninja/fact')
        .then(response => response.json())
        .then(data => document.getElementById('catFact').textContent = `${data.fact}`)
        .catch(err => {
            document.getElementById('catFact').textContent = 'Error Fetching Cat Fact';
        });
}
