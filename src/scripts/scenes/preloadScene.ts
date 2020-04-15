export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' });
  }

  preload() {
    
    this.load.image("garage","src/assets/car_garage_background_draft.png");
    this.load.image("pully","src/assets/car_garage_background_pully.png");
  }

  create() {
    this.scene.start('Car_Garage');
  }
}
