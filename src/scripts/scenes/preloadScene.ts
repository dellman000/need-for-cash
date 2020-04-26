export default class PreloadScene extends Phaser.Scene {
  loading: Phaser.GameObjects.Text;
  constructor() {
    super({ key: 'PreloadScene' });
  }


  
  
  preload() {
    this.loading=this.add.text(50,100,"this is loading...",{font:'100px Arial',fill:'black'});
    this.load.image("garage","assets/car_garage_background_draft.png");
    this.load.image("pully","assets/car_garage_background_pully.png");
   // this.loading.text="loading at 50%";
    this.load.image("store_screen","assets/folders_small.png");
    this.load.image("turn","assets/nextturnbutton.png");
    //this.loading.text="loading 75%";
    this.load.image("profit","assets/profit_folders_small.png");
    this.load.image("loan","assets/loan.png");
    //this.loading.text="DING!!!";
    this.load.image('car_1',"assets/car_1_small.png");
    this.load.image('money_bar','assets/money_window.png');
  }

  create() {
    //this.loading=this.add.text(50,100,"this is loading...",{font:'22px Arial',fill:'black'});
    this.scene.start('Car_Garage');
  }
}
