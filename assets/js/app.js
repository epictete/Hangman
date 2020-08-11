// Constants
const start = document.getElementById("start");
const reset = document.getElementById("reset");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const center = canvas.width / 2;
const word = document.getElementById("word");
const alphabet = document.getElementById("alphabet");
const text = document.getElementById("text");
const glow = 300;
const instructions =
  "Use your <i>keyboard</i> or <i>click</i> on the letters below.";

//Game variables
let game = {
  score: 0,
  tries: 5,
  fails: 0,
  currentLetter: "",
  usedLetters: [],
  indexes: [],
  target: "",
};

//Game buttons
start.onclick = hangMan;
reset.onclick = () => document.location.reload(true);

//Functions
function removeListeners() {
  alphabet.onclick = "";
  document.onkeydown = "";
}

function gameOver() {
  if (game.tries > 0) {
    game.tries--;
  } else {
    removeListeners();
    setTimeout(() => canvas.classList.add("red-glow"), glow + 10);
    alert(
      'Game Over!\nThe word was: "' +
        game.target +
        '".\nClick RESET to play again :-)'
    );
  }
}

function win() {
  if (game.score === game.target.length) {
    removeListeners();
    setTimeout(() => canvas.classList.add("green-glow"), glow + 10);
    alert("You WIN!\nCongratulations.\nClick RESET to play again :-)");
  }
}

function guessUpdate() {
  for (index of game.indexes) {
    document.getElementById(index).innerHTML = game.currentLetter;
  }
  game.indexes = [];
}

function matchCount() {
  let pos = game.target.indexOf(game.currentLetter);
  while (pos != -1) {
    game.indexes.push(pos);
    pos = game.target.indexOf(game.currentLetter, pos + 1);
  }
  game.score = game.score + game.indexes.length;
}

function checkCurrentLetter(currentLetter) {
  game.currentLetter = currentLetter;
  game.usedLetters.push(currentLetter);
  if (game.target.includes(game.currentLetter)) {
    document.getElementById(game.currentLetter).style.backgroundColor = "green";
    canvas.classList.add("green-glow");
    setTimeout(() => canvas.classList.remove("green-glow"), glow);
    matchCount();
    guessUpdate();
    win();
  } else {
    document.getElementById(game.currentLetter).style.backgroundColor = "red";
    canvas.classList.add("red-glow");
    setTimeout(() => canvas.classList.remove("red-glow"), glow);
    game.fails++;
    draw();
    gameOver();
  }
}

function clickHandler() {
  let temp = event.target.innerHTML.toLocaleLowerCase();
  if (temp.length === 1 && !game.usedLetters.includes(temp)) {
    checkCurrentLetter(temp);
  }
}

function keyDownHandler() {
  let temp = event.key.toLocaleLowerCase();
  if (
    event.keyCode > 64 &&
    event.keyCode < 91 &&
    !game.usedLetters.includes(temp)
  ) {
    checkCurrentLetter(temp);
  }
}

function alphabetGen() {
  for (let i = 65; i < 91; i++) {
    const newButton = document.createElement("button");
    const newContent = document.createTextNode(String.fromCharCode(i));
    newButton.setAttribute("id", String.fromCharCode(i).toLocaleLowerCase());
    newButton.appendChild(newContent);
    alphabet.appendChild(newButton);
  }
}

function wordGen() {
  for (let i = 0; i < game.target.length; i++) {
    const newDiv = document.createElement("div");
    newDiv.setAttribute("id", i);
    word.appendChild(newDiv);
  }
}

function randWord() {
  return (game.target = words[Math.floor(Math.random() * words.length)]);
}

function hangMan() {
  start.disabled = true;
  start.blur();
  text.innerHTML = instructions;
  canvas.style.display = "block";
  canvas.classList.add("gray-glow");
  randWord();
  wordGen();
  alphabetGen();
  drawGallows();
  document.onkeydown = keyDownHandler;
  alphabet.onclick = clickHandler;
  console.log(game.target);
}
