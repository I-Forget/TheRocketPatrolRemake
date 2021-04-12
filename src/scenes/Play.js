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
            game.config.width + borderUISize*6,
            borderUISize*4,
            'spaceship',
            0,
            30  
        ).setOrigin(0,0);

        this.ship2 = new Ship(
            this,
            game.config.width + borderUISize*3,
            borderUISize*5 + borderPadding*2,
            'spaceship',
            0,
            20 
        ).setOrigin(0,0);

        this.ship3 = new Ship(
            this,
            game.config.width,
            borderUISize*6 + borderPadding*4,
            'spaceship',
            0,
            10 
        ).setOrigin(0,0);
        
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
        this.checkCollision(this.p1Rocket, this.ship1);
        this.checkCollision(this.p1Rocket, this.ship2);
        this.checkCollision(this.p1Rocket, this.ship3);
    }

    checkCollision(rocket, ship){
        if( rocket.x + rocket.width > ship.x &&
            rocket.x < ship.x + ship.width &&
            rocket.y + rocket.height > ship.y &&
            rocket.y < ship.y + ship.height){
                ship.alpha = 0;
                rocket.reset();
                ship.reset();
        }
    }
}