import LoanObject from "./loanObject";

export default class LoanObjectUI extends Phaser.GameObjects.Sprite {
    description: string;
    index:number;
    tex: Phaser.GameObjects.Text;
   




    constructor(scene: Phaser.Scene, x: number, y: number,Loandata:LoanObject,index:number) {
        super(scene, x, y, 'loan');
        scene.sys.updateList.add(this);
        scene.sys.displayList.add(this);
        this.description=Loandata.terms;
        this.setInteractive();
        this.index=index;
        this.tex=this.scene.add.text(200,300,this.description,{font:'30px Arial',fill:'black'});
        

     
    }

    

  

   

  


   
   
    
    
   




}
