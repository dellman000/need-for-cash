import Engine_CarPartObject from "../carPartsObjects/engine_CarPartObject";
import Tire_CarPartObject from "../carPartsObjects/Tire_CarPartObject";
import Body_CarPartObject from "../carPartsObjects/body_CarPartObject";
import Turbo_CarPartObject from "../carPartsObjects/Turbo_CarPartObject";

export default class StoredObject_UI extends Phaser.GameObjects.Sprite {
   // rec: Phaser.GameObjects.Image;
    item: Phaser.GameObjects.Text;
    index: number;
    carpart: Engine_CarPartObject | Body_CarPartObject | Tire_CarPartObject | Turbo_CarPartObject;
   
    

    constructor(scene: Phaser.Scene, x: number, y: number,index:number,part:(Engine_CarPartObject|Body_CarPartObject|Tire_CarPartObject|Turbo_CarPartObject)) {
        super(scene, x, y, '');
        scene.add.existing(this);
        //this.rec=this.scene.add.image(x,y,'loan');
        
        this.carpart=part;
       // this.item=this.scene.add.text(x,y,this.carpart.name,{ font: '30px Arial', fill: 'black' });
       // this.item.setOrigin(0,0);
        this.index=index;        
        this.updatePicture();
    }
    updateData(){
        this.item.text=this.carpart.name;
        
    }
    updatePicture(){
        let parts =new Array<String>(4)
        parts=["Engine_Mk","Body_Mk","Tire_Mk","Turbo_Mk"];
        let Icon=this.carpart.name;
    for(let j=0;j<4;j++){
        for(let i=1;i<=4;i++){
            let compareIcon=parts[j]+String(i);
            if(Icon==compareIcon){
                this.setTexture(compareIcon);
            }
        }
    }
    }
}
