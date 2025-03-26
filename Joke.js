let ProgrammingJokeBtn = document.getElementById("programmingJokeBtn");
let MiscJokeBtn = document.getElementById("miscJokeBtn");
let PunJokeBtn = document.getElementById("punJokeBtn");
let SpookyJokeBtn = document.getElementById("spookyJokeBtn");
let ChristmasJokeBtn = document.getElementById("christmasJokeBtn");
let JokeHeader = document.getElementById("jokeHeader");
let Joke = document.getElementById("joke");

let SetNewJoke = Category => {
    fetch('https://v2.jokeapi.dev/joke/' + Category +'?safe-mode')
    .then(response => response.json())
    .then(data => {
        if (data.type == "twopart") {
            Joke.innerText = data.setup + " ... " + data.delivery
        } else {
            Joke.innerText = data.joke;
        }
    });
}

let ProgrammingBtnClicked = () => {
    SetNewJoke("Programming");
    JokeHeader.innerText = "A Random Programming Joke 🖥️";
}

let MiscBtnClicked = () => {
    SetNewJoke("misc");
    JokeHeader.innerText = "A Random Miscellaneous Joke 😂";
}

let PunBtnClicked = () => {
    SetNewJoke("pun");
    JokeHeader.innerText = "A Random Pun 🦞";
}

let SpookyBtnClicked = () => {
    SetNewJoke("spooky");
    JokeHeader.innerText = "A Random Spooky Joke 🎃";
}

let ChristmasBtnClicked = () => {
    SetNewJoke("christmas");
    JokeHeader.innerText = "A Random Christmas Joke 🎄";
}

ProgrammingJokeBtn.addEventListener("click", ProgrammingBtnClicked);
MiscJokeBtn.addEventListener("click", MiscBtnClicked);
PunJokeBtn.addEventListener("click", PunBtnClicked);
SpookyJokeBtn.addEventListener("click", SpookyBtnClicked);
ChristmasJokeBtn.addEventListener("click", ChristmasBtnClicked);

SetNewJoke("any");