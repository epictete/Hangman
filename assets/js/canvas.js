const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const center = canvas.width / 2;

function draw() {
  switch (game.fails) {
    case 1:
      drawHead();
      break;
    case 2:
      drawBody();
      break;
    case 3:
      drawLeftLeg();
      break;
    case 4:
      drawRightLeg();
      break;
    case 5:
      drawLeftArm();
      break;
    case 6:
      drawRightArm();
      drawDead();
      break;
  }
}

// drawGallows();
// drawHead();
// drawSmile();
// drawBody();
// drawLeftLeg();
// drawRightLeg();
// drawLeftArm();
// drawRightArm();
// drawDead();

function drawGallows() {
  ctx.strokeStyle = "#444";
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.moveTo(center, 75);
  ctx.lineTo(center, 50);
  ctx.lineTo(center - 100, 50);
  ctx.lineTo(center - 100, 350);
  ctx.lineTo(center + 100, 350);
  ctx.stroke();
}

function drawHead() {
  ctx.lineCap = "round";
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.arc(center, 100, 25, 0, Math.PI * 2, true);
  ctx.stroke();
}

function drawBody() {
  ctx.beginPath();
  ctx.moveTo(center, 125);
  ctx.lineTo(center, 220);
  ctx.stroke();
}

function drawLeftLeg() {
  ctx.beginPath();
  ctx.moveTo(center, 220);
  ctx.lineTo(center - 40, 300);
  ctx.lineTo(center - 55, 290);
  ctx.stroke();
}

function drawRightLeg() {
  ctx.beginPath();
  ctx.moveTo(center, 220);
  ctx.lineTo(center + 40, 300);
  ctx.lineTo(center + 55, 290);
  ctx.stroke();
}

function drawLeftArm() {
  ctx.beginPath();
  ctx.moveTo(center, 140);
  ctx.lineTo(center - 60, 180);
  ctx.lineTo(center - 60, 190);
  ctx.stroke();
}

function drawRightArm() {
  ctx.beginPath();
  ctx.moveTo(center, 140);
  ctx.lineTo(center + 60, 180);
  ctx.lineTo(center + 60, 190);
  ctx.stroke();
}

function drawDead() {
  //Left eye
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(center - 11, 92);
  ctx.lineTo(center - 5, 98);
  ctx.moveTo(center - 11, 98);
  ctx.lineTo(center - 5, 92);
  ctx.stroke();
  //Right eye
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(center + 11, 92);
  ctx.lineTo(center + 5, 98);
  ctx.moveTo(center + 11, 98);
  ctx.lineTo(center + 5, 92);
  ctx.stroke();
  //Mouth
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(center - 5, 110);
  ctx.lineTo(center + 5, 115);
  ctx.stroke();
}
