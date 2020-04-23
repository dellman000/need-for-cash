export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' });
  }

  preload() {
    
    this.load.image("garage","src/assets/car_garage_background_draft.png");
    this.load.image("pully","src/assets/car_garage_background_pully.png");
    this.load.image("store_screen","src/assets/folders_small.png");
    this.load.image("turn","src/assets/nextturnbutton.png");
    this.load.image("profit","src/assets/profit_folders.png");
  }

  create() {
    this.scene.start('Car_Garage');
  }
}
