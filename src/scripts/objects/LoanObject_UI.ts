import LoanObject from "./loanObject";

export default class LoanObjectUI extends Phaser.GameObjects.Sprite {
    description: string;
    index:number;
    tex: Phaser.GameObjects.Text;
    loandata: LoanObject;
    logo: Phaser.GameObjects.Image;
   x:number;
   y:number;




    constructor(scene: Phaser.Scene, x: number, y: number,Loandata:LoanObject,index:number) {
        super(scene, x, y, 'loan');
        this.x=x;
        this.y=y;
        this.logo=this.scene.add.image(x,y,'');
        scene.sys.updateList.add(this);
        scene.sys.displayList.add(this);
        this.description=Loandata.terms;
        this.setInteractive();
        this.index=index;
        this.loandata=Loandata;
        this.tex=this.scene.add.text(200,300,this.description,{font:'30px Arial',fill:'black'});
        this.Picklogo();

     
    }

   Picklogo(){
       if(this.loandata.logo_number==1){
         this.logo=this.scene.add.image(this.x,this.y,'Cap1_logo');
       }
      else if(this.loandata.logo_number==2){
        this.logo=this.scene.add.image(this.x,this.y,'Chase_logo');
      }
      else if(this.loandata.logo_number==3){
        this.logo=this.scene.add.image(this.x,this.y,'PNC_logo');
      }
      else if(this.loandata.logo_number==4){
        this.logo=this.scene.add.image(this.x,this.y,'wells_logo');
      }
      else{
            console.log("missing texture");
      }
   }

  

   

  


   
   
    
    
   




}
