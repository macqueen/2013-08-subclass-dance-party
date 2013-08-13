var Dancer = function(top, left, timeBetweenSteps, defaultNodeType){
  this._top = top;
  this._left = left;
  this.$node = defaultNodeType || $('<span class="dancer"></span>');
  this.step(timeBetweenSteps);
  this.setPosition(top, left);
};

Dancer.prototype.step = function(timeBetweenSteps){
  setTimeout(this.step.bind(this, timeBetweenSteps), timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineup = function(side) {
  var cssObj = {};
  cssObj[side] = 0;
  if (side === 'right' ) {
    this.$node.css('left','');
  }
  else if (side === 'bottom') {
    this.$node.css('top','');
  }
  this.$node.animate(cssObj, 2000);
};

