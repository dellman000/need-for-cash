import ExampleObject from '../objects/exampleObject';
import LoanObject from '../objects/loanObject';
import FinanceObject from '../objects/financeObject';
import StoreObject from '../objects/storeObject';
//import * as UiTools from '../scenes/phaser-ui-tools.js';

export default class Car_Garage_Scene extends Phaser.Scene {
  
  garage: Phaser.GameObjects.Image;
  pully: Phaser.GameObjects.Image;
  turn_button: any;
  //store_tab: Phaser.GameObjects.Rectangle;
  profit_tab: Phaser.GameObjects.Rectangle;
  car: any;
  money_box: Phaser.GameObjects.Image;
  money:any;
  money_view: Phaser.GameObjects.Text;
  turn_number:number;
  finance_tab: FinanceObject;
  expense: number;
  income: number;
  credit_score: number;
  store_tab: any;
  income_send: any;
  
  

  
  
  

  constructor() {
    super({ key: 'Car_Garage' });
  }
  

init(data){
this.income_send=this.income;
}


  create() {
    this.income=0;
    this.money=1000;
    this.expense=100;
    this.credit_score=300;
    this.turn_number=1;


    this.registry.set('money',this.income);
  
    this.garage=this.add.image(0,0,'garage');
    this.garage.setOrigin(0,0);
    this.garage.setInteractive();

    this.car=this.add.image(400,50,'car_1');
    this.car.setOrigin(0,0);


    
    
    this.money_box=this.add.image(1420,800,'money_bar');
    this.money_box.setOrigin(0,0);
    this.money_view=this.add.text(1550,800,("CASH\n\n\n"+this.money.toString()),{font:'30px Arial',fill:'black'});
   
    this.money_view.setOrigin(0,0);
    
  

  


    this.pully=this.add.image(0,0,'pully');
    this.pully.setOrigin(0,0);

    
    this.turn_button=this.add.image(700,0,'turn');
    this.turn_button.setInteractive();
    this.turn_button.setOrigin(0,0);

    
    this.finance_tab= new FinanceObject(this,1860,0,this.income,this.expense,this.credit_score);
    this.store_tab=new  StoreObject(this,-965,100);

    
   /* this.profit_tab=this.add.rectangle(1870,500,50,100 ,0x2BB412);
    this.profit_tab.setInteractive();*/
    
    
    this.scene.bringToTop('Car_Garage');   
    this.turn_button.on('pointerdown',()=> {this.takemoney();   });
   // this.garage.on('pointerdown',()=> {this.enterBack();});

   this.garage.on('pointerdown',()=> {this.tempLaunch()});
  }
 
  tempLaunch(){
    this.scene.launch('loans_test',{income_send:this.income_send});
    this.scene.bringToTop('loans_test');
  }
 
  enterBack(){
   this.finance_tab.tab.setDepth(0);
   this.store_tab.table_store.setDepth(0);
    while(this.finance_tab.x<1860){
      this.finance_tab.tab.incX(5);
    }
    if (this.store_tab.x>-965){
      this.store_tab.table_store.incX(-1050);
    }

  
  
  }

  takemoney(){
    this.money-=this.expense;
    this.turn_number++;
    this.money_view.text="CASH\n\n\n"+this.money.toString();
  }
  
 
  /*testlist(x:number,y:number){
    var i =0;
    while (i<2){

      let finance_tab= new FinanceObject(this,x,y);
        y+=100;
        i++;
        
    }
  }*/


  


  update() {  
   // this.testlist(300,300);
  }
}
