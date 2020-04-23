export default class Store_Scene extends Phaser.Scene {
    shop: Phaser.GameObjects.Image;
    
  
    constructor() {
      super({ key: 'Store' });
    }
  
    create() {
   
     this.shop=this.add.image(0,0,'store_screen');
     this.shop.setOrigin(0,0);
    } 
  
    update() {
    }
  }
  