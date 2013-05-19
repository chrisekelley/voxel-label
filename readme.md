# voxel-label

Voxel-label is a [voxeljs module](http://voxeljs.com/#modules) that implements
[LabelPlugin](http://japhr.blogspot.com.es/2013/03/fun-with-threejs-camera-orientation.html), a three.js plugin that
adds labels to your game players (avatars). It can work in single-player mode as well as with
[voxel-client](https://github.com/maxogden/voxel-client) for labelling all avatars in a multiplayer game.

## Get it running on your machine

```
npm install
```

Run the start script:

```
npm start
```

This gets the server running on port 8080.

You may view a demo at http://127.0.0.1:8080.

# API

## require('voxel-label')(labelText, avatar, game, playerID, emitter, otherPlayers)

Example:

Single-player mode:

    var playerLabel = LabelMaker("JayJay", avatar, game, 1)

Multi-player mode:

Make sure that your application populates a registration objects that has a username for the other players ("others").
[voxel-app-server](https://github.com/chrisekelley/voxel-app-server) has an example of how to do this.

    var playerLabel = LabelMaker(labelText, avatar, game, client.playerID, client.emitter, client.others)


# Credits:

 - Much of the code for the LabelPlugin and Label.js comes from Chris Strom's blog:
http://japhr.blogspot.com.es/2013/03/fun-with-threejs-camera-orientation.html
 - Max Ogden for creating [voxeljs](http://voxeljs.com)

## license

BSD
