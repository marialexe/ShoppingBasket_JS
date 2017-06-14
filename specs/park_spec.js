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
    dinosaur1 = new Dinosaur("Tyrannosaurus",2, 2016);
    dinosaur2 = new Dinosaur("Velociraptor",1, 2017);
    dinosaur3 = new Dinosaur("Triceratops",3, 2016);
    dinosaur4 = new Dinosaur("Tyrannosaurus",4, 2017);
    dinosaur5 = new Dinosaur("Tyrannosaurus",1, 2016);
    dinosaur6 = new Dinosaur("Velociraptor",0, 2016);

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

  it("should be able to remove all dinosaurs of a particular type - v1", function() {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.removeDinosaurByType("Velociraptor");
    assert.strictEqual(2,park.enclosure.length);
  });

  it("should be able to remove all dinosaurs of a particular type - v2", function() {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur3);
    park.removeDinosaurByType("Triceratops");
    assert.strictEqual(1,park.enclosure.length);
  });

  it("should get all the dinosaurs with an offspring count of more than 2 - v1 ", function() {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    assert.strictEqual(1,park.moreThanTwoOffspring().length);
  });

  it("should get all the dinosaurs with an offspring count of more than 2 - v2", function() {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    assert.strictEqual(2,park.moreThanTwoOffspring().length);
  });

  it("should get all the dinosaurs with an offspring count of more than 2 - v3", function() {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    assert.strictEqual(4,park.moreThanTwoOffspring()[1].offspring);
  });

  it("should be able to calculate number of dinosaurs after year one, starting with 1 dinosaur - v1", function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur5);
    assert.strictEqual(3,park.totalDinosaursPerYearByType("Triceratops",2016));
  });

  it("should be able to calculate number of dinosaurs after year one, starting with 1 dinosaur - v2", function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    park.addDinosaur(dinosaur5);
    park.addDinosaur(dinosaur6);
    assert.strictEqual(3,park.totalDinosaursPerYearByType("Tyrannosaurus",2016));
    assert.strictEqual(4,park.totalDinosaursPerYearByType("Tyrannosaurus",2017));
  });

})



