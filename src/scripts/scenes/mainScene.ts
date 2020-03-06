import ExampleObject from '../objects/exampleObject';
import ManObject from '../objects/manObject';
import Hero from '../objects/heroObject';
import { Scene, RIGHT } from 'phaser';


export default  class MainScene extends Phaser.Scene {
  private exampleObject: ExampleObject;
showtime:number;
timeleft:Phaser.Time.Clock;
timing:string;
farRight:boolean;



Maker: Phaser.GameObjects.Image;
guy: Phaser.GameObjects.Rectangle;
guy2: Phaser.GameObjects.Rectangle;

  
player: Phaser.GameObjects.Rectangle;
health:number;
  
  cursorKeys: Phaser.Types.Input.Keyboard.CursorKeys;
  text1: Phaser.GameObjects.Text;
  showtime2: number;
  Background: Phaser.GameObjects.TileSprite;
  Background2: Phaser.GameObjects.TileSprite;

  constructor() {
    super({ key: 'MainScene' });
    
  }
  create() {
   // this.exampleObject = new ExampleObject(this, 0, 0);  
     // this.guy= this.add.image(100,100,'guy');
      //this.guy2= this.add.image(110,100,'guy2');
     //this.Background=this.add.image(0,0,'background');
     
     this.Background=this.add.tileSprite(0,0,400,400,'background');
     this.Background2=this.add.tileSprite(1,1,612,2020,'stars');
     //this.Background2.setScale(500,2020);
     this.Background.setOrigin(0,0);
     this.Background2.setOrigin(0,0);
    this.showtime=60;
    this.showtime2=this.showtime;
    
      this.farRight=false;
      this.health=60;
     
      this.guy=this.add.rectangle(200,100,10,10,0xFF0000); 
      this.guy2=this.add.rectangle(100,100,10,10,0xff0000); 
     
      this.Maker=this.add.image(0,50,'mothership');
      this.text1=this.add.text(0,50,this.showtime.toString(),{font:'40px Arial',fill:'white'});
      this.cursorKeys=this.input.keyboard.createCursorKeys();

      
    this.player=this.add.rectangle(200,300,10,10,0x0000ff);
    
    /*this.physics.add.collider(this.player,this.guy, function(player,guy2){
      player.destroy();
    })
    this.physics.add.collider(this.player,this.guy, function(player,guy){
      player.destroy();
    })*/

    }

    TheTime(){
       const d = new Date();
       const n =  d.getTime();

       if (n>this.showtime2){
         this.showtime--;
         this.showtime2=n;
         this.showtime2+=600;
        this.text1.text=this.showtime.toString();
       }
       if(this.showtime<=0){
        this.wingame();
       }
       this.text1.x=this.Maker.x-25;
       this.text1.y=this.Maker.y-25;
       

     

    }
    moveMaker(object:Phaser.GameObjects.Image,right:boolean){
      if(object.x<this.player.x/*+Math.random()*30*/ && right== false){
        object.x+=5;
      }
      else if(object.x>=this.player.x+Math.random()*30 ){
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
    enemy.y=this.Maker.y+Math.random()*70;
    enemy.x=this.Maker.x+Math.random()*70;
    
   }
   
  
   
   
    // enemy.y=Math.random() *25;
    
    //enemy.x=Math.random() *300;
  }
  moveEnemy(enemy:Phaser.GameObjects.Rectangle,speed:number){

    
    enemy.y+=speed; 
    
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
var RIGHTBOUNDS=390;
var LeftBOUNDS=10;


  if(this.player.y>=RIGHTBOUNDS){
    //this.health=-100;
    //this.player.destroy()
    this.player.y=RIGHTBOUNDS;
    this.endgame();
  }
  if(this.player.y<=LeftBOUNDS){
    this.player.y=LeftBOUNDS;
    this.endgame();

  }
  
  if(this.player.x<=LeftBOUNDS){
    this.player.x=LeftBOUNDS;
  }
  if(this.player.x>=RIGHTBOUNDS){
    this.player.x=RIGHTBOUNDS;
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
  wingame(){
    this.scene.start('WinScene');
  }

 self_heal(){
   if(this.health<60){
     this.health+=.005;
   }
 }

  update() {
 
   // this.add.text(10,10,'hhbjbkb',{font:"100 px Arial" ,fill:"black"});
   this.self_heal();
this.Background.tilePositionY-=0.5;
this.Background2.tilePositionY-=0.7;
this.Pain(this.guy);
this.Pain(this.guy2);
 this.moveEnemy(this.guy,9);
 this.moveEnemy(this.guy2,10);
 this.moveplayer();
 this.moveMaker(this.Maker,this.farRight);
 this.TheTime();
  }

  
}
