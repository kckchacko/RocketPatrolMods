//Kevin Chacko, Rocket Patrol Mods (Pond Patrol), 4/21/21, hours spent ~10
//Mods implemented: 
// -Display time remaining on the screen(10) 
// -Create a new title screen (e.g., new artwork, typography, layout) (10)
// -Redesign the game's artwork, UI, and sound to change its theme/aesthetic (to something other than sci-fi) (60)
// -Implement a new timing/scoring mechanism that adds time to the clock for successful hits (20)
let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [Menu, Play],
    // fps:{
    //   target: 60,
    //   forceSetTimeOut: true
    // }
  }
let game = new Phaser.Game(config);
// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;
// reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT;
