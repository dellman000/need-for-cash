import { Textures, Scene } from "phaser";

export default class PreloadScene extends Phaser.Scene {
 


  constructor() {
    super({ key: 'PreloadScene' });
  }

  preload() {
      this.load.image('guy',"assets/little_man.png");
      this.load.image("guy2","assets/little_man.png");
      this.load.image("guy3","assets/little_man.png");
      this.load.image("player","assets/player.png");
  }

  create() {
    this.scene.start('MainScene');
    
    
    
  }
}
