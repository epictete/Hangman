// Constants
const start = document.getElementById("start");
const reset = document.getElementById("reset");
const word = document.getElementById("word");
const alphabet = document.getElementById("alphabet");

//Variables
let game = {
  score: 0,
  tries: 6,
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
function keyDownHandler() {
  if (
    event.keyCode > 64 &&
    event.keyCode < 91 &&
    !game.usedLetters.includes(event.key)
  ) {
    game.currentLetter = event.key.toLocaleLowerCase();
    game.usedLetters.push(event.key.toLocaleLowerCase());
    document.getElementById(game.currentLetter).disabled = true;
    checkcurrentLetter();
  }
}

function clickHandler() {
  let temp = event.target.innerHTML.toLocaleLowerCase();
  if (temp.length === 1) {
    game.currentLetter = temp;
    game.usedLetters.push(temp);
    event.target.disabled = true;
    checkcurrentLetter();
  }
}

function checkcurrentLetter() {
  if (game.target.includes(game.currentLetter)) {
    document.getElementById(game.currentLetter).style.backgroundColor = "green";
    matchCount();
    guessUpdate();
    win();
  } else {
    game.fails++;
    document.getElementById(game.currentLetter).style.backgroundColor = "red";
    draw();
    gameOver();
  }
}

function win() {
  if (game.score === game.target.length) {
    removeListeners();
    alert("You WIN!\nCongratulations.\nClick RESET to play again :-)");
  }
}

function gameOver() {
  if (game.tries > 1) {
    game.tries--;
  } else {
    removeListeners();
    alert(
      'Game Over!\nThe word was: "' +
        game.target +
        '".\nClick RESET to play again :-)'
    );
  }
}

function removeListeners() {
  alphabet.onclick = "";
  document.onkeydown = "";
}

function guessUpdate() {
  for (index of game.indexes) {
    document.getElementById("word-" + index).innerHTML = game.currentLetter;
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

function randWord() {
  return (game.target = words[Math.floor(Math.random() * words.length)]);
}

function wordGen() {
  for (let i = 0; i < game.target.length; i++) {
    const newDiv = document.createElement("div");
    newDiv.setAttribute("id", "word-" + i);
    word.appendChild(newDiv);
  }
}

function alphabetGen() {
  for (let i = 65; i <= 90; i++) {
    const newButton = document.createElement("button");
    const newContent = document.createTextNode(String.fromCharCode(i));
    newButton.setAttribute("id", String.fromCharCode(i).toLocaleLowerCase());
    newButton.appendChild(newContent);
    alphabet.appendChild(newButton);
  }
}

function hangMan() {
  start.disabled = true;
  start.blur();
  canvas.style.display = "block";
  randWord();
  wordGen();
  alphabetGen();
  drawGallows();
  document.onkeydown = keyDownHandler;
  alphabet.onclick = clickHandler;
  console.log(game.target);
}
