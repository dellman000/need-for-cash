import LoanObject from "../objects/loanObject";

export default class Profit_Scene extends Phaser.Scene {
    shop: Phaser.GameObjects.Image;
  some: Phaser.GameObjects.Group;
  
  money_view: Phaser.GameObjects.Text;
  income_money: any;
 
    
  
    constructor() {
      super({ key: 'ProfitScene' });
    }
  

 
    create() {
      this.income_money=this.data.get("cash");
    console.log("hello");
     this.shop=this.add.image(700,0,'profit');
     this.shop.setOrigin(0,0);
     //this.testlist(1100,700);
    // this.registry.events.on('changedata',this.updateData,this);
     this.money_view=this.add.text(900,800,'this.income_money.toString()',{font:'30px Arial',fill:'black'});
     
    } 

    /*updateData(parent,key,data){
      if (key=='this_cash'){
        this.money_view.setText("ndsijnvkj");
      }
    }*/
  testlist(x:number,y:number){
      var i =0;
      while (i<2){
  
          let testbutton= new LoanObject(this,x,y);
          y+=100;
          i++;
          
      }
    }

    
  
    update() {
      this.money_view.setText('money: '+this.data.get("cash"));
     
    }
  }
  