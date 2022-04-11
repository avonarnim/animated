var arrowCanvas = document.getElementById("arrowsCanvas");
var ctx = arrowCanvas.getContext("2d");

arrowCanvas.height = innerHeight - 20;
arrowCanvas.width = innerWidth - 20;
// mouseHelper;

let arrowPosX = [75, 500, 200, 0];
let arrowPosY = [75, 500, 200, 0];
let arrowMultipliers = [0.5, 0.2, 0.4, 0.6];

let imageOptions = ["Right", "Left", "Up", "Down"];
var imgs = [];
for (let i = 0; i < 4; i++) {
  var img = new Image();
  img.src = "../assets/imgs/arrow" + imageOptions[i] + ".png";
  imgs.push(img);
  img.onload = () => {
    render();
  };
}
// numItems = 4;

// function MouseHelper(doc, canvas) {
//   this.doc = doc;
//   this.canvas = canvas;

//   this.update = function (handle) {
//     this.doc.body.style.cursor = handle;
//   };

//   this.mousedown = function (e) {
//     var mouseX = e.layerX - mouseHelper.canvas.offsetLeft,
//       mouseY = e.layerY - mouseHelper.canvas.offsetTop;

//     for (var i = 0, l = renderItems.length; i < l; i++) {
//       dx = mouseX - renderItems[i].getCenterX();
//       dy = mouseY - renderItems[i].getCenterY();

//       if (Math.sqrt(dx * dx + dy * dy) < renderItems[i].getRadius()) {
//         dragIdx = i;
//         dragOffsetX = dx;
//         dragOffsetY = dy;

//         canvas.addEventListener("mousemove", mouseHelper.mousemove);
//         canvas.addEventListener("mouseup", mouseHelper.mouseup);

//         drawStuff();
//         mouseHelper.update("move");

//         return;
//       }
//     }
//   };

//   this.mousemove = function (e) {
//     var mouseX = e.layerX - mouseHelper.canvas.offsetLeft,
//       mouseY = e.layerY - mouseHelper.canvas.offsetTop;

//     renderItems[dragIdx].setCenterX(mouseX - dragOffsetX);
//     renderItems[dragIdx].setCenterY(mouseY - dragOffsetY);

//     drawStuff();
//   };

//   this.mouseup = function (e) {
//     var mouseX = e.layerX - mouseHelper.canvas.offsetLeft,
//       mouseY = e.layerY - mouseHelper.canvas.offsetTop;

//     canvas.removeEventListener("mousemove", mouseHelper.mousemove);
//     canvas.removeEventListener("mouseup", mouseHelper.mouseup);

//     renderItems[dragIdx].setCenterX(mouseX - dragOffsetX);
//     renderItems[dragIdx].setCenterY(mouseY - dragOffsetY);

//     renderItems[dragIdx].setSelected(false);
//     mouseHelper.update("default");

//     drawStuff();

//     dragIdx = -1;
//   };
// }

// function init() {
//   mouseHelper = new MouseHelper(document, canvas);
//   arrowCanvas.addEventListener("mousedown", mouseHelper.mousedown);

//   addEventListener("resize", () => {
//     arrowCanvas.height = innerHeight - 20;
//     arrowCanvas.width = innerWidth - 20;
//     render();
//   });

//   arrowCanvas.addEventListener("wheel", (e) => {
//     arrowPosX[0] += e.deltaY * arrowMultipliers[0];
//     arrowPosX[1] -= e.deltaY * arrowMultipliers[1];

//     arrowPosY[2] += e.deltaY * arrowMultipliers[2];
//     arrowPosY[3] -= e.deltaY * arrowMultipliers[3];

//     arrowPosX.forEach((pos, i) => {
//       if (pos > arrowCanvas.width - 250) {
//         arrowPosX[i] = arrowCanvas.width - 250;
//       } else if (pos < 0) {
//         arrowPosX[i] = 0;
//       }
//     });

//     arrowPosY.forEach((pos, i) => {
//       if (pos > arrowCanvas.height - 250) {
//         arrowPosY[i] = arrowCanvas.height - 250;
//       } else if (pos < 0) {
//         arrowPosY[i] = 0;
//       }
//     });

//     render();
//   });
// }

function render() {
  //   ctx.clearRect(0, 0, arrowCanvas.width, arrowCanvas.height);
  ctx.drawImage(
    imgs[0],
    arrowPosX[0],
    arrowPosY[0],
    imgs[0].height * 0.1,
    imgs[0].width * 0.1
  );
  ctx.drawImage(
    imgs[1],
    arrowPosX[1],
    arrowPosY[1],
    imgs[1].height * 0.1,
    imgs[1].width * 0.1
  );

  ctx.drawImage(
    imgs[2],
    arrowPosX[2],
    arrowPosY[2],
    imgs[2].height * 0.1,
    imgs[2].width * 0.1
  );
  ctx.drawImage(
    imgs[3],
    arrowPosX[3],
    arrowPosY[3],
    imgs[3].height * 0.1,
    imgs[3].width * 0.1
  );
}

// init();

addEventListener("resize", () => {
  arrowCanvas.height = innerHeight - 20;
  arrowCanvas.width = innerWidth - 20;
  render();
});

arrowCanvas.addEventListener("wheel", (e) => {
  arrowPosX[0] += e.deltaY * arrowMultipliers[0];
  arrowPosX[1] -= e.deltaY * arrowMultipliers[1];

  arrowPosY[2] += e.deltaY * arrowMultipliers[2];
  arrowPosY[3] -= e.deltaY * arrowMultipliers[3];

  arrowPosX.forEach((pos, i) => {
    if (pos > arrowCanvas.width - 100) {
      arrowPosX[i] = arrowCanvas.width - 100;
    } else if (pos < 0) {
      arrowPosX[i] = 0;
    }
  });

  arrowPosY.forEach((pos, i) => {
    if (pos > arrowCanvas.height - 100) {
      arrowPosY[i] = arrowCanvas.height - 100;
    } else if (pos < 0) {
      arrowPosY[i] = 0;
    }
  });

  render();
});
