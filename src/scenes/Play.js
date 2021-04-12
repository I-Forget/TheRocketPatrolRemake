//console.log('accessing Play.js');
// figured out how to get play scene to show up was missing transition from menu to play scene.
class Play extends Phaser.Scene {

    constructor() {
        super("playScene");
        //console.log('is the play scene being created');
    }

    preload() {
        this.load.image('rocket', './assets/rocket.png');
        this.load.image('spaceship', './assets/rocket.png');
        this.load.image('starfield', './assets/starfield.png'); 
    }

    create() {
        //this.add.text(20,20, "Start playing now!!!"); it's not showing for me :/
        //star field stuff.
        this.starfield = this.add.tileSprite(0,0,640,480, 'starfield').setOrigin(0,0);
        
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
    }

    update() {
        this.starfield.tilePositionX -= 4;
    }
}