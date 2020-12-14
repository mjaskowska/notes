### canvas

#### setting up

in .HTML:
======

<body onload="draw();">
    <canvas id="tutorial" width="150" height="150">Alternative content (text or static img)</canvas>
  </body>
  


in .JS:
======
var canvas = document.getElementById('tutorial');
var ctx = canvas.getContext('2d');

to check if there is any alternative content definied for when canvas is not supported in the browser
(browser that doesn't support canvas, will not recognise getContext() so if statement returns false

if (canvas.getContext) {
  var ctx = canvas.getContext('2d');
  // drawing code here
  
  ctx.fillStyle = 'rgb(200, 0, 0)';
  ctx.fillRect(10, 10, 50, 50);

  ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
  ctx.fillRect(30, 30, 50, 50);
        
} else {
  // canvas-unsupported code here
}

in .CSS:
======
canvas { border: 1px solid black; }




- starting point: top left at 0, 0


- fillRect(x, y, width, height) - draws area
- strokeRect(x, y, width, height) - draws stroke/border
- clearRect(x, y, width, height) - clears the field of rectangle, like eraser

here: x, y - position of rectangle's top left corner
width/height - rectangle's size


- drawing paths methods
beginPath()
closePath()
stroke()
fill()

if (canvas.getContext){
   var ctx = canvas.getContext('2d');

   ctx.beginPath();
   ctx.moveTo(75,50);
   ctx.lineTo(100,75);
   ctx.lineTo(100,25);
   ctx.fill();
  }
  
  ...to be continued

