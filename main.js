"use strict";
var HarvesterController = require('HarvesterController');
var spawn = Game.spawns.Spawn1;
if (!spawn) {
  throw new Error('no spawn');
}

if (!spawn.memory.harversterController) {
  spawn.harvesterController = new HarvesterController(spawn);
}
spawn.harvesterController.update();
