var SquareDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps, $('<span class="squareDancer"></span>'));
  this.squareDance();
};

SquareDancer.prototype = Object.create(Dancer.prototype);
SquareDancer.prototype.constructor = SquareDancer;

SquareDancer.prototype.step = function(timeBetweenSteps){
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this, timeBetweenSteps);
};

SquareDancer.prototype.squareDance = function() {
  var dancer = this;

  setInterval(function() {
    dancer.$node.animate({
      left: "+=50"
    }, 1000, function(){
      dancer.$node.animate({
        top: "+=50"
      }, 1000, function(){
        dancer.$node.animate({
          left: "-=50"
        }, 1000, function(){
          dancer.$node.animate({
            top: "-=50"
          }, 1000);
        });
      });
    });
  }, 4000);
};
