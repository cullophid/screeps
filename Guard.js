"use strict";
var counter = 0;


var Guard = module.exports = function (spawn) {
  var name = spawn.createCreep([Game.WORK, Game.MOVE, Game.CARRY], 'Harvester-'+ (counter += 1));
  if (name < 0) {
    throw new Error(name);
  }
  this.creep = Game.creeps[name];
  this.creep.memory.role = 'Guard';
  this.spawn = spawn;


};
Guard.prototype.harvest = function () {
  var targets = this.creep.room.find(Game.HOSTILE_CREEPS);
  if(targets.length) {
    this.creep.moveTo(targets[0]);
    this.creep.attack(targets[0]);
  } else {
    this.creep.moveTo(this.spawn);
  }
};
