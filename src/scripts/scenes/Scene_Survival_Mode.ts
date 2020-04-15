export default class Scene_Survival_Mode extends Phaser.Scene {
    text_Survival: Phaser.GameObjects.Text;
  rec: Phaser.GameObjects.Rectangle;
  backrectangle: Phaser.GameObjects.Rectangle;
    constructor() {
      super({ key: 'Scene_Survival_Mode' });
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
      if(this.scene.isActive('Scene_Mode_Select')) {
        this.scene.bringToTop('Scene_Mode_Select');
      }
      else{
        this.scene.launch('Scene_Mode_Select');
      }
    }
  
    create() {
      this.backrectangle=this.add.rectangle(100,100,1000,1000,0xffffff);
        this.text_Survival=this.add.text(50,300,"this is the Scene_Survival_mode",{font:'22px Arial',fill:'black'}).setInteractive();
        this.rec=this.add.rectangle(100,100,100,100,0xFF0000).setInteractive();
       
        this.rec.on('pointerdown',()=> {this.color_change(); });   
        this.text_Survival.on('pointerdown',()=> {this.Select_mode();});

    }
  
    update() {
     
    }
  }
  