export default class Scene_Survival_Mode extends Phaser.Scene {
    text_Survival: Phaser.GameObjects.Text;
    constructor() {
      super({ key: 'Scene_Survival_Mode' });
    }

    
  
    create() {
        this.text_Survival=this.add.text(50,100,"this is the Scene_Survival_mode",{font:'22px Arial',fill:'black'})
    }
  
    update() {
     
    }
  }
  