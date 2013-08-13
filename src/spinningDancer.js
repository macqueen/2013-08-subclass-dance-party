var SpinningDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps, $('<span class="star-five"></span>'));
};

SpinningDancer.prototype = Object.create(Dancer.prototype);
SpinningDancer.prototype.constructor = SpinningDancer;

SpinningDancer.prototype.step = function(timeBetweenSteps){
  Dancer.prototype.step.call(this, timeBetweenSteps);
};
