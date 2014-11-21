"use strict";
var Harvester = module.exports = function (spawn) {
  console.log('TICK: ' + Game.time);
  var name = spawn.createCreep([Game.WORK, Game.MOVE, Game.CARRY], 'Harvester-'+ Game.time);
  if (name < 0) {
    console.log('ERROR: ' + name)
    // throw new Error(name);
  }
  console.log('CREEP : ' + name);
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
