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
