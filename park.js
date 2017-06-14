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
  }

}

module.exports = Park;