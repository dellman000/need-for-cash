export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' });
  }

  preload() {
    
    this.load.image("garage","assets/car_garage_background_draft.png");
    this.load.image("pully","assets/car_garage_background_pully.png");
    this.load.image("store_screen","assets/folders_small.png");
    this.load.image("turn","assets/nextturnbutton.png");
    this.load.image("profit","assets/profit_folders.png");
    this.load.image("loan","src/assets/loan.png")
  }

  create() {
    this.scene.start('Car_Garage');
  }
}
