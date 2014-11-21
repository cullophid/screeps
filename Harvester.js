"use strict";
var Harvester = module.exports = function (creep) {
  this.creep = creep;
  this.spawn = Game.spawns[creep.memory.spawn];
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
