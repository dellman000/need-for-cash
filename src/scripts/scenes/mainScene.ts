import ExampleObject from '../objects/exampleObject';
import ManObject from '../objects/manObject';
import Hero from '../objects/heroObject';
import { Scene } from 'phaser';


export default  class MainScene extends Phaser.Scene {
  private exampleObject: ExampleObject;
  
  manObject: ManObject;
  private hero:Hero;
  guy: Phaser.GameObjects.Image;
  constructor() {
    super({ key: 'MainScene' });
    
  }
  create() {
   // this.exampleObject = new ExampleObject(this, 0, 0);
  this.manObject = new ManObject(this,100,100);
  this.hero = new Hero(this,150,300);  
  
 this.guy= this.add.image(100,100,'guy');

  }

 
  moveHero(hero:Hero){
    this.input.keyboard.addListener('w',this.Up);
    this.input.keyboard.addListener('s',this.Up);
    }

  Up(){
    this.hero.x+=2;
  }
  Down(){
    this.hero.x-=2;
  }

  resetEnemy(enemy:ManObject){
    enemy.y=Math.random() *25;
    
    enemy.x=Math.random() *300;
  }
  moveEnemy(enemy:ManObject,speed:number){
    enemy.y+=speed;

    if (enemy.y>400){
      this.resetEnemy(enemy);
    }
  }

  deleteHero(){
    if(  ((this.hero.x >=this.manObject.x-25) && (this.hero.x <=this.manObject.x+25) ) &&( this.hero.y==this.manObject.y)){
    
      delete this.hero;
    }
  }
  

 

  update() {
 
  this.moveHero(this.hero);
  this.moveEnemy(this.manObject,15);   
  this.deleteHero();
  }

  
}
