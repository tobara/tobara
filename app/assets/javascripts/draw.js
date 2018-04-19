
function easeOutBounce (x) {
  var base = -Math.cos(x * (0.5 * Math.PI)) + 1;
  var rate = Math.pow(base,1.5);
  var rateR = Math.pow(1 - x, 2);
  var progress = -Math.abs(Math.cos(rate * (2.5 * Math.PI) )) + 1;
  return (1- rateR) + (progress * rateR);
}

var timing,
  timingProps = {
    type: 'oneByOne',
    duration: 250,
    start: 'autostart',
    pathTimingFunction: Vivus.LINEAR,
    animTimingFunction: Vivus.LINEAR
  };

function timingTest (buttonEl, property, type) {
  var activeSibling = buttonEl.parentNode.querySelector('button.active');
  activeSibling.classList.remove('active');
  buttonEl.classList.add('active');

  timingProps.type = (property === 'type') ? type : timingProps.type;
  timingProps.pathTimingFunction = (property === 'path') ? Vivus[type] : timingProps.pathTimingFunction;
  timingProps.animTimingFunction = (property === 'anim') ? Vivus[type] : timingProps.animTimingFunction;

  timing && timing.stop().destroy();
  timing = new Vivus('timing-example', timingProps);
}

var hi = new Vivus('timing-example', {type: 'oneByOne', duration: 75, start: 'autostart', dashGap: 20, forceRender: false},
  function () {
    if (window.console) {
      console.log('Animation finished. [log triggered from callback]');
    }
  }),
  obt1 = new Vivus('timing-example', {type: 'delayed', duration: 150}),
  obt2 = new Vivus('timing-example', {type: 'sync', duration: 150}),
  obt3 = new Vivus('timing-example', {type: 'oneByOne', duration: 150}),
  pola = new Vivus('timing-example', {type: 'scenario-sync', duration: 20, forceRender: false});

