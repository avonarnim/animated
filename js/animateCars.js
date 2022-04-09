var carCanvas = document.getElementById("carCanvas");
var ctx = carCanvas.getContext("2d");

carCanvas.height = innerHeight - 20;
carCanvas.width = innerWidth - 20;

let carPosX = [75, 500, 200, 0];
let carMultipliers = [0.5, 0.2, 0.4, 0.6];

addEventListener("resize", () => {
  carCanvas.height = innerHeight - 20;
  carCanvas.width = innerWidth - 20;
  animate();
});

var img = new Image(); // Create new img element
img.alt = "unfortunate";
img.src = "../assets/imgs/vw-car.png"; // Set source path
img.onload = () => {
  console.log(img);
  animate();
};

carCanvas.addEventListener("wheel", (e) => {
  carPosX[0] += e.deltaY * carMultipliers[0];
  carPosX[1] += e.deltaY * carMultipliers[1];
  carPosX[2] += e.deltaY * carMultipliers[2];
  carPosX[3] += e.deltaY * carMultipliers[3];

  carPosX.forEach((pos, i) => {
    if (pos > carCanvas.width - 250) {
      carPosX[i] = carCanvas.width - 250;
    } else if (pos < 0) {
      carPosX[i] = 0;
    }
  });

  animate();
});

function animate() {
  ctx.clearRect(0, 0, carCanvas.width, carCanvas.height);
  ctx.drawImage(img, carPosX[0], 5);
  ctx.drawImage(img, carPosX[1], 125);
  ctx.drawImage(img, carPosX[2], 245);
  ctx.drawImage(img, carPosX[3], 365);
}
