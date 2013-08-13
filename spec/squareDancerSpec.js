describe("squareDancer", function() {

  var squareDancer;
  var timeBetweenSteps = 1000;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    squareDancer = new SquareDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(squareDancer.$node).to.be.an.instanceof(jQuery);
  });

  describe("dance", function(){
    it("should change left value", function(){
      var initialLeft = squareDancer.$node.css('left');
      clock.tick(timeBetweenSteps);
      clock.tick(timeBetweenSteps);
      clock.tick(timeBetweenSteps);
      clock.tick(timeBetweenSteps);
      clock.tick(timeBetweenSteps); // clock 5 times since the set timeout is set to 4000 and each side animation takes 1000 
      expect(squareDancer.$node.css('left') === initialLeft).to.be.equal(false);
    });
  });
});