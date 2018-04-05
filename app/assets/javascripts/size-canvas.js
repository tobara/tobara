setSizeEvent();
var background = new Image();
$( document ).ready(function() {
     sizeCanvas();
     canvasInView();

});


function sizeCanvas() {
     var canvasSize = document.getElementById('size');
     var drawCanvas = document.createElement('canvas');
     drawCanvas.id = 'canvas';
     drawCanvas.height = canvasSize.height;
     drawCanvas.width = canvasSize.width;
     canvasSize.replaceWith(drawCanvas);
     var canvas = document.getElementById('canvas');

     drawLogoCanvas();

}

function drawLogoCanvas() {
     var canvas = document.getElementById('canvas'),
     ctx = canvas.getContext("2d");

     background.src = '/assets/logo-01.png';
     background.onload = function(){
     ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

  }
};


function getSize() {
    var canvas = document.getElementById('canvas');
    var drawSize = document.createElement('img');
    drawSize.id = 'size';
    drawSize.src = '/assets/l3-static.png';
    canvas.replaceWith(drawSize);
    sizeCanvas();
};

function canvasInView() {
     $('#canvas').one('inview', function(event, isInView) {
          if (isInView) {
              setTimeout(logoWriter, 3000);
          }
     });
}

function setSizeEvent() {
     var body = document.body;
     var att = document.createAttribute('onresize');
     att.value = 'getSize()';
     body.setAttributeNode(att);
}





function logoWriter() {
    setTimingExample();
    var turtleDraw = document.getElementById('timing-example');
    var fadeIn = document.getElementById('img2');
    var penDown = document.getElementById('theMotionPathFirst');

    // turtleDraw.style.cssText = "visibility: hidden;";  set css to hidden
    var duration = 3000;
    $({to:0}).animate({to:1}, duration, function() {
      startTurtle();
    });


}

var start = null;
var counter = 0;
var maxImage = 6;
var setTimingExample = setInterval(function() {
    nextFrame("/assets/logo-0" + (counter + 1) + ".png");
    if (counter + 1 == maxImage) {
        startTurtle();
        clearInterval(setTimingExample);
    } else {
        ++counter;
    }
}, 2000);





  function startTurtle() {
    // $('#content').css('background-image','url(assets/final-fade.gif)');
    var theTurtle = document.getElementById('animateNow');
    var fadeIn = document.getElementById('img2');
    var turtleDraw = document.getElementById('timing-example');
    var penDown = document.getElementById('theMotionPathFirst');
    turtleDraw.style["visibility"] = 'visible';
    animateTurtle();

    // theTurtle.innerHTML += '<mpath xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#theMotionPath1"/>';
    obt3 = new Vivus('timing-example', {type: 'oneByOne', duration: 2500});

    fadeIn.insertAdjacentHTML('beforeend', '<animate attributeName="opacity" fill="freeze" attributeType="CSS" begin="10s" dur="15s" from="0" to="1"/>');


    var duration = 15000;
    $({to:0}).animate({to:1}, duration, function() {
      hideTurtleDraw();
    });
    penDown.style.cssText = "-webkit-animation-delay:5s;-webkit-animation: fadeout 35s;-moz-animation: fadeout 35s;-ms-animation: fadeout 35s;-o-animation: fadeout 35s;animation: fadeout 35s;"
  }

  function animateTurtle() {
    var turtleEl = document.getElementById('turtle');
    var animateEl = document.createElement('AnimateMotion');
      animateEl.dur ="0.5s";
      animateEl.repeatcount ="25";
      animateEl.rotate = "auto";
      animateEl.id= "animateNow";


    var animateEl = document.createElement("animateMotion", {
      id: "animateNow",
      dur: "0.5s",
      repeatCount: "25",
      rotate: "auto",

      });




//     var mPathEl = document.createElementNS("http://www.w3.org/2000/svg","mpath");
//     mpath.setAttributeNS("http://www.w3.org/1999/xlink");
//     <animateMotion dur="0.5s" repeatCount="25" rotate="auto" id="animateNow">
// <mpath xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#theMotionPath1"/>
// </animateMotion>
var times = 38;
  for(var i=0; i < times; i++){
        var mPathEl = newAnimatePath(i);

        animateClone = animateEl.cloneNode(true);

        eachAnimatePath = animateClone.insertAdjacentHTML('beforeend', mPathEl);
        turtleEl.insertAdjacentHTML('beforeend', eachAnimatePath);
  }
}
function newAnimatePath(i) {
    var mPathEl = document.createElementNS('http://www.w3.org/2000/svg','mpath');
        mPathEl.setAttribute('xmlns:xlink','http://www.w3.org/1999/xlink');
        mPathEl.setAttribute('xmlns:href','#theMotionPath' + i);
    return mPathEl;
}





function nextFrame(logo) {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext("2d");
  background.src = logo;
  background.onload = function(){
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  };
}

