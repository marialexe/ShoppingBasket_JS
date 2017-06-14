var Dinosaur = require('./dinosaur.js');

var Park = function() {
  this.enclosure = [];
}

Park.prototype = {

  addDinosaur: function(dinosaur){
    this.enclosure.push(dinosaur);
  },

  removeDinosaurByType: function(dinosaurType){
    // for(var i=0; i<this.enclosure.length; i++){
    for(var i=this.enclosure.length-1; i>=0; i--){ 
      if(this.enclosure[i].type === dinosaurType) {
        var index = i;
        this.enclosure.splice(index,1);
      }
    }
  },

  moreThanTwoOffspring: function() {
    var moreThanTwoOffsprings = [];
    for(var i=0; i<this.enclosure.length;i++) {
      if(this.enclosure[i].offspring > 2) {
        moreThanTwoOffsprings.push(this.enclosure[i]);
      }
    }
    return moreThanTwoOffsprings;
  },

  totalDinosaursPerYearByType: function(dinosaurType,year) {
    var count = 0;
    for(var i=0; i< this.enclosure.length;i++) {
      if (this.enclosure[i].type === dinosaurType && this.enclosure[i].year === year) {
        count += this.enclosure[i].offspring;

      }
    }
    return count;
  }

}



module.exports = Park;