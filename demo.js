var textures = "/textures/painterly-textures/textures/"
var game = require('voxel-hello-world')({texturePath: textures})
var player = require('voxel-player')
var LabelPlugin =  require('../index.js')

module.exports = function(opts, setup) {

  var createPlayer = player(game)

  // create the player from a minecraft skin file and tell the game to use it as the main player
  var avatar = createPlayer('substack.png')
  avatar.possess()
  avatar.yaw.position.set(2, 14, 4)

  LabelPlugin(game)
  var playerLabel = LabelPlugin.label("JayJay", avatar, game, 1)
  return game
}
