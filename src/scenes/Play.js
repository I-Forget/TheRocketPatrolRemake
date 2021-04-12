//console.log('accessing Play.js');
class Play extends Phaser.Scene {

    constructor() {
        super("playScene");
        //console.log('is the play scene being created');
    }

    create() {
        //this.add.text(20,20, "Start playing now!!!"); it's not showing for me :/

        this.add.rectangle(
            0, 
            borderUISize + borderPadding,
            game.config.width,
            borderUISize * 2,
            0x00FF00,
            );
    }
}