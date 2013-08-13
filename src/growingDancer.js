var GrowingDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.changeSize();
};

GrowingDancer.prototype = Object.create(Dancer.prototype);
GrowingDancer.prototype.constructor = GrowingDancer;

GrowingDancer.prototype.step = function(timeBetweenSteps){
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this, timeBetweenSteps);
};

GrowingDancer.prototype.changeSize = function() {
  var dancer = this;

  setInterval(function() {
    var size = Math.floor(Math.random() * 100) + 10 + 'px';
    dancer.$node.animate({
      'border-width': size,
      'border-radius': size
    }, 1000);
  }, 2000);
};

GrowingDancer.prototype.changeColor = function() {
  var parsePxToInt = function(pxValue) {
    return parseInt(pxValue.slice(0, -2));
  };
  var dancer = this;
  var left = parsePxToInt(dancer.$node.css('left'));
  var top = parsePxToInt(dancer.$node.css('top'));

  for (var i = 0; i < window.dancers.length; i++) {
    if (window.dancers[i] !== dancer) {
      var dancerLeft = parsePxToInt(window.dancers[i].$node.css('left'));
      var dancerTop = parsePxToInt(window.dancers[i].$node.css('top'));

      if (Math.sqrt(Math.pow((dancerLeft - left), 2) + Math.pow(dancerTop - top,2)) < 100) {
        dancer.$node.css('border-color', 'purple');
      }
    }
  }
};
