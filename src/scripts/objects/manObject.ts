import PreloadScene from "../scenes/preloadScene";
export default class ManObject extends Phaser.GameObjects.Sprite {

    constructor(scene: Phaser.Scene, x: number, y: number) {
        
        super(scene, x, y, 'guy');
        
       // scene.add.image(x,y,'guy');
        scene.add.existing(this);
       // scene.add.rectangle(x,y,50,50,0xff0000);
         
       
    }

}