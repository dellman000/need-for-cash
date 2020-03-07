import { Textures, Scene } from "phaser";

export default class PreloadScene extends Phaser.Scene {
 


  constructor() {
    super({ key: 'PreloadScene' });
  }

  preload() {
    this.add.text(50,100,"Loading...",{font:'50px Arial',fill:'black'});
      this.load.image('mothership',"assets/mothership.png");
      this.load.image('background',"assets/space2.png");
      this.load.image("guy2","assets/little_man.png");
      //this.load.image("guy3","assets/little_man.png");
      this.load.image("player","assets/player.png");
      this.load.image("stars","assets/stars.png");
  }

  create() {
    this.scene.start('TitleScene');
    
    
    
  }
}
