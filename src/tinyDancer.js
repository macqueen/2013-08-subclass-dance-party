var eltonJohnUrl = 'http://assets.rollingstone.com/assets/images/story/weekend-rock-question-what-is-elton-johns-best-song-20121123/1000x306/20121121-elton-x600-1353526455.jpg';

var TinyDancer = function(top, left, timeBetweenSteps){
  var node = $('<img class="tinyDancer" src="' + eltonJohnUrl + '"></img>');
  node.append('<audio src="tinyDancer.mp3" autoplay></audio>');
  Dancer.call(this, top, left, timeBetweenSteps, node);
};

TinyDancer.prototype = Object.create(Dancer.prototype);
TinyDancer.prototype.constructor = TinyDancer;

TinyDancer.prototype.step = function(timeBetweenSteps){
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this, timeBetweenSteps);
};