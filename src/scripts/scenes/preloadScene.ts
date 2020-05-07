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
    this.load.image('profit_button',"assets/profit_folderbutton.png");
    this.load.image("loan","assets/loan_button.png");
    //this.loading.text="DING!!!";
    this.load.image('car_1',"assets/car_1_small.png");
    this.load.image('money_bar','assets/money_window.png');
    this.load.image('Loan_Sponsor',"assets/Terms_Conditions_tab.png");
    this.load.image('loan_Sponsor_button','assets/Terms_Conditions_tab_button.png');
  }

  create() {
    //this.loading=this.add.text(50,100,"this is loading...",{font:'22px Arial',fill:'black'});
    this.scene.start('Car_Garage',{income_start:1000 ,sendLoan:0});
  }
}
