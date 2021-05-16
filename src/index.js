import Phaser from 'phaser';
import Game from "./scenes/game"
import Login from "./scenes/login"
import Connect from "./scenes/connect"


const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 540,
    height: 960,
    dom: {
      createContainer: true
    },
    scene: [
      Connect, 
      Login,
      Game 
    ]
};

const game = new Phaser.Game(config);
