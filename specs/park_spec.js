var assert = require('assert');
var Park = require('../park.js');
var Dinosaur = require('../dinosaur.js');

describe("Park", function() {

  var park;
  var dinosaur1;
  var dinosaur2;
  var dinosaur3;

  beforeEach(function(){
    park = new Park();
    dinosaur1 = new Dinosaur("Tyrannosaurus",2);
    dinosaur2 = new Dinosaur("Velociraptor",1);
    dinosaur3 = new Dinosaur("Triceratops",3);
  });

  it("enclosure should start empty", function(){
    assert.strictEqual(0,park.enclosure.length);
    // assert.strictEqual([],park.enclosure);
  });
  it("should be able to add dinosaur to enclosure", function() {
    park.addDinosaur(dinosaur1);
    assert.strictEqual(1,park.enclosure.length);
  });

  it("should be able to add multiple dinosaurs to enclosure", function() {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    assert.strictEqual(3,park.enclosure.length);
  });

})