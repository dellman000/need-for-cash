export default class NewTurnScreen extends Phaser.GameObjects.Sprite {
    income_text: Phaser.GameObjects.Text;
    expenses_text: Phaser.GameObjects.Text;
    netIncome_text: Phaser.GameObjects.Text;
    credit_score_text: Phaser.GameObjects.Text;
    loan_text: Phaser.GameObjects.Text;
    tab: Phaser.GameObjects.Group;
    income: number;
    expenses: number;
    netIncome: number;
    loan: number;
    credit_score: number;
    income_gain: number;
    loan_gain: number;
   move_up:boolean;
   move_down:boolean;
    rec: Phaser.GameObjects.Rectangle;
    
    cash: number;
    cash_text: Phaser.GameObjects.Text;
   
   
    constructor(scene: Phaser.Scene, x: number, y: number,cash:number,income:number,expences:number,loan:number,credit_score:number) {
        super(scene, x, y, 'Next_Turn');
        scene.add.existing(this);
        /*this.move_up=false;
        this.move_down=false;*/
        this.cash=cash;
        this.income_gain=this.netIncome-income;
        this.loan_gain=this.loan-loan
        this.income=income;
        this.expenses=expences;
        this.netIncome=this.income-this.expenses;
        this.loan=loan;
        this.credit_score=credit_score;

        let position=x-500;
        this.cash_text=this.scene.add.text(position,y-300,'Cash : '+ this.cash,{font:'50px Arial',fill:'white'});
        this.cash_text.setOrigin(0,0);

        this.income_text=this.scene.add.text(position,y-200,'Income : '+ this.income,{font:'50px Arial',fill:'white'});
        this.income_text.setOrigin(0,0);

        this.expenses_text=this.scene.add.text(position,y-100,'Expense : '+ this.expenses,{font:'50px Arial',fill:'white'});
        this.income_text.setOrigin(0,0);

        this.netIncome_text=this.scene.add.text(position,y,'Net Income : '+ this.netIncome,{font:'50px Arial',fill:'white'});
        this.netIncome_text.setOrigin(0,0);

        this.credit_score_text=this.scene.add.text(position,y+100,'Credit Score : '+ this.credit_score,{font:'50px Arial',fill:'white'});
        this.credit_score_text.setOrigin(0,0);
        
        this.loan_text=this.scene.add.text(position,y+200,'loans : '+ this.loan,{font:'50px Arial',fill:'white'});
        this.loan_text.setOrigin(0,0);

       // this.rec=this.scene.add.rectangle(500,500,200,200,0xff0000);
        this.setInteractive()

      
      
      
        this.tab=this.scene.add.group();
        this.tab.add(this.income_text);
        this.tab.add(this.expenses_text);
        this.tab.add(this.netIncome_text);
        this.tab.add(this.credit_score_text);
        this.tab.add(this.loan_text);
        this.tab.add(this.cash_text);
        this.tab.add(this);
       
        this.on('pointerdown',()=> {this.move_up=true; this.move_down=false});


    }
    update_image(){
        this.cash_text.text='Cash : '+ this.cash;
        this.income_text.text='Income : '+ this.income;
        this.expenses_text.text='Expense : '+ this.expenses;
        this.netIncome_text.text='Net Income : '+ this.netIncome;
        this.credit_score_text.text='Credit Score : '+ this.credit_score;
        this.loan_text.text='loans : '+ this.loan;
    }

  moveUp(){
    if(this.move_up==true&&this.y!= -600){
        this.tab.incY(-25);
    }
    if(this.y== -600){
        this.move_up=false;
    }
  }
  movedown(){
      if(this.move_down==true&&this.y!=500){
        this.tab.incY(25);
      }
      if(this.y==-500){
          this.move_down=false;
      }
  }
   

   preUpdate(){
    this.movedown();
    this.moveUp();
   }


   
   
    
    
   




}
