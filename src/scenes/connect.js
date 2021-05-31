import ConnectWebsocket from '../socket'

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
        console.log("Connecting to server");
        this.socket = ConnectWebsocket.getInstance();
        this.socket.onopen = function (event) {
          console.log('connected to server');
          self.scene.start('Login', { socket: self.socket });
        };
        this.socket.onerror = function(event) {
          console.log("Websocket error", event);
        }
        this.socket.onclose = function (event) {
          console.log("Connection closed");
          self.scene.start("Connect");
        }
        
    }
    
    update() {
    
    }
}