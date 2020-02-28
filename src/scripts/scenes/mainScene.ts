import ExampleObject from '../objects/exampleObject';
import ManObject from '../objects/manObject';
import Hero from '../objects/heroObject';
import { Scene } from 'phaser';


export default  class MainScene extends Phaser.Scene {
  private exampleObject: ExampleObject;
  
  manObject: ManObject;
  private hero:Hero;
  guy: Phaser.GameObjects.Image;
  player: Phaser.GameObjects.Image;
  guy2: Phaser.GameObjects.Image;
  cursorKeys: Phaser.Types.Input.Keyboard.CursorKeys;
  constructor() {
    super({ key: 'MainScene' });
    
  }
  create() {
   // this.exampleObject = new ExampleObject(this, 0, 0);  
      this.guy= this.add.image(100,100,'guy');
      this.guy2= this.add.image(110,100,'guy2');
      this.cursorKeys=this.input.keyboard.createCursorKeys();

    this.player=this.add.image(200,200,'player')

  }

 
  moveHero(hero:Phaser.GameObjects.Image){
    this.input.keyboard.addListener('w',this.Up);
    this.input.keyboard.addListener('s',this.Up);
    }
  Up(){
    this.player.x+=2;
  }
  Down(){
    this.player.x-=2;
  }

  resetEnemy(enemy:Phaser.GameObjects.Image){
    enemy.y=Math.random() *25;
    
    enemy.x=Math.random() *300;
  }
  moveEnemy(enemy:Phaser.GameObjects.Image,speed:number){
    enemy.y+=speed;

    if (enemy.y>400){
      this.resetEnemy(enemy);
    }
  }

  
  moveplayer(){
    if(this.cursorKeys.up?.isDown){
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
  }

 

  update() {
 
 this.moveEnemy(this.guy,10);
 this.moveEnemy(this.guy2,10);
 this.moveplayer();

  }

  
}
