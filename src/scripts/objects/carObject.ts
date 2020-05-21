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
        
        
        
        super(scene, x, y, 'body1');
        scene.sys.updateList.add(this);
        scene.sys.displayList.add(this);

        this.engine=Engine;
        this.Body=body
        this.Tire=Tire;
        this.Turbo=Turbo;
       
        //this.setVisible(true);
        this.setInteractive();
        this.setOrigin(0,0);
        //this.speed=engine_power+handeling+hullstrenght+boots_gain;
        
        
    }
    updateBody(){
        for(let i=1;i<=4;i++){
            if(this.Body.name=="Body_Mk"+String(i)){
                this.setTexture("body"+String(i));
            }
        }
    }
   

  
   

   preUpdate(){
      // this.y-=1;
       //sthis.rec.y-=1;
   }


   
   
    
    
   




}
