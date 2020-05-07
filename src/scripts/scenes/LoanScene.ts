import LoanObject from "../objects/loanObject";
import LoanObjectUI from "../objects/LoanObject_UI";

export default class LoanScene extends Phaser.Scene {
  BOX: Phaser.GameObjects.Rectangle;
    addmoney: Phaser.GameObjects.Rectangle;

loanMoney:number;
    tex: Phaser.GameObjects.Text;
    income_sent:number
    addloanmoney:number;
  Loan_Sponsor_UI: Phaser.GameObjects.Image;
  loanArray: never[];
  lastUIindex:number;
  x: any;
  UIgroup: Phaser.GameObjects.Group;
 UIArray:never[];
 run_interest:boolean;
  take_loan_box: Phaser.GameObjects.Rectangle;
  comfirm: Phaser.GameObjects.Rectangle;
  comfirm_deal: Phaser.GameObjects.Rectangle;
  cancel_deal: Phaser.GameObjects.Rectangle;
  comfirm_deal_text: Phaser.GameObjects.Text;
 
  //loanArray: any;

  constructor() {
    super({ key: 'loans_test' });
  }
  

init(data){
this.income_sent=data.income_send;
this.run_interest=data.calculate;
}



  create() {
    this.run_interest=false;
    this.lastUIindex= -1;
  //this.BOX=this.add.rectangle(0,0,1920,1080,0xffffff);
  //this.BOX.setOrigin(0,0);
  this.Loan_Sponsor_UI=this.add.image(90,100,'Loan_Sponsor');
  this.Loan_Sponsor_UI.setOrigin(0,0);
  this.Loan_Sponsor_UI.setInteractive();
  
  this.loanArray=LoanObject[10]=[];
 // this.UIArray=LoanObjectUI[3]=[];
 this.UIgroup=this.add.group();
  this.Add_Loans_To_Array(this.loanArray);
  this.PrintArray(this.loanArray);
  this.CreateUILoanList(this.loanArray);

 this.take_loan_box=this.add.rectangle(300,900,100,100,0x00ffff);
 this.take_loan_box.setInteractive();
 this.take_loan_box.on('pointerdown',()=>{this.confirmLoanTake()});


 this.comfirm=this.add.rectangle(1000,500,500,500,0xf0f0f0);
 this.comfirm.setVisible(false);
 this.comfirm_deal_text=this.add.text(this.comfirm.x-100,this.comfirm.y-130,'',{font:'60px Arial',fill:'black'}).setVisible(false);
 this.comfirm_deal=this.add.rectangle(this.comfirm.x-20,this.comfirm.y,30,30,0x00ff00).setVisible(false);
 this.cancel_deal=this.add.rectangle(this.comfirm.x+20,this.comfirm.y,30,30,0xff0000).setVisible(false);




  //this.addmoney=this.add.rectangle(500,600,100,100,0xff0000);
  //this.addmoney.setInteractive();
  this.addloanmoney=0;
  //this.addmoney.on('pointerdown',()=> {this.addloan()});
  //this.registry.events.on('changedata',this.moneytoscene,this);
 // this.tex=this.add.text(100,100,this.income_sent.toString(), { font: '100px Arial', fill: '#000000' });
 this.events.on('resume',(sys,data)=>{this.calculate_interest(data,this.loanArray)});
  }

 
  
Add_Loans_To_Array(Array_list:LoanObject[]){

  for(var i=1;i<9;i++){
      Array_list[i]=new LoanObject(1000+i,2,10,30);
      Array_list[i].taken=true;
  }
}

CreateUILoanList(arr:LoanObject[]){
  for(var i=1;i<5;i++){
    let x=new LoanObjectUI(this,1408,130+(i*175),arr[i],i);
    x.on('pointerdown',()=>{this.showtext(x)});
    this.UIgroup.add(x);
    x.tex.setVisible(false);

   

}
}
showtext(x:LoanObjectUI){
this.lastUIindex=x.index;
console.log("hi");
console.log(x.index);
let y =this.UIgroup.getChildren()as LoanObjectUI[];

for(var i=0;i<y.length;i++){
  y[i].tex.setVisible(false);
}
x.tex.setVisible(true);



}



PrintArray(Array_list:LoanObject[]){
  for(var i=0;i<4;i++){
    console.log(Array_list[i]);
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
 confirmLoanTake(){
this.comfirm.setVisible(true);
this.comfirm_deal.setVisible(true);
this.cancel_deal.setVisible(true);
this.comfirm_deal.setInteractive();
this.cancel_deal.setInteractive();
if(this.lastUIindex != (-1)){
let x= this.loanArray[this.lastUIindex] as LoanObject;
console.log(x.worth);

this.comfirm_deal_text.text="this loan is worth $"+x.worth +"with a " +
x.interest +"% interest.\n Are you sure you want to take this loan?";
this.comfirm_deal_text.setVisible(true);
}
this.comfirm_deal.on('pointerdown',()=>{
  console.log('comfirm'); 
  this.ComformationBoxLeave();
});
this.cancel_deal.on('pointerdown',()=>{
console.log('cancel');
this.ComformationBoxLeave();
});
 }
 
 ComformationBoxLeave(){
  this.comfirm_deal_text.setVisible(false);
  this.comfirm_deal.setVisible(false);
  this.cancel_deal.setVisible(false);
  this.comfirm.setVisible(false);
 }

 calculate_interest(data,Array_list:LoanObject[]){
  //console.log(data.calculate);
 // this.run_interest=true;
  if(data.calculate==true){

    // console.log("running interest");
    for(var i=1;i<Array_list.length;i++){
     // console.log("running interest");
     
     // console.log(Array_list[i].worth);
      if(Array_list[i].taken==true){
        Array_list[i].worth+=((Array_list[i].interest*.01)*Array_list[i].worth);
        this.addloanmoney+=((Array_list[i].interest*.01)*Array_list[i].worth) ;
        console.log(Array_list[i].worth);
      }
    }
   }
   console.log(this.addloanmoney)
   this.scene.pause('Car_Garage');
   this.scene.resume('Car_Garage',{sendLoan:this.addloanmoney,calculate:true});
   data.calculate=false;
   this.addloanmoney=0;
 }


  update() {  
   
  }
}