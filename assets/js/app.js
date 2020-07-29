// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext('2d');
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

// let raf;
let target;
let indexes = [];
let score = 0;
let tries = 6;
let fails = 0;


function checkLetter(i) {
    const letter = String.fromCharCode(i).toLocaleLowerCase();
    if (target.includes(letter)) {
        matchCount(letter);
        guessUpdate(letter);
        document.getElementById("letter-" + i).style.backgroundColor = 'green';
        window.setTimeout(win, delay);
    } else {
        fails++;
        document.getElementById("letter-" + i).style.backgroundColor = 'red';
        window.setTimeout(gameOver, delay);
    }
}

function win() {
    if (score === target.length) {
        alert('You WIN!');
        document.location.reload(true);
    }
}

function gameOver() {
    if (tries > 1) {
        tries--;
    } else {
        alert('Game Over!');
        document.location.reload(true);
    }
}

function guessUpdate(letter) {
    for (index of indexes) {
        document.getElementById("word-" + index).innerHTML = letter;
    }
    indexes = [];
}

function matchCount(letter) {
    let pos = target.indexOf(letter);
    while (pos != -1) {
        indexes.push(pos);
        pos = target.indexOf(letter, pos + 1);
    }
    score = score + indexes.length;
}

function randWord() {
    target = words[Math.floor(Math.random() * words.length)];
    return target;
}

function wordGen() {
    for (let i = 0; i < target.length; i++) {
        const newDiv = document.createElement('div');
        newDiv.setAttribute('id', 'word-' + i);
        word.appendChild(newDiv);
    }
}

function alphabetGen() {
    for (let i = 65; i <= 90; i++) {
        const newDiv = document.createElement('div');
        newDiv.setAttribute('id', 'letter-' + i)
        newDiv.addEventListener("click", () => checkLetter(i));
        const newContent = document.createTextNode(String.fromCharCode(i));
        newDiv.appendChild(newContent);
        alphabet.appendChild(newDiv);
    }
}

function hangman() {
    randWord();
    wordGen();
    alphabetGen();
    console.log(target);
}
hangman();