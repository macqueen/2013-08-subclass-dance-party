var GrowingDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.changeSize();
};

GrowingDancer.prototype = Object.create(Dancer.prototype);
GrowingDancer.prototype.constructor = GrowingDancer;

GrowingDancer.prototype.step = function(timeBetweenSteps){
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
  var dancer = this;

  for (var i = 0; i < window.dancers.length; i++) {
    if (window.dancers[i] !== dancer) {
      var dancerLeft = window.dancers[i]._left;
      var dancerTop = window.dancers[i]._top;

      if (Math.sqrt(Math.pow((dancerLeft - dancer._left), 2) + Math.pow(dancerTop - dancer._top,2)) < 100) {
        dancer.$node.css('border-color', 'purple');
      }
    }
  }
};
