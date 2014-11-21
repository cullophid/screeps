"use strict";
var Harvester = require('Harvester');


var HarvesterController = module.exports = function (spawn) {
  this.spawn = spawn;
  this.harvesters = [];

};

HarvesterController.prototype.update = function () {
  console.log('UPDATE')
  this.clean();
  console.log('update');
  console.log(this.harvesters.length);
  console.log(this.spawn.memory.harvesters);
  if (this.harvesters.length < Memory.harvesters) {
    this.spawnHarvester(); // does nothign if passed 0
  }
  //   this.harvest();
};

HarvesterController.prototype.clean = function () {
  this.harvesters = this.harvesters.reduce(function (harvesters, harvester) {
    if(this.creep.ticksToLive > 0) {
      this.harvesters.push(harvester);
    }

    return harvesters;
  },[]);
  console.log('CLEAN: ' +this.harvesters.length);
};

HarvesterController.prototype.spawnHarvester = function () {
  if (this.spawn.spawning) {
    return false;
  }
  try {
    this.harvesters.push(new Harvester(this.spawn));
  } catch (e) {
    console.log('Error Spawning Harvester : ' + e.message);
    return false;
  }
  return true;
};

HarvesterController.prototype.harvest = function () {
  this.harvesters.forEach(function (harvester) {
    harvester.harvest();
  });
};
