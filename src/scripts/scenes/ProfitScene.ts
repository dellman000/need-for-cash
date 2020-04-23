export default class Profit_Scene extends Phaser.Scene {
    shop: Phaser.GameObjects.Image;
    
  
    constructor() {
      super({ key: 'ProfitScene' });
    }
  
  
    create() {
   
     this.shop=this.add.image(0,0,'profit');
     this.shop.setOrigin(0,0);






    } 
  
    update() {
    }
  }
  