const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
const center = canvas.width / 2;

function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height)
}

function drawWin() {
    ctx.font = '28px arial';
    ctx.textAlign = 'center';
    ctx.fillText('You WIN!', center, canvas.height - 70);
    ctx.fillText('Congratulations.', center, canvas.height - 40);
}

function drawGameOver() {
    ctx.font = '28px arial';
    ctx.textAlign = 'center';
    ctx.fillText('Game Over!', center, canvas.height - 70);
    ctx.fillText('The word was : "' + game.target + '"', center, canvas.height - 40);
}

function draw() {
    switch (game.fails) {
        case 1:
            darwHead();
            break;
        case 2:
            darwBody();
            break;
        case 3:
            darwLeftLeg();
            break;
        case 4:
            darwRightLeg();
            break;
        case 5:
            darwLeftArm();
            break;
        case 6:
            darwRightArm();
            break;
    }
}

function drawGallows() {
    ctx.strokeStyle = '#444';
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(center, 75);
    ctx.lineTo(center, 50);
    ctx.lineTo(center - 100, 50);
    ctx.lineTo(center - 100, 350);
    ctx.lineTo(center + 100, 350);
    ctx.stroke();
}

function darwHead() {
    ctx.strokeStyle = '#444';
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.arc(center, 100, 25, 0, Math.PI * 2, true);
    ctx.stroke();
}

function darwBody() {
    ctx.beginPath();
    ctx.moveTo(center, 125);
    ctx.lineTo(center, 220);
    ctx.stroke();
}

function darwLeftLeg() {
    ctx.beginPath();
    ctx.moveTo(center, 220);
    ctx.lineTo(center - 40, 300);
    ctx.stroke();
}

function darwRightLeg() {
    ctx.beginPath();
    ctx.moveTo(center, 220);
    ctx.lineTo(center + 40, 300);
    ctx.stroke();
}

function darwLeftArm() {
    ctx.beginPath();
    ctx.moveTo(center, 140);
    ctx.lineTo(center - 60, 180);
    ctx.stroke();
}

function darwRightArm() {
    ctx.beginPath();
    ctx.moveTo(center, 140);
    ctx.lineTo(center + 60, 180);
    ctx.stroke();
}