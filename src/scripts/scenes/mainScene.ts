import ExampleObject from '../objects/exampleObject';
import ManObject from '../objects/manObject';
import Hero from '../objects/heroObject';
import { Scene } from 'phaser';


export default  class MainScene extends Phaser.Scene {
  private exampleObject: ExampleObject;
  
  timeleft:Phaser.Time.Clock;
timing:string;
farRight:boolean;

  manObject: ManObject;

  guy: Phaser.GameObjects.Rectangle;
  player: Phaser.GameObjects.Rectangle;
  guy2: Phaser.GameObjects.Rectangle;
  health:number;
  
  guymaker:Phaser.GameObjects.Rectangle;
  
  cursorKeys: Phaser.Types.Input.Keyboard.CursorKeys;
  Maker: Phaser.GameObjects.Rectangle;
  constructor() {
    super({ key: 'MainScene' });
    
  }
  create() {
   // this.exampleObject = new ExampleObject(this, 0, 0);  
     // this.guy= this.add.image(100,100,'guy');
      //this.guy2= this.add.image(110,100,'guy2');
    
      
     // this.timing =this.timeleft.now.toString();
     
      this.farRight=false;
      this.health=60;
      //this.add.text(100,100,"hello",0xff0);
      this.guy=this.add.rectangle(200,100,10,10,0xFF0000); 
      this.guy2=this.add.rectangle(100,100,10,10,0xff0000); 
     
      this.Maker=this.add.rectangle(0,0,100,100,0xff0000);
      
      this.cursorKeys=this.input.keyboard.createCursorKeys();

      
    this.player=this.add.rectangle(200,300,10,10,0x0000ff);
    
    /*this.physics.add.collider(this.player,this.guy, function(player,guy2){
      player.destroy();
    })
    this.physics.add.collider(this.player,this.guy, function(player,guy){
      player.destroy();
    })*/

    }
    moveMaker(object:Phaser.GameObjects.Rectangle,right:boolean){

     
      
      if(object.x<this.player.x+Math.random()*30 && right== false){
        object.x+=5;
      }
      else if(object.x>=this.player.x+Math.random()*30){
        right=true;  
        object.x-=5;
      }
      else if(right==true&&object.x>this.player.x-Math.random()*60){
        object.x-=5;
      }
      else if((object.x<=this.player.x-Math.random()*60)){
        object.x+=5;
        right=false;
        
      }
      
      this.farRight=right;
    }
  

 



  resetEnemy(enemy:Phaser.GameObjects.Rectangle){
   
   //enemy.y+=speed;  
    if(this.Maker.x==this.player.x){
     enemy.x=this.player.x;
   }
   else{
    enemy.y=this.Maker.y+Math.random()*50;
    enemy.x=this.Maker.x+Math.random()*50;
    
   }
   
  
   
   
    // enemy.y=Math.random() *25;
    
    //enemy.x=Math.random() *300;
  }
  moveEnemy(enemy:Phaser.GameObjects.Rectangle,speed:number){
    
    if(this.health==60){
      enemy.y+=speed=speed*.75;
    }
    else{
      
    enemy.y+=speed;



      
    }

    if (enemy.y>400){
      this.resetEnemy(enemy);
    }
    enemy.angle+=6;
  }

 
spinPlayer(){
  if(this.health<60){
    this.player.angle-=9;
    this.player.y-=1;
  }

}

playerbounds(){
  if(this.player.y>=400){
    //this.health=-100;
    //this.player.destroy()
    this.player.y=400;
    this.endgame();
  }
  if(this.player.y<=0){
    this.player.y=0;
    this.endgame();

  }
  
  if(this.player.x<=0){
    this.player.x=0;
  }
  if(this.player.x>=400){
    this.player.x=400;
  }
}
  
  moveplayer(){
    this.spinPlayer();
    this.playerbounds();

    if(this.cursorKeys.up?.isDown) {
      this.player.y-=5;
    }
    if(this.cursorKeys.down?.isDown){
      this.player.y+=5;
    }
    if(this.cursorKeys.left?.isDown){
      this.player.x-=5;
    }
    if(this.cursorKeys.right?.isDown){
      this.player.x+=5;
    }
    if ((this.cursorKeys.space?.isDown)&&(this.cursorKeys.up?.isDown ) ){
      this.player.y-=20;
    }
    if ((this.cursorKeys.space?.isDown)&&(this.cursorKeys.down?.isDown ) ){
      this.player.y+=20;
    }
    if ((this.cursorKeys.space?.isDown)&&(this.cursorKeys.left?.isDown ) ){
      this.player.x-=20;
    }
    if ((this.cursorKeys.space?.isDown)&&(this.cursorKeys.right?.isDown ) ){
      this.player.x+=20;
    }
  }
  flintch(enemy:Phaser.GameObjects.Rectangle){
   var RANDOM_NUM=(Math.random() *100)-25;
    if(this.player.x<enemy.x){
      this.player.x-=RANDOM_NUM;
    }
    else{
      this.player.x+=RANDOM_NUM;
    }
  }

  Pain(enemy:Phaser.GameObjects.Rectangle){
    if( (this.player.x-10< enemy.x) &&(this.player.x+10>enemy.x)  && (this.player.y-10< enemy.y) &&(this.player.y+10>enemy.y)  ){
      this.flintch(enemy);
      if(this.health<=20){
        this.player.fillColor=0xff0000;
        this.health-=1;
      }
     if(this.health<=40){
      this.player.fillColor=0x800080;
        this.health-=1;
      }
      if(this.health>=60){
        this.player.fillColor=0xff0000;
        this.health-=1;
      }



      else{
       this.endgame();
      }
      
    }

  }
  endgame(){
    this.player.destroy();
    this.scene.start('DeathScene');
  }

 

  update() {
 
   // this.add.text(10,10,'hhbjbkb',{font:"100 px Arial" ,fill:"black"});


this.Pain(this.guy);
this.Pain(this.guy2);
 this.moveEnemy(this.guy,2);
 this.moveEnemy(this.guy2,1);
 this.moveplayer();
 this.moveMaker(this.Maker,this.farRight);

  }

  
}
