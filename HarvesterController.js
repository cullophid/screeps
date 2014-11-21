"use strict";
var Harvester = require('Harvester');
var HarvesterController = module.exports = function (spawn) {
  var name, creep;
  this.spawn = spawn;
  this.harvesters = [];
  for (name in Game.creeps) {
    creep = Game.creeps[name];
    if (!creep.spawning && creep.memory.role === 'harvester') {
      this.harvesters.push(new Harvester(creep));
    }
  }
  if (this.harvesters.length < spawn.memory.harvesters) {
    this.spawnHarvester();
  }
};

HarvesterController.prototype.spawnHarvester = function () {
  if (!this.spawn.spawning) {
    console.log('Spawning new Harvester');
    this.spawn.createCreep([Game.WORK, Game.MOVE, Game.CARRY], 'Harvester-' + Game.time, {role :"harvester", spawn : this.spawn.name});
  }
};

HarvesterController.prototype.harvest = function () {
  this.harvesters.forEach(function (harvester) {
    harvester.harvest();
  });
};
