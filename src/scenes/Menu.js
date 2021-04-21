class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }
    preload() {
        // load audio
        this.load.audio('sfx_select', './assets/buzz.wav');
        this.load.audio('sfx_splat', './assets/bugsplat-sound.wav');
        this.load.audio('sfx_frog', './assets/frog-ribbet1.wav');
        this.load.image('menu_bg', './assets/pond_bg.png'); //https://wallpapersden.com/galaxies-pixel-art-wallpaper/640x480/
    }

    create() {
        // menu text configuration
        let menuConfig = {
            fontFamily: 'Brush',
            fontSize: '28px',
            backgroundColor: '#0a3816',
            color: '#217ec4',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        this.add.image(0,0, "menu_bg").setOrigin(0);
        // show menu text
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'POND PATROL', menuConfig).setOrigin(0.5);
        this.add.text()
        this.add.text(game.config.width/2, game.config.height/1.5, 'Use ←→ arrows to move & (F) to fire', menuConfig).setOrigin(0.5);
        // menuConfig.backgroundColor = '#070F83';
        menuConfig.fontSize = '24px'
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Press ← for Novice or → for Expert', menuConfig).setOrigin(0.5);
        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
      }
      update() {
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
          // easy mode
          game.settings = {
            spaceshipSpeed: 3,
            gameTimer: 60000    
          }
          this.sound.play('sfx_select');
          this.scene.start('playScene');    
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
          // hard mode
          game.settings = {
            spaceshipSpeed: 4,
            gameTimer: 45000    
          }
          this.sound.play('sfx_select');
          this.scene.start('playScene');    
        }
      }
}