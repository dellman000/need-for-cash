export default class LoanObject extends Phaser.GameObjects.Sprite {
    rec: Phaser.GameObjects.Rectangle;
   




    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, 'loan');
        scene.sys.updateList.add(this);
        scene.sys.displayList.add(this);
        //this.setVisible(true);
        this.setInteractive();
        
        
        this.rec=scene.add.rectangle(x+345,y+60,200,75,0x2BB412);
        this.rec.setInteractive();
        //this.rec.alpha/= 100;
        this.on('pointerdown',this.move,this);
        this.rec.on('pointerdown',this.movedown,this);

        
    }

    movedown(){
        this.y+=100;
        this.rec.y+=100;
    }

    move(){
        this.x+=100;
        this.rec.x+=100;
    }

   

   preUpdate(){
       this.y-=10;
   }


   
   
    
    
   




}
