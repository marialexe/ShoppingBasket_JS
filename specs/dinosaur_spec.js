var assert = require('assert');
var Dinosaur = require('../dinosaur.js');

describe("Dinosaur", function() {

  var dinosaur1;
  var dinosaur2;

  beforeEach(function() {
    dinosaur1 = new Dinosaur("Tyrannosaurus",2);
    dinosaur2 = new Dinosaur("Velociraptor",1);
    dinosaur3 = new Dinosaur("Triceratops",3);
  });

  it("should output the dinosaur type", function() {
    assert.strictEqual("Tyrannosaurus",dinosaur1.type);
  });

  it("should output the dinosaur this year offspring number", function() {
    assert.strictEqual(2,dinosaur1.offspring);
  });


  it("should add this year offspring to an array of offsprings)", function(){
    dinosaur1.addOffspring();
    assert.strictEqual(1,dinosaur1.offsprings.length);
  })
})