"use strict";
var Harvester = require('Harvester');


var HarvesterController = module.exports = function (spawn) {
  this.spawn = spawn;
  this.harvesters = [];

};


HarvesterController.prototype.update = function () {
  this.clean();
  this.spawnHarvesters(this.harvesters.length - this.spawn.memory.harvesters); // does nothign if passed 0
  this.harvest();
};

HarvesterController.prototype.clean = function () {
  this.harvesters = this.havesters.reduce(function (harvesters, harvester) {
    if(harvester.creep) {
      harvesters.push(harvester);
    }
    return harvesters;
  },[]);
};

HarvesterController.prototype.spawnHarvesters = function (count) {
  var i;
  for (i = 0; i <= count; i += 1) {
    this.harvesters.push(new Harvester(this.spawn));
  }
};

HarvesterController.prototype.harvest = function () {
  this.harvesters.forEach(function (harvester) {
    harvester.harvest();
  });
};
