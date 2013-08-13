var ColorDancer = function(top, left, timeBetweenSteps){
  this.colors = ['red', 'green', 'blue', 'yellow', 'cyan', 'orange', 'purple', 'pink', 'turquoise'];
  Dancer.call(this, top, left, timeBetweenSteps);
  this.colorChanger();
};

ColorDancer.prototype = Object.create(Dancer.prototype);
ColorDancer.prototype.constructor = ColorDancer;

ColorDancer.prototype.step = function(timeBetweenSteps){
  Dancer.prototype.step.call(this, timeBetweenSteps);
};

ColorDancer.prototype.colorChanger = function(){
  var dancer = this;
  setInterval(function() {
    var styleSettings = {
      'border-color': dancer.colors[Math.floor(Math.random() * dancer.colors.length)]
    };
    dancer.$node.css(styleSettings);
  }, 2000);
};