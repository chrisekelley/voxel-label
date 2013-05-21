var LabelMaker = require('./Label.js')
var LabelPlugin = require('./LabelPlugin.js')()

module.exports = function(game) {
  game.view.renderer.addPostPlugin(LabelPlugin);
  return LabelPlugin
}

module.exports.label = function(labelText, avatar, game, playerID) {
  var THREE = game.THREE
  var createLabel = LabelMaker(THREE, LabelPlugin)
  console.log("Creating label: " + labelText)
  var playerLabel = new createLabel(avatar, playerID, labelText);
  return playerLabel
}