import ExampleObject from '../objects/exampleObject';
import LoanObject from '../objects/loanObject';
//import * as UiTools from '../scenes/phaser-ui-tools.js';

export default class Car_Garage_Scene extends Phaser.Scene {
  
  garage: Phaser.GameObjects.Image;
  pully: Phaser.GameObjects.Image;
  turn_button: any;
  store_tab: Phaser.GameObjects.Rectangle;
  profit_tab: Phaser.GameObjects.Rectangle;
  car: any;
  money_box: Phaser.GameObjects.Image;
  money:any;
  money_view: Phaser.GameObjects.Text;
  turn_number:number;
  

  
  
  

  constructor() {
    super({ key: 'Car_Garage' });
  }
  enterStore(){
    this.scene.bringToTop('Store');
  }
  enterProfitTab(){
  
    this.scene.bringToTop('ProfitScene');
  }
  enterBack(){
    this.scene.bringToTop('Car_Garage');
  }

  
  create() {
    this.money=1000;
    this.registry.set("cash",this.money);
   
    this.garage=this.add.image(0,0,'garage');
    this.garage.setOrigin(0,0);
    this.garage.setInteractive();

    this.car=this.add.image(400,50,'car_1');
    this.car.setOrigin(0,0);
    
    this.money_box=this.add.image(1420,800,'money_bar');
    this.money_box.setOrigin(0,0);
    this.money_view=this.add.text(1550,800,("CASH\n\n\n"+this.money.toString()),{font:'30px Arial',fill:'black'});
    //this.money_view=this.add.text(1550,800,("CASH\n\n\n"+this.data.get('this_cash').toString()),{font:'30px Arial',fill:'black'});
    this.money_view.setOrigin(0,0);
    
  

  


    this.pully=this.add.image(0,0,'pully');
    this.pully.setOrigin(0,0);

    
    this.turn_button=this.add.image(700,0,'turn');
    this.turn_button.setOrigin(0,0);

    

    this.store_tab=this.add.rectangle(0,100,50,100,0xCFA82F);
    this.store_tab.setInteractive();

    this.profit_tab=this.add.rectangle(1870,500,50,100,0x2BB412);
    this.profit_tab.setInteractive();
    
    this.scene.launch('ProfitScene');
    this.scene.launch('Store');
    this.scene.bringToTop('Car_Garage');

    
    

    
    this.profit_tab.on('pointerdown',()=> {this.enterProfitTab();});

    this.store_tab.on('pointerdown',()=> {this.enterStore();   });

    this.garage.on('pointerdown',()=> {this.enterBack();   });



  
    
  }

 


  


  update() {  
   // this.testlist(300,300);
  }
}
