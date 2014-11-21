var HarvesterController = require('HarvesterController');
module.exports = function () {
  var spawn = Game.spawns.Spawn1;
  spawn.harvesterController = new HarvesterController(spawn);
};
