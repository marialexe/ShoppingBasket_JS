var Dinosaur = function(type, offspring) {
  this.type = type;
  this.offspring = offspring;
  this.offsprings = [];
  }

  Dinosaur.prototype = {
    addOffspring: function() {
      this.offsprings.push(this.offspring);
    }
  }

  module.exports = Dinosaur;
