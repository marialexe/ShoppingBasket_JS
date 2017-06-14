var assert = require('assert');
var Dinosaur = require('../dinosaur.js');

describe("Dinosaur", function() {

  var dinosaur1;
  var dinosaur2;

  beforeEach(function() {
    dinosaur1 = new Dinosaur("Tyrannosaurus",2, 2016);
  });

  it("should output the dinosaur type", function() {
    assert.strictEqual("Tyrannosaurus",dinosaur1.type);
  });

  it("should output the dinosaur this year offspring number", function() {
    assert.strictEqual(2,dinosaur1.offspring);
  });

})