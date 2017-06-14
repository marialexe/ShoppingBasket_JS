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

})