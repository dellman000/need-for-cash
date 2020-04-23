import Scene_Status from "./Scene_Status";
import Scene_Survival_Mode from "./Scene_Survival_Mode";
import { Scene } from "phaser";

export default class Scene_Mode_Select extends Phaser.Scene {
    
  text_Survival:Phaser.GameObjects.Text;
  rec: Phaser.GameObjects.Rectangle;
  backrectangle: Phaser.GameObjects.Rectangle;

  
  constructor() {
      super({ key: 'Scene_Mode_Select' });
    }
  
    color_change(){
      if(this.rec.fillColor == 0xFF0000){
        this.rec.fillColor = 0x00FF00;
      }
      else if (this.rec.fillColor == 0x00FF00) {
        this.rec.fillColor = 0xFF0000;
      }
    }

    Select_mode(){
      if(this.scene.isActive('Scene_Survival_Mode')) {
        this.scene.bringToTop('Scene_Survival_Mode');
      }
      else if(this.scene.isActive('Scene_Survival_Mode')==false){
        this.scene.launch('Scene_Survival_Mode');
      }
    }

    create() {
   this.backrectangle=this.add.rectangle(100,100,1000,1000,0xffffff);
    this.rec=this.add.rectangle(200,200,100,100,0xFF0000).setInteractive();
    this.text_Survival=this.add.text(50,100,"this is the Scene_Mode_Select",{font:'22px Arial',fill:'black'});//.setInteractive();
    
    this.rec.on('pointerdown',()=> {this.color_change()});

    this.text_Survival.on('pointerdown',()=> {this.Select_mode();});
   
    }
  
    update() {
      
    }
  }
  