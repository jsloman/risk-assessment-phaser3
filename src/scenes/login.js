export default class Login extends Phaser.Scene {
    constructor() {
        super({
            key: 'Login'
        });
    }
    
    init(data) {
      let self = this;
      console.log('Login init', data);
      this.socket = data.socket;
      this.socket.onclose = function (event) {
          console.log("Connection closed");
          self.scene.start("Connect");
      }
    }

    preload() {
        this.load.html("loginForm", "src/scenes/loginForm.html");
    
     //   this.load.image('cyanCardFront', 'src/assets/CyanCardFront.png');
     //   this.load.image('cyanCardBack', 'src/assets/CyanCardBack.png');
     //   this.load.image('magentaCardFront', 'src/assets/MagentaCardFront.png');
     //   this.load.image('magentaCardBack', 'src/assets/MagentaCardBack.png');
    }

    create() {
        let self = this;
    
        this.socket.onmessage = function(event) {
          var message = JSON.parse(event.data);
          self.messageHandler(message); 
        };
        this.dealText = this.add.text(75, 250, ['Login']).setFontSize(18).setFontFamily('Trebuchet MS').setColor('#00ffff').setInteractive();
        this.nameInput = this.add.dom(300, 380).createFromCache("loginForm");
        this.returnKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
        this.returnKey.on("down", event => {
          let name = this.nameInput.getChildByName("username");
          let password = this.nameInput.getChildByName("password");
          if(name.value != "") {
            this.socket.send(JSON.stringify({ type: 'PLAYER_JOINED', newPlayer: {name: name.value, password: password.value} }));
            name.value = "";
          }
        });       
    }
    
    messageHandler(message) {
      switch (message.type) {
        case "PLAYER_BADPASSWORD":
          console.log("Bad password");
          this.badlogin = this.add.text(70, 270, ['Bad password']).setFontSize(18).setFontFamily('Trebuchet MS').setColor('#00ffff').setInteractive();
          break;
        case "PLAYER_JOINED_ACK":
          this.scene.start('Game', { socket: this.socket });
        
          break;
        default:
          console.log("Unknown message", message);
      }
    }
    
    update() {
    
    }
}