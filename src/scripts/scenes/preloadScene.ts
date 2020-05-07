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
    this.load.image("loan","assets/loan_button.png");
    //this.loading.text="DING!!!";
    this.load.image('car_1',"assets/car_1_small.png");
    this.load.image('money_bar','assets/money_window.png');
    this.load.image('Loan_Sponsor',"assets/Terms_Conditions_tab.png");

    this.load.image('race_track',"assets/racetrack.png");
    this.load.image('race_track_button',"assets/racetrackbutton.png");
    this.load.image('race_button',"assets/race_button.png");

    this.load.image('Car',"assets/car.png");
    this.load.image('pc_car',"assets/pc_car.png");
    this.load.image('garage_button',"assets/garagebutton.png");

    this.load.image('engine1',"assets/engine1.png");
    this.load.image('engine2',"assets/engine2.png");
    this.load.image('engine3',"assets/engine3.png");
    this.load.image('engine4',"assets/engine4.png");

    this.load.image('tire1',"assets/tire1.png");
    this.load.image('tire2',"assets/tire2.png");
    this.load.image('tire3',"assets/tire3.png");
    this.load.image('tire4',"assets/tire4.png");

    this.load.image('turbo1',"assets/turbo1.png");
    this.load.image('turbo2',"assets/turbo2.png");
    this.load.image('turbo3',"assets/turbo3.png");
    this.load.image('turbo4',"assets/turbo4.png");

    this.load.image('body1',"assets/body1.png");
    this.load.image('body2',"assets/body2.png");
    this.load.image('body3',"assets/body3.png");
    this.load.image('body4',"assets/body4.png");
  }

  create() {
    //this.loading=this.add.text(50,100,"this is loading...",{font:'22px Arial',fill:'black'});
    this.scene.start('Car_Garage',{income_start:1000 ,sendLoan:0});
  }
}
