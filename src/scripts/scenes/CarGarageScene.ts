import ExampleObject from '../objects/exampleObject';
import LoanObject from '../objects/loanObject';
//import * as UiTools from '../scenes/phaser-ui-tools.js';

export default class Car_Garage_Scene extends Phaser.Scene {
  
  garage: Phaser.GameObjects.Image;
  pully: Phaser.GameObjects.Image;
  turn_button: any;
  store_tab: Phaser.GameObjects.Rectangle;
  profit_tab: Phaser.GameObjects.Rectangle;
  
  
  
  
  

  constructor() {
    super({ key: 'Car_Garage' });
  }
  enterStore(){
    this.scene.bringToTop('Store');
  }
  enterProfitTab(){
    this.scene.bringToTop('ProfitScene');
  }

  create() {
    this.garage=this.add.image(0,0,'garage');
    this.garage.setOrigin(0,0);

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

    this.store_tab.on('pointerdown',()=> {this.enterStore();});


    let testbutton= new LoanObject(this,500,500);
  this.testlist(300,300);
    
  }

  testlist(x:number,y:number){
    var i =0;
    while (i<10){

        let testbutton= new LoanObject(this,x,y);
        y+=100;
        i++;
    }
  }


  


  update() {  
   // this.testlist(300,300);
  }
}
