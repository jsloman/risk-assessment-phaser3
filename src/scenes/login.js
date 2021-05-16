export default class Login extends Phaser.Scene {
    constructor() {
        super({
            key: 'Login'
        });
    }
    
    init(data) {
      console.log('Login init', data);
      this.socket = data;
    }

    preload() {
        this.load.html("loginForm", "src/scenes/loginForm.html");
    
     //   this.load.image('cyanCardFront', 'src/assets/CyanCardFront.png');
     //   this.load.image('cyanCardBack', 'src/assets/CyanCardBack.png');
     //   this.load.image('magentaCardFront', 'src/assets/MagentaCardFront.png');
     //   this.load.image('magentaCardBack', 'src/assets/MagentaCardBack.png');
    }

    create() {
        this.dealText = this.add.text(75, 250, ['Login']).setFontSize(18).setFontFamily('Trebuchet MS').setColor('#00ffff').setInteractive();
        this.nameInput = this.add.dom(300, 380).createFromCache("loginForm");
        this.returnKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
        this.returnKey.on("down", event => {
          let name = this.nameInput.getChildByName("username");
          if(name.value != "") {
            this.dealText.setText("Hello, " + name.value);
            name.value = "";
          }
        });       
    }
    
    update() {
    
    }
}