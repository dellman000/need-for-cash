export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' });
  }

  preload() {
    

  }

  create() {
    this.scene.start('Scene_Mode_Select');
  }
}
