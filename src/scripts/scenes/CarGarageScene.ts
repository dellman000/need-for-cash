import ExampleObject from '../objects/exampleObject';
import LoanObject from '../objects/loanObject';
import FinanceObject from '../objects/financeObject';
import StoreObject from '../objects/storeObject';
import NewTurnScreen from '../objects/newTurnObjectScreen';
import InventoryObject from '../objects/Inventory/InventoryObject';
import CarObject from '../objects/carObject';
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
  store_tab: StoreObject;
  
  
  
loanmoney:number;
  loan_view: Phaser.GameObjects.Text;
  money_loan: Phaser.GameObjects.Text;
  garage_button: Phaser.GameObjects.Image;
  race_button: Phaser.GameObjects.Image;
  race_track_button: any;
  count: any;
  Loan_Sponsorbutton: Phaser.GameObjects.Image;
  Turn_info: NewTurnScreen;
  inventory: InventoryObject;
  UserCar: CarObject;
  inventory_button: Phaser.GameObjects.Image;

  
  

  constructor() {
    super({ key: 'Car_Garage' });



  }
  
init(data){
this.loanmoney=data.sendLoan;
this.money=data.income_start+this.loanmoney;
//this.data=data;
//this.count = data.turn;
}



  create() {


  //  console.log(this.loanmoney);

    this.income=1111;
   // this.money=1001;//this.loanmoney;
    this.expense=100;
    this.credit_score=300;
    this.turn_number=1;
    this.count = 0;


  //  this.registry.set('money',this.income);
  
    this.garage=this.add.image(0,0,'garage');
    this.garage.setOrigin(0,0);
    this.garage.setInteractive();

    this.car=this.add.image(400,50,'car_1');
    this.car.setOrigin(0,0);


    
    
    this.money_box=this.add.image(1420,800,'money_bar');
    this.money_box.setOrigin(0,0);
    this.money_view=this.add.text(1550,800,("CASH\n\n\n"+this.money.toString()),{font:'30px Arial',fill:'black'});
    this.money_loan=this.add.text(1550,600,("LOAN\n\n\n"+this.loanmoney.toString()),{font:'30px Arial',fill:'black'});
   
   
    this.money_view.setOrigin(0,0);
    
  
  this.inventory_button=this.add.image(300,900,'inventory_button').setDepth(2);
  this.inventory_button.setInteractive();
  this.inventory_button.on('pointerdown',()=>{this.inventory.movefront() }  )
  


    this.pully=this.add.image(0,0,'pully');
    this.pully.setOrigin(0,0);

    
    this.turn_button=this.add.image(700,0,'turn');
    this.turn_button.setInteractive();
    this.turn_button.setOrigin(0,0);

    this.race_track_button=this.add.image(1590,0,'race_track_button');
    this.race_track_button.setOrigin(0,0);
    this.race_track_button.setInteractive();
    this.race_track_button.on('pointerdown', () => {this.count ++; this.scene.launch('RaceTrack', {speed:this.store_tab.car_speed, turn:this.count})
    this.scene.bringToTop('RaceTrack')});

    
    this.finance_tab= new FinanceObject(this,1960,0,this.income,this.expense,this.credit_score);
    this.store_tab=new  StoreObject(this,-965,100);
    this.Turn_info=new NewTurnScreen(this,1000,-500,this.money,this.income,this.expense,this.loanmoney,this.credit_score);
    this.inventory=new InventoryObject(this,-600,500);
    
    this.UserCar=new CarObject(this,400,50,this.inventory.ReturnEngine(),this.inventory.ReturnBody(),this.inventory.ReturnTire(),this.inventory.ReturnTurbo());
    //this.add.image(500,500,'Next_Turn');
    
   /* this.profit_tab=this.add.rectangle(1870,500,50,100 ,0x2BB412);
    this.profit_tab.setInteractive();*/
   // this.scene.launch('loans_test');
    
     
    this.Loan_Sponsorbutton=this.add.image(1850,50,'loan_Sponsor_button').setDepth(2);
    this.Loan_Sponsorbutton.setOrigin(0,0);
    this.Loan_Sponsorbutton.setInteractive();

    this.scene.launch('loans_test',{income_send:this.income});
    
    this.scene.bringToTop('Car_Garage'); 


    this.turn_button.on('pointerdown',()=> {this.takemoney(); this.count ++ });
    this.garage.on('pointerdown',()=> {this.enterBack();});

   this.Loan_Sponsorbutton.on('pointerdown',()=> {this.tempLaunch()});

   //this.garage.on('resume',()=>{this.resume(this.data)})
   this.events.on('resume',(sys,data)=>{this.resume(data)});



  }
 



  resume(data){
    
   // console.log(data.calculate);
    if(data.calculate==true){
      console.log(555);
      this.loanmoney+=data.sendLoan;
      this.money_loan.text="LOAN\n\n\n"+this.loanmoney.toString();
    }
    else{
      this.loanmoney+=data.sendLoan;
      // console.log(data.sendLoan);
      // console.log(this.loanmoney);
       this.money+=data.sendLoan;
   
       this.money_loan.text="LOAN\n\n\n"+this.loanmoney.toString();
       this.money_view.text="CASH\n\n\n"+this.money.toString();
      // this.money=data.income_start+this.loanmoney;
  }
   
    
  }
 
  tempLaunch(){
    this.scene.bringToTop('loans_test');
    this.scene.pause('loans_test',{income_send:this.income,calculate:false});
    this.scene.resume('loans_test',{income_send:this.income,calculate:false});
    //this.scene.launch('loans_test',{income_send:this.income});

    
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
    this.scene.bringToTop('Car_Garage'); 
    this.UserCar.engine=this.inventory.ReturnEngine();
    this.UserCar.Tire=this.inventory.ReturnTire();
    this.UserCar.Turbo=this.inventory.ReturnTurbo();
    this.UserCar.Body=this.inventory.ReturnBody();
    this.UserCar.updateBody();  
    this.inventory.moveBack();
  }

  

  takemoney(){
    this.money+=this.income-this.expense;
    this.turn_number++;
    this.money_view.text="CASH\n\n\n"+this.money.toString();
    this.Turn_info.cash=this.money;
    this.Turn_info.credit_score=this.credit_score;
    this.Turn_info.expenses=this.expense;
    this.Turn_info.loan=this.loanmoney;
    this.Turn_info.move_down=true;
    this.Turn_info.update_image();
    //this.Turn_info.move_up=false;
    this.scene.pause('loans_test');
    this.scene.resume('loans_test',{calculate:true});

    
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
