
export default class LoanScene extends Phaser.Scene {
  BOX: Phaser.GameObjects.Rectangle;
    addmoney: Phaser.GameObjects.Rectangle;

loanMoney:number;
    tex: Phaser.GameObjects.Text;
    income_send:number
    

  constructor() {
    super({ key: 'loans_test' });
  }
  

init(data){
this.income_send=data;
}



  create() {
  this.BOX=this.add.rectangle(0,0,1920,1080,0xffffff);
  this.BOX.setOrigin(0,0);
  this.addmoney=this.add.rectangle(500,600,100,100,0xff0000);
  this.addmoney.setInteractive();
  this.addmoney.on('pointerdown',()=> {this.addloan()});
 
  this.loanMoney=0;
  this.registry.events.on('changedata',this.moneytoscene,this);
  this.tex=this.add.text(100,100,this.income_send.toString(), { font: '32px Arial', fill: '#000000' })
  }


addloan(){
    this.registry.get('money');
}
  
  moneytoscene(key,data){
    if(key=='money'){
        this.tex.setText('money '+ data);
    }


  }
 
 


  update() {  
  
  }
}
