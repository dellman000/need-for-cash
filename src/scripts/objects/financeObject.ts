export default class FinanceObject extends Phaser.GameObjects.Sprite {
    income_text: Phaser.GameObjects.Text;
    tab: Phaser.GameObjects.Group;
    expenses_text: Phaser.GameObjects.Text;
    expenses: any;
    income: any;
    credit_score: any;
    netIncome: number;
    netIncome_text: Phaser.GameObjects.Text;
    credit_score_text: Phaser.GameObjects.Text;
    finance_tab_button: any;
    //hi
  
   




    constructor(scene: Phaser.Scene, x: number, y: number,income:number,expenses:number,credit_score:number) {
        super(scene, x, y, 'profit');
        scene.sys.updateList.add(this);
        scene.sys.displayList.add(this);
        this.setInteractive();
        this.on('pointerdown',this.move,this);
        this.setOrigin(0,0);  

        this.expenses=expenses;
        this.income=income;
        this.credit_score=credit_score;
        this.netIncome=income-expenses;

        this.income_text=this.scene.add.text(2060,100,'Income : '+ this.income,{font:'50px Arial',fill:'white'});
        this.income_text.setOrigin(0,0);

        this.expenses_text=this.scene.add.text(2060,200,'Expense : '+ this.expenses,{font:'50px Arial',fill:'white'});
        this.income_text.setOrigin(0,0);

        this.netIncome_text=this.scene.add.text(2060,300,'Net Income : '+ this.netIncome,{font:'50px Arial',fill:'white'});
        this.netIncome_text.setOrigin(0,0);

        this.credit_score_text=this.scene.add.text(2060,400,'Credit Score : '+ this.credit_score,{font:'50px Arial',fill:'white'});
        this.credit_score_text.setOrigin(0,0);
        

      
      
      
        this.tab=this.scene.add.group();
        this.tab.add(this.income_text);
        this.tab.add(this.expenses_text);
        this.tab.add(this.netIncome_text);
        this.tab.add(this.credit_score_text);
        this.tab.add(this);
        this.finance_tab_button=this.scene.add.image(1865,305,'profit_button').setOrigin(0,0).setInteractive();
        this.finance_tab_button.on('pointerdown',()=>{this.move()})

    }

   move(){
     
       while(this.x>1000){
        this.tab.incX(-1);
        //this.credit_score_text.x-=1;
       }
      // this.tab.setDepth(1);
      
    
   }
   

   preUpdate(){
   
   }


   
   
    
    
   




}
