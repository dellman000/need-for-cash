export default class LoanObject  {
    rec: Phaser.GameObjects.Rectangle;
    worth: number;
    interest: number;
    turns_due: number;
    taken: boolean;
    terms: string;
    interest_time: number;
   logo_number:number;




    constructor(worth:number,interest:number,interest_time:number,due:number) {
       //this.setVisible(true);
        
        this.taken=false;
        this.worth=worth;
        this.interest=interest;
        this.interest_time=interest_time;
        this.turns_due=due;
        
        this.logo_number=Phaser.Math.Between(1,4);

        this.terms="This loan is worth "+ this.worth+" with a " +this.interest+"% interest for every "+this.interest_time+" turns.";
       

        /*
        this.rec=scene.add.rectangle(x+345,y+60,200,75,0x2BB412);
        this.rec.setInteractive();
        //this.rec.alpha/= 100;
        this.on('pointerdown',this.move,this);
        this.rec.on('pointerdown',this.movedown,this);
            */
        
    }

    TakenToFalse(){
        this.taken=false;
    }

  

   

  


   
   
    
    
   




}
