var LabelMaker = require('./Label.js')
var LabelPlugin = require('./LabelPlugin.js')()

module.exports = function(labelText, avatar, game, playerID, emitter, otherPlayers) {
  var THREE = game.THREE
  var createLabel = LabelMaker(THREE, LabelPlugin)
  console.log("Creating label: " + labelText)
  var playerLabel = new createLabel(avatar, playerID, labelText);
  if (otherPlayers != null) {
    setTimeout(function() {
      emitter.on('update', function(updates) {
        Object.keys(updates.positions).map(function(playerId) {
          if (playerId != playerID)  {
            var other = otherPlayers[playerId]
            if (other && !other.labelled) {
              var name = "Dude " + playerId.slice(0,4);
              if (other.registration!= null) {
                var name = other.registration.username
              }
              new createLabel(other.mesh, playerId, name);
              other.labelled = true
            }
          }
        })
      })
    }, 1000)
  }
  game.view.renderer.addPostPlugin(LabelPlugin);
  return playerLabel
}