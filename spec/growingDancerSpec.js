describe("growingDancer", function() {

  var growingDancer;
  var timeBetweenSteps = 1000;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    growingDancer = new GrowingDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(growingDancer.$node).to.be.an.instanceof(jQuery);
  });

  describe("dance", function(){
    it("should grow and shrink", function(){
      clock.tick(timeBetweenSteps);
      expect(growingDancer.$node.css('width') === '10px').to.be.equal(false);
    });
  });
});