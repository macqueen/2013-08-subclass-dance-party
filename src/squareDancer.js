var SquareDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
};

SquareDancer.prototype = Object.create(Dancer.prototype);
SquareDancer.prototype.constructor = SquareDancer;

SquareDancer.prototype.step = function(timeBetweenSteps){
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this, timeBetweenSteps);
};

SquareDancer.prototype.colorChanger = function(){
  var dancer = this;
  setInterval(function() {
    var styleSettings = {
      'border-color': dancer.colors[Math.floor(Math.random() * dancer.colors.length)]
    };
    dancer.$node.css(styleSettings);
  }, 2000);
};