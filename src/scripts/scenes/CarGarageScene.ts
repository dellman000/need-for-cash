import ExampleObject from '../objects/exampleObject';

export default class Car_Garage_Scene extends Phaser.Scene {
  
  garage: Phaser.GameObjects.Image;
  pully: Phaser.GameObjects.Image;

  

  constructor() {
    super({ key: 'Car_Garage' });
  }

  create() {
    this.garage=this.add.image(0,0,'garage');
    this.garage.setOrigin(0,0);

    this.pully=this.add.image(0,0,'pully');
    this.pully.setOrigin(0,0);

  }

  update() {
  }
}
