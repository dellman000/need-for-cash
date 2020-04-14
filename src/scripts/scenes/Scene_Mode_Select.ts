import Scene_Status from "./Scene_Status";
import Scene_Survival_Mode from "./Scene_Survival_Mode";
import { Scene } from "phaser";

export default class Scene_Mode_Select extends Phaser.Scene {
    
  text_Survival:Phaser.GameObjects.Text;
  rec: Phaser.GameObjects.Rectangle;

  
  constructor() {
      super({ key: 'Scene_Mode_Select' });
    }
  
    Select_mode(){
      this.scene.start('Scene_Survival_Mode');
    }

    create() {
    //this.rec=this.add.rectangle(100,100,100,100,0xFF0000).setInteractive();
    this.text_Survival=this.add.text(50,100,"this is the Scene_Mode_Select",{font:'22px Arial',fill:'black'}).setInteractive();
    
    //this.rec.on('pointerdown',()=> {this.Select_mode();});
    this.text_Survival.on('pointerdown',()=> {this.Select_mode();});
    }
  
    update() {
      
    }
  }
  