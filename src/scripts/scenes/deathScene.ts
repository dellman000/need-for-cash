import { Game } from "phaser";

export default class DeathScene extends Phaser.Scene {
    Message: Phaser.GameObjects.Text;
    Message2: Phaser.GameObjects.Text;
    cursorKeys1: Phaser.Types.Input.Keyboard.CursorKeys;

    constructor(){
        super({ key: 'DeathScene' })
    }


    create() {
        
        this.Message=this.add.text(100,100,"YOU DIED",{font:'50px Arial',fill:'black'});
        this.Message2=this.add.text(0,300,"would you like to try again: press SHIFT",{font:'22px Arial',fill:'black'});
        this.cursorKeys1=this.input.keyboard.createCursorKeys();
        
      
        
        
        
        
      }
      Again(){
        if(this.cursorKeys1.shift?.isDown){
            this.scene.start('MainScene');
      } 
      else{
        return;
      }
    }
      


    update(){
     
     this.Again();

     }
}