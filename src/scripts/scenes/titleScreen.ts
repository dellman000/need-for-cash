export default class TitleScene extends Phaser.Scene {
    Message: Phaser.GameObjects.Text;
    Message2: Phaser.GameObjects.Text;
    cursorKeys1: Phaser.Types.Input.Keyboard.CursorKeys;
    Message3: Phaser.GameObjects.Text;

constructor(){
    super({ key: 'TitleScene' })
}



create() {
        
    this.Message=this.add.text(50,100,"DODGE!!!!",{font:'50px Arial',fill:'black'});
    this.Message2=this.add.text(50,300,"UP,DOWN,LEFT,RIGHT ",{font:'22px Arial',fill:'black'});
    this.Message3=this.add.text(25,350,"and space to boost and SHIFT TO START PLAYING",{font:'15px Arial',fill:'black'});
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