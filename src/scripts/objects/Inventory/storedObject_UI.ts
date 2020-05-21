import Engine_CarPartObject from "../carPartsObjects/engine_CarPartObject";
import Tire_CarPartObject from "../carPartsObjects/Tire_CarPartObject";
import Body_CarPartObject from "../carPartsObjects/body_CarPartObject";
import Turbo_CarPartObject from "../carPartsObjects/Turbo_CarPartObject";

export default class StoredObject_UI extends Phaser.GameObjects.Sprite {
   // rec: Phaser.GameObjects.Image;
    item: Phaser.GameObjects.Text;
    index: number;
    carpart: Engine_CarPartObject | Body_CarPartObject | Tire_CarPartObject | Turbo_CarPartObject;
    itemframe: Phaser.GameObjects.Image;
    red_button: Phaser.GameObjects.Image;
    green_button: Phaser.GameObjects.Image;
    view_description: Phaser.GameObjects.Image;
    showing: boolean;
    decription: Phaser.GameObjects.Text;
    InCar: boolean;
   
    

    constructor(scene: Phaser.Scene, x: number, y: number,index:number,part:(Engine_CarPartObject|Body_CarPartObject|Tire_CarPartObject|Turbo_CarPartObject)) {
        super(scene, x, y, '');
        this.setDepth(1);
        scene.add.existing(this);
        this.itemframe=this.scene.add.image(x,y,'Item_frame');
        this.itemframe.setInteractive();
        this.itemframe.setDepth(0);
        this.red_button=this.scene.add.image(x+35,y+52,'red_button').setDepth(1);
        this.green_button=this.scene.add.image(x-35,y+52,'green_button').setDepth(1);
        this.view_description=this.scene.add.image(this.x,this.y,'Item_info');
        this.view_description.setOrigin(0,1);
        this.view_description.setVisible(false);
        this.view_description.setDepth(2);
        
        this.showing=false;
       
        this.carpart=part;
      
        this.index=index; 
        this.decription=this.scene.add.text(x+200,y-250,this.carpart.name,{ font: '30px Arial', fill: 'white' });
        this.decription.setVisible(false);
        this.decription.setOrigin(0,0);
        this.decription.setDepth(3);
       // console.log(part.power);       
        this.updatePicture();
       
        this.itemframe.on('pointerover',()=> {if(this.showing==false){this.update_description();this.view_description.setVisible(true); this.showing=true;}})
        this.itemframe.on('pointerdown', ()=>{if(this.showing==true) {this.view_description.setVisible(false); this.showing=false;this.decription.setVisible(false); }});
    }

   


    update_description(){
       // console.log(this.carpart);
        let updated_desctiption=this.carpart.name+'\n'+"Power: "+String(this.carpart.power)+"\n Durablity"+this.carpart.durablity;
        console.log(updated_desctiption);
        this.decription.text=updated_desctiption; 
        this.decription.setVisible(true);     
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

    preUpdate(){
        
    }
}
