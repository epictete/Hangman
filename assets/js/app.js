// Constants
const start = document.getElementById("start");
const reset = document.getElementById("reset");
const word = document.getElementById("word");
const alphabet = document.getElementById("alphabet");
const delay = 100;
const words = [
    'ability',
    'inspector',
    'affair',
    'candidate',
    'funeral',
    'solution',
    'youth',
    'mom',
    'nature',
    'child',
    'chest',
    'year',
    'topic',
    'phone',
    'pollution',
    'basis',
    'artisan',
    'promotion',
    'depression',
    'situation',
    'classroom',
    'failure',
    'tradition',
    'foundation',
    'intention',
    'competition',
    'user',
    'proposal',
    'preparation',
    'combination',
    'reaction',
    'movie',
    'attitude',
    'friendship',
    'passenger',
    'lab',
    'marketing',
    'bathroom',
    'uncle',
    'story',
    'championship',
    'throat',
    'sister',
    'quantity',
    'tea',
    'birthday',
    'news',
    'version',
    'advice',
    'mall'
];

//Variables
let game = {
    score: 0,
    tries: 6,
    fails: 0,
    indexes: [],
    target: ''
}

//Event listeners
start.onclick = hangMan;
reset.onclick = () => { document.location.reload(true) };

//Functions
function checkLetter(i) {
    const letter = String.fromCharCode(i).toLocaleLowerCase();
    if (game.target.includes(letter)) {
        matchCount(letter);
        guessUpdate(letter);
        document.getElementById("letter-" + i).style.backgroundColor = 'green';
        window.setTimeout(win, delay);
    } else {
        game.fails++;
        draw();
        document.getElementById("letter-" + i).style.backgroundColor = 'red';
        window.setTimeout(gameOver, delay);
    }
}

function win() {
    if (game.score === game.target.length) {
        drawWin();
    }
}

function gameOver() {
    if (game.tries > 1) {
        game.tries--;
    } else {
        drawGameOver();
    }
}

function guessUpdate(letter) {
    for (index of game.indexes) {
        document.getElementById("word-" + index).innerHTML = letter;
    }
    game.indexes = [];
}

function matchCount(letter) {
    let pos = game.target.indexOf(letter);
    while (pos != -1) {
        game.indexes.push(pos);
        pos = game.target.indexOf(letter, pos + 1);
    }
    game.score = game.score + game.indexes.length;
}

function randWord() {
    return game.target = words[Math.floor(Math.random() * words.length)];
}

function wordGen() {
    for (let i = 0; i < game.target.length; i++) {
        const newDiv = document.createElement('div');
        newDiv.setAttribute('id', 'word-' + i);
        word.appendChild(newDiv);
    }
}

function alphabetGen() {
    for (let i = 65; i <= 90; i++) {
        const newDiv = document.createElement('div');
        const newContent = document.createTextNode(String.fromCharCode(i));
        newDiv.setAttribute('id', 'letter-' + i)
        newDiv.addEventListener("click", () => checkLetter(i));
        newDiv.appendChild(newContent);
        alphabet.appendChild(newDiv);
    }
}

function hangMan() {
    randWord();
    wordGen();
    alphabetGen();
    drawGallows();
    console.log(game.target);
}