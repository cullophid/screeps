"use strict";
var counter = 0;


var Harvester = module.exports = function (spawn) {
  var name = spawn.createCreep([Game.WORK, Game.MOVE, Game.CARRY], 'Harvester-'+ (counter += 1));
  if (name < 0) {
    throw new Error(name);
  }
  this.creep = Game.creeps[name];
  this.creep.memory.role = 'harvester';
  this.spawn = spawn;


};
Harvester.prototype.harvest = function () {
  if(this.creep.energy < this.creep.energyCapacity) {
    var sources = this.creep.room.find(Game.SOURCES);
    this.creep.moveTo(sources[0]);
    this.creep.harvest(sources[0]);
  }
  else {
    this.creep.moveTo(this.spawn);
    this.creep.transferEnergy(this.spawn);
  }
};
