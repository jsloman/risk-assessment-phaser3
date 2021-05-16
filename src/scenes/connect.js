import Singleton from '../socket'

export default class Login extends Phaser.Scene {
    constructor() {
        super({
            key: 'Connect'
        });
    }

    preload() {
  
    }

    create() {
        let self = this;
    
        this.dealText = this.add.text(75, 350, ['Connecting to server ...']).setFontSize(18).setFontFamily('Trebuchet MS').setColor('#00ffff').setInteractive();
        console.log("connecting to server2");
        this.socket = Singleton.getInstance();
        this.socket.onopen = function (event) {
          console.log('connected to server');
          self.scene.start('Login', { socket: self.socket });
        };
        
    }
    
    update() {
    
    }
}