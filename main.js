"use strict";
var HarvesterController = require('HarvesterController');
var spawn = Game.spawns.Spawn1;
spawn.memory.harvesters = spawn.memory.harvesters || 2;

spawn.harvesterController = new HarvesterController(spawn);
spawn.harvesterController.harvest();
