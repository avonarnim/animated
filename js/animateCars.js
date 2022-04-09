var carCanvas = document.getElementById("carCanvas");
var ctx = carCanvas.getContext("2d");

carCanvas.height = innerHeight - 20;
carCanvas.width = innerWidth - 20;

let carPosX = 0;

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
  carPosX += e.deltaY * 0.5;
  animate();
});

function animate() {
  ctx.clearRect(0, 0, carCanvas.width, carCanvas.height);
  ctx.drawImage(img, carPosX, 5);
}
