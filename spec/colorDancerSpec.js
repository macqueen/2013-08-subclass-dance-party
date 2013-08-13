describe("colorDancer", function() {

  var colorDancer;
  var timeBetweenSteps = 1000;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    colorDancer = new ColorDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(colorDancer.$node).to.be.an.instanceof(jQuery);
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      clock.tick(timeBetweenSteps);
      clock.tick(timeBetweenSteps);
      clock.tick(timeBetweenSteps);
      expect(colorDancer.$node.css('border-color') === 'red').to.be.equal(false);
    });
  });
});