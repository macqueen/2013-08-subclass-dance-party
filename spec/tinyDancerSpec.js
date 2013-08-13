describe("tinyDancer", function() {

  var tinyDancer;
  var timeBetweenSteps = 1000;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    tinyDancer = new TinyDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(tinyDancer.$node).to.be.an.instanceof(jQuery);
  });

  describe("dance", function(){
    it("should have elton john image", function(){
      expect(tinyDancer.$node.attr('src') === eltonJohnUrl).to.be.equal(true);
    });
    it("should have an mp3 inside of it", function() {
      var audio = tinyDancer.$node.children();
      expect(audio.attr('src') === 'tinyDancer.mp3').to.be.equal(true);
    });
  });
});