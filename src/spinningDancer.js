var SpinningDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps, $('<span class="star-five"></span>'));
};

SpinningDancer.prototype = Object.create(Dancer.prototype);
SpinningDancer.prototype.constructor = SpinningDancer;

SpinningDancer.prototype.step = function(timeBetweenSteps){
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this, timeBetweenSteps);
};

// SpinningDancer.prototype.spin = function() {
//   var dancer = this;

//   setInterval(function() {
//     //dancer.$node.animate({});
//   }, 4000);
// };
