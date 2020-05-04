import LoanObject from "../objects/loanObject";

export default class LoanScene extends Phaser.Scene {
  BOX: Phaser.GameObjects.Rectangle;
    addmoney: Phaser.GameObjects.Rectangle;

loanMoney:number;
    tex: Phaser.GameObjects.Text;
    income_sent:number
    addloanmoney:number;
  Loan_Sponsor_UI: Phaser.GameObjects.Image;
  loanArray: any;

  constructor() {
    super({ key: 'loans_test' });
  }
  

init(data){
this.income_sent=data.income_send;

}



  create() {
    
  //this.BOX=this.add.rectangle(0,0,1920,1080,0xffffff);
  //this.BOX.setOrigin(0,0);
  this.Loan_Sponsor_UI=this.add.image(90,100,'Loan_Sponsor');
  this.Loan_Sponsor_UI.setOrigin(0,0);
  
  
  
  let loanArray:Array<LoanObject>;

  this.Add_Loans_To_Array(this.loanArray);





  this.addmoney=this.add.rectangle(500,600,100,100,0xff0000);
  this.addmoney.setInteractive();
  this.addloanmoney=1000;
  this.addmoney.on('pointerdown',()=> {this.addloan()});

  


  //this.registry.events.on('changedata',this.moneytoscene,this);
  this.tex=this.add.text(100,100,this.income_sent.toString(), { font: '32px Arial', fill: '#000000' })
  }
  
Add_Loans_To_Array(Array_list:LoanObject[]){

  for(var i=0;i<4;i++){
       new LoanObject(this,1400,(300+(i*200)),1000,2,10,50);
  }
}
PrintArray(Array_list:LoanObject[]){
  for(var i=0;i<4;i++){

  }
}



addloan(){
    
 
  
  
  
  this.scene.pause('Car_Garage');
    this.scene.resume('Car_Garage',{sendLoan:this.addloanmoney});
    this.scene.bringToTop('Car_Garage');
    
}
  
 /* moneytoscene(key,data){
    if(key=='money'){
        this.tex.setText('money '+ data);
    }


  }*/
 
 


  update() {  
    
  }
}
