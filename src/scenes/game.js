export default class Game extends Phaser.Scene {
    constructor() {
        super({
            key: 'Game'
        });
    }

    init(data) {
      let self = this;
      console.log('Game init', data);
      this.socket = data.socket;
      this.socket.onclose = function (event) {
          console.log("Connection closed");
          self.scene.start("Connect");
      }
    }


    preload() {
     //   this.load.image('cyanCardFront', 'src/assets/CyanCardFront.png');
     //   this.load.image('cyanCardBack', 'src/assets/CyanCardBack.png');
     //   this.load.image('magentaCardFront', 'src/assets/MagentaCardFront.png');
     //   this.load.image('magentaCardBack', 'src/assets/MagentaCardBack.png');
    }

    create() {
        this.dealText = this.add.text(75, 350, ['DEAL CARDS']).setFontSize(18).setFontFamily('Trebuchet MS').setColor('#00ffff').setInteractive();
    }
    
    update() {
    
    }
}