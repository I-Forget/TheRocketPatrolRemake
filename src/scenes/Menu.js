//console.log('accessing menu.js'); finally got it to show needed to add config into the phaser thing
class Menu extends Phaser.Scene {
    
    constructor() {
        super("menuScene");
        //console.log('menu scene cuper called');
    }

    create() {
        //console.log('accessing create');
        this.add.text(20,20, "Rocket Patrol Menu");
        this.scene.start("playScene");
    }
}