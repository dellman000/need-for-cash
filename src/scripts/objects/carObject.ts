export default class CarObject extends Phaser.GameObjects.Sprite {
   
   speed:number;
   
   
   constructor(scene: Phaser.Scene, x: number, y: number) {
        
        
        
        super(scene, x, y, 'loan');
        scene.sys.updateList.add(this);
        scene.sys.displayList.add(this);
        //this.setVisible(true);
        this.setInteractive();
        //this.speed=engine_power+handeling+hullstrenght+boots_gain;
        
        
    }

  
   

   preUpdate(){
      // this.y-=1;
       //sthis.rec.y-=1;
   }


   
   
    
    
   




}
