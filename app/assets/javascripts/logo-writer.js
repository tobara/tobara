// $( document ).ready(function() {
//   var canvas = document.getElementById("canvas"),
//   ctx = canvas.getContext("2d");



//   var background = new Image();
//   background.src = "/assets/l3-static.png";

//   background.onload = function(){
//     ctx.drawImage(background,0,0);
//   }
// });




// function turtleClick() {
//   $('#content').css('background-image','url(assets/l3.gif)');
//   var turtleDraw = document.getElementById('timing-example');
//   var fadeIn = document.getElementById('img2');
//   var theTurtle = document.getElementById('animateNow');
//   var penDown = document.getElementById('theMotionPathFirst');
//   turtleDraw.style.cssText = "visibility: hidden;";
//   var duration = 3000;
//   $({to:0}).animate({to:1}, duration, function() {
//     startTurtle();
//   });



//   function startTurtle() {
//     $('#content').css('background-image','url(assets/final-fade.gif)');

//     obt3 = new Vivus('timing-example', {type: 'oneByOne', duration: 350});

//     theTurtle.innerHTML = '<mpath xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#theMotionPath1"/>';
//     fadeIn.insertAdjacentHTML('beforeend', '<animate attributeName="opacity" fill="freeze" attributeType="CSS" begin="10s" dur="15s" from="0" to="1"/>');
//     turtleDraw.style.cssText = "visibility: visible;";

//     var duration = 15000;
//     $({to:0}).animate({to:1}, duration, function() {
//       hideTurtleDraw();
//     });
//     penDown.style.cssText = "-webkit-animation-delay:5s;-webkit-animation: fadeout 35s;-moz-animation: fadeout 35s;-ms-animation: fadeout 35s;-o-animation: fadeout 35s;animation: fadeout 35s;"
//   }

//   function hideTurtleDraw() {
//     penDown.attributes['stroke-width'].value = '0';

//     backgroundHide();
//   }

//   function backgroundHide() {
//       $('#content').css('background-image','url(assets/final-fade.gif)');

//   }





// }


// FUUUUUULLLLLLLL EDIT:




function turtleClick() {
  $('#content').css('background-image','url(assets/l3.gif)');
  var turtleDraw = document.getElementById('svgContainer');
  var fadeIn = document.getElementById('img2');
  // var theTurtle = document.getElementById('animateNow');
  // var penDown = document.getElementById('theMotionPathFirst');
  // turtleDraw.style.cssText = "visibility: hidden;";
  var duration = 3000;
  $({to:0}).animate({to:1}, duration, function() {
    startTurtle();
  });



  function startTurtle() {
    // $('#content').css('background-image','url(assets/final-fade.gif)');

    // obt3 = new Vivus('timing-example', {type: 'oneByOne', duration: 350});

    // theTurtle.innerHTML = '<mpath xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#theMotionPath1"/>';
    // fadeIn.insertAdjacentHTML('beforeend', '<animate attributeName="opacity" fill="freeze" attributeType="CSS" begin="10s" dur="15s" from="0" to="1"/>');
    // turtleDraw.style.cssText = "visibility: visible;";

    var duration = 15000;
    $({to:0}).animate({to:1}, duration, function() {
      hideTurtleDraw();
    });
    penDown.style.cssText = "-webkit-animation-delay:5s;-webkit-animation: fadeout 35s;-moz-animation: fadeout 35s;-ms-animation: fadeout 35s;-o-animation: fadeout 35s;animation: fadeout 35s;"
  }

  function hideTurtleDraw() {
    penDown.attributes['stroke-width'].value = '0';

    // backgroundHide();
  }

  function backgroundHide() {
      $('#content').css('background-image','url(assets/final-fade.gif)');

  }





}






