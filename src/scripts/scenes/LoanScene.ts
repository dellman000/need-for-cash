
export default class LoanScene extends Phaser.Scene {
  BOX: Phaser.GameObjects.Rectangle;
    addmoney: Phaser.GameObjects.Rectangle;

loanMoney:number;
    tex: Phaser.GameObjects.Text;
    income_sent:number
    addloanmoney:number;

  constructor() {
    super({ key: 'loans_test' });
  }
  

init(data){
this.income_sent=data.income_send;
}



  create() {
    
  this.BOX=this.add.rectangle(0,0,1920,1080,0xffffff);
  this.BOX.setOrigin(0,0);
  this.addmoney=this.add.rectangle(500,600,100,100,0xff0000);
  this.addmoney.setInteractive();
  this.addloanmoney=1000;
  this.addmoney.on('pointerdown',()=> {this.addloan()});

  


  //this.registry.events.on('changedata',this.moneytoscene,this);
  this.tex=this.add.text(100,100,this.income_sent.toString(), { font: '32px Arial', fill: '#000000' })
  }
  

addloan(){
    
 
  
  
  
  this.scene.pause('Car_Garage');
    this.scene.resume('Car_Garage',{sendL:this.addloanmoney});
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
