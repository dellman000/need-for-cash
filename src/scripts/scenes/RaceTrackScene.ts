

export default class Race_Track_Scene extends Phaser.Scene {
  hello: any;
  race_track;
  garage_button: any;
  race_button: Phaser.GameObjects.Image;
  car: Phaser.GameObjects.Image;
  pc_car: Phaser.GameObjects.Image;
  movebutton: boolean;
  myCam: any;
  car_speed: any;
  count: number;
  
    constructor() {
      super({ key: 'RaceTrack' });
    
    }
  
    create() {
      this.race_track=this.add.tileSprite(0,0,1920,1080,'race_track');
      this.race_track.setOrigin(0,0);
      this.race_track.setScrollFactor(0);

      this.garage_button=this.add.image(1590,0,'garage_button');
      this.garage_button.setOrigin(0,0);
      this.garage_button.setScrollFactor(0);
      this.garage_button.setInteractive();
      this.garage_button.on('pointerdown', () => {this.scene.start('Car_Garage'/*,
      {turn:this.count, speed:this.car_speed}*/)});

      this.movebutton = false;
      this.race_button=this.add.image(700,0,'race_button');
      this.race_button.setOrigin(0,0);
      this.race_button.setScrollFactor(0);
      this.race_button.setInteractive();
      this.race_button.on('pointerdown', () => {this.movebutton = true});

      this.car=this.add.image(0,845,'Car');
      this.car.setOrigin(0,0);
      this.pc_car=this.add.image(0,645,'pc_car');
      this.pc_car.setOrigin(0,0);

      
    }

    //init(data){
      //this.car_speed=data.speed;
      //this.count = data.turn;
      //}
    move(){
      if (this.movebutton == true){
        if (this.car.x<1250) {
          //this.car.x+=this.car_speed;
          this.car.x+=10
          this.race_track.tilePositionX += 10;
        }
        if (this.pc_car.x<1251) {
          this.pc_car.x+=8;
          /*if (this.count == 1) {
            this.pc_car.x+= 20;
          }
          if (this.count == 2) {
            this.pc_car.x+=60;
          }
          if (this.count == 3) {
            this.pc_car.x+=100;
          }
          else {
            this.pc_car.x+=8;
          }*/
        }
      }
    }
    update() {
      this.move();
    }
}
  