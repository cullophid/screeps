/*
* Module code goes here. Use 'module.exports' to export things:
* module.exports = 'a thing';
*
* You can import it from another modules like this:
* var mod = require('Harvester'); // -> 'a thing'
*/
"use strict";
var counter = 0;


var Builder = module.exports = function (spawn) {
  var name = spawn.createCreep([Game.WORK, Game.MOVE, Game.CARRY], 'Harvester-'+ (counter += 1));
  if (name < 0) {
    throw new Error(name);
  }
  this.creep = Game.creeps[name];
  this.creep.memory.role = 'builder';
  this.spawn = spawn;


};
Builder.prototype.harvest = function () {
  if(this.creep.energy === 0) {
    this.creep.moveTo(this.spawn);
    this.spawn.transferEnergy(this.creep);
  }
  else {
    var targets = this.creep.room.find(Game.CONSTRUCTION_SITES);
    if(targets.length) {
      this.creep.moveTo(targets[0]);
      this.creep.build(targets[0]);
    }
  }
};
