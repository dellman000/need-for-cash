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
    this.load.image('loan_Sponsor_button',"assets/Terms_Conditions_tab_button.png");

    this.load.image('Cap1_logo',"assets/Logos/Capital_One_final.png");
    this.load.image('Chase_logo',"assets/Logos/chase-logo_final.png");
    this.load.image('PNC_logo',"assets/Logos/PNC_button_final.png");
    this.load.image('wells_logo',"assets/Logos/wells fargo-logo_final.png");

    this.load.image('Next_Turn',"assets/Next Turn Screen.png");

    this.load.image('Inventory_Tab',"assets/inventory Screen/Inventory_manager_Screen.png")


    this.load.image('race_track',"assets/racetrack.png");
    this.load.image('race_track_button',"assets/racetrackbutton.png");
    this.load.image('race_button',"assets/race_button.png");

    this.load.image('Car',"assets/car.png");
    this.load.image('pc_car',"assets/pc_car.png");
    this.load.image('garage_button',"assets/garagebutton.png");


    for(let i=1;i<=4;i++){
      this.load.image('Engine_Mk'+String(i),"assets/engine"+String(i)+".png");
      this.load.image('Tire_Mk'+String(i),"assets/tire"+String(i)+".png");
      this.load.image('Body_Mk'+String(i),"assets/body"+String(i)+".png");
      this.load.image('Turbo_Mk'+String(i),"assets/turbo"+String(i)+".png");
    }
    this.load.image('inventory_button',"assets/inventory Screen/inventorybutton_new.png");


    for(let i=1;i<=4;i++){
      this.load.image('body'+String(i),"assets/Car_levels/car_level"+String(i)+".png" );
    }


    this.load.image('Item_frame','assets/inventory Screen/Itemframe.png');
    this.load.image('green_button',"assets/inventory Screen/green_button.png");
    this.load.image('red_button',"assets/inventory Screen/red_button.png");
    this.load.image('Item_info',"assets/inventory Screen/info_panel.png");
    this.load.image('EquipItem',"assets/inventory Screen/EquipItem.png");

    /*
    this.load.image('Engine_Mk1',"assets/engine1.png");
    this.load.image('engine2',"assets/engine2.png");
    this.load.image('engine3',"assets/engine3.png");
    this.load.image('engine4',"assets/engine4.png");

    this.load.image('Tire_Mk1',"assets/tire1.png");
    this.load.image('tire2',"assets/tire2.png");
    this.load.image('tire3',"assets/tire3.png");
    this.load.image('tire4',"assets/tire4.png");

    this.load.image('Turbo_Mk1',"assets/turbo1.png");
    this.load.image('turbo2',"assets/turbo2.png");
    this.load.image('turbo3',"assets/turbo3.png");
    this.load.image('turbo4',"assets/turbo4.png");

    this.load.image('Body_Mk1',"assets/body1.png");
    this.load.image('body2',"assets/body2.png");
    this.load.image('body3',"assets/body3.png");
    this.load.image('body4',"assets/body4.png");*/
  }

  create() {
    //this.loading=this.add.text(50,100,"this is loading...",{font:'22px Arial',fill:'black'});
    this.scene.start('Car_Garage',{income_start:1000 ,sendLoan:0});
  }
}
