import Engine_CarPartObject from "./carPartsObjects/engine_CarPartObject";
import Body_CarPartObject from "./carPartsObjects/body_CarPartObject";
import Tire_CarPartObject from "./carPartsObjects/Tire_CarPartObject";
import Turbo_CarPartObject from "./carPartsObjects/Turbo_CarPartObject";

export default class CarObject extends Phaser.GameObjects.Sprite {
    engine: Engine_CarPartObject;
    Body: Body_CarPartObject;
    Turbo: Turbo_CarPartObject;
    Tire: Tire_CarPartObject;
   
  
   
   
   constructor(scene: Phaser.Scene, x: number, y: number,Engine:Engine_CarPartObject,body:Body_CarPartObject,Tire:Tire_CarPartObject,Turbo:Turbo_CarPartObject) {
        
        
        
        super(scene, x, y, 'car_1');
        scene.sys.updateList.add(this);
        scene.sys.displayList.add(this);

        this.engine=Engine;
        this.Body=body
        this.Tire=Tire;
        this.Turbo=Turbo;
       
        //this.setVisible(true);
        this.setInteractive();
        //this.speed=engine_power+handeling+hullstrenght+boots_gain;
        
        
    }
   

  
   

   preUpdate(){
      // this.y-=1;
       //sthis.rec.y-=1;
   }


   
   
    
    
   




}
