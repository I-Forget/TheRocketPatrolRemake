//console.log('accessing Play.js');
// figured out how to get play scene to show up was missing transition from menu to play scene.
class Play extends Phaser.Scene {

    constructor() {
        super("playScene");
        //console.log('is the play scene being created');
    }

    preload() {
        this.load.image('rocket', 'assets/rocket.png');
        this.load.image('spaceship', 'assets/spaceship.png');
        this.load.image('starfield', 'assets/starfield.png'); 
    }

    create() {
        //this.add.text(20,20, "Start playing now!!!"); it's not showing for me :/
        //star field stuff.
        this.starfield = this.add.tileSprite(0,0,640,480, 'starfield').setOrigin(0,0);
        
        this.p1Rocket = new Rocket(this, 
            game.config.width/2, 
            game.config.height - borderUISize - borderPadding, 'rocket').setOrigin(0.5, 0); //was missing the origin in order for it to show up.Smith didn't have it but it showed up?? 

        this.ship1 = new Ship(
            this,
            100,
            200,
            'spaceship' 
        );

        this.ship2 = new Ship(
            this,
            300,
            240,
            'spaceship' 
        );

        this.ship3 = new Ship(
            this,
            380,
            300,
            'spaceship' 
        );
        
            // Green rectangle thing
        this.add.rectangle(
            0, 
            borderUISize + borderPadding,
            game.config.width,
            borderUISize * 2,
            0x00FF00,
            ).setOrigin(0,0);

        //white borders when they appear lol
        this.add.rectangle(0, 0, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0 ,0);
        this.add.rectangle(0, game.config.height - borderUISize, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0 ,0);
        this.add.rectangle(0, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0 ,0);
        this.add.rectangle(game.config.width - borderUISize, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0 ,0);
    
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
      
    }

    update() {
        this.starfield.tilePositionX -= 4;
    
        this.p1Rocket.update();
        this.ship1.update();
        this.ship2.update();
        this.ship3.update();
    }
}