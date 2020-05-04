export default class LoanObject extends Phaser.GameObjects.Sprite {
    rec: Phaser.GameObjects.Rectangle;
    worth: number;
    interest: number;
    turns_due: number;
    taken: boolean;
    terms: string;
    interest_time: number;
   




    constructor(scene: Phaser.Scene, x: number, y: number,worth:number,interest:number,interest_time:number,due:number) {
        super(scene, x, y, 'loan');
        scene.sys.updateList.add(this);
        scene.sys.displayList.add(this);
        //this.setVisible(true);
        this.setInteractive();
        this.taken=false;
        this.worth=worth;
        this.interest=interest;
        this.interest_time=interest_time;
        this.turns_due=due;


        this.terms="This loan is worth "+ this.worth+" with a " +this.interest+"% interest for every "+this.interest_time+" turns.";
        this.setInteractive();

        /*
        this.rec=scene.add.rectangle(x+345,y+60,200,75,0x2BB412);
        this.rec.setInteractive();
        //this.rec.alpha/= 100;
        this.on('pointerdown',this.move,this);
        this.rec.on('pointerdown',this.movedown,this);
            */
        
    }

    movedown(){
        this.y+=100;
        this.rec.y+=100;
    }

    move(){
        this.x+=100;
        this.rec.x+=100;
    }

   

  


   
   
    
    
   




}
