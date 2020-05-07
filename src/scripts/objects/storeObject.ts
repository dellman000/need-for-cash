export default class StoreObject extends Phaser.GameObjects.Sprite {
    table_store: Phaser.GameObjects.Group;
    recc: Phaser.GameObjects.Rectangle;
    engine_coll: Phaser.GameObjects.Text;
    Tires_coll: Phaser.GameObjects.Text;
    Body_coll: Phaser.GameObjects.Text;
    Turbo_coll: Phaser.GameObjects.Text;
    engine1: Phaser.GameObjects.Image;
    engine2: Phaser.GameObjects.Image;
    engine3: Phaser.GameObjects.Image;
    engine4: Phaser.GameObjects.Image;
    tire1: Phaser.GameObjects.Image;
    tire2: Phaser.GameObjects.Image;
    tire3: Phaser.GameObjects.Image;
    tire4: Phaser.GameObjects.Image;
    turbo1: Phaser.GameObjects.Image;
    turbo2: Phaser.GameObjects.Image;
    turbo3: Phaser.GameObjects.Image;
    turbo4: Phaser.GameObjects.Image;
    body1: Phaser.GameObjects.Image;
    body2: Phaser.GameObjects.Image;
    body3: Phaser.GameObjects.Image;
    body4: Phaser.GameObjects.Image;
    car_speed: number;

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, 'store_screen');
        scene.sys.updateList.add(this);
        scene.sys.displayList.add(this);
        this.setInteractive();
        this.setOrigin(0,0);
        this.on('pointerdown',this.move,this);
        this.car_speed = 0;
        


        this.engine_coll=this.scene.add.text(-900,200,'Engines ',{font:'50px Arial',fill:'white'});
        this.engine_coll.setOrigin(0,0);
        this.engine1=this.scene.add.image(-700,150,'engine1');
        this.engine1.setOrigin(0,0);
        this.engine1.setInteractive();
        this.engine1.on('pointerdown', () => {this.car_speed += 5});
        this.engine2=this.scene.add.image(-530,150,'engine2');
        this.engine2.setOrigin(0,0);
        this.engine2.setInteractive();
        this.engine2.on('pointerdown', () => {this.car_speed += 10});
        this.engine3=this.scene.add.image(-360,150,'engine3');
        this.engine3.setOrigin(0,0);
        this.engine3.setInteractive();
        this.engine3.on('pointerdown', () => {this.car_speed += 20});
        this.engine4=this.scene.add.image(-190,150,'engine4');
        this.engine4.setOrigin(0,0);
        this.engine4.setInteractive();
        this.engine4.on('pointerdown', () => {this.car_speed += 40});

        this.Tires_coll=this.scene.add.text(-900,400,'Tires ',{font:'50px Arial',fill:'white'});
        this.Tires_coll.setOrigin(0,0);
        this.tire1=this.scene.add.image(-700,350,'tire1');
        this.tire1.setOrigin(0,0);
        this.tire1.setInteractive();
        this.tire1.on('pointerdown', () => {this.car_speed += 2});
        this.tire2=this.scene.add.image(-530,350,'tire2');
        this.tire2.setOrigin(0,0);
        this.tire2.setInteractive();
        this.tire2.on('pointerdown', () => {this.car_speed += 4});
        this.tire3=this.scene.add.image(-360,350,'tire3');
        this.tire3.setOrigin(0,0);
        this.tire3.setInteractive();
        this.tire3.on('pointerdown', () => {this.car_speed += 8});
        this.tire4=this.scene.add.image(-190,350,'tire4');
        this.tire4.setOrigin(0,0);
        this.tire4.setInteractive();
        this.tire4.on('pointerdown', () => {this.car_speed += 16});

        this.Turbo_coll=this.scene.add.text(-900,600,'Turbo ',{font:'50px Arial',fill:'white'});
        this.Turbo_coll.setOrigin(0,0);
        this.turbo1=this.scene.add.image(-700,550,'turbo1');
        this.turbo1.setOrigin(0,0);
        this.turbo1.setInteractive();
        this.turbo1.on('pointerdown', () => {this.car_speed += 4});
        this.turbo2=this.scene.add.image(-530,550,'turbo2');
        this.turbo2.setOrigin(0,0);
        this.turbo2.setInteractive();
        this.turbo2.on('pointerdown', () => {this.car_speed += 8});
        this.turbo3=this.scene.add.image(-360,550,'turbo3');
        this.turbo3.setOrigin(0,0);
        this.turbo3.setInteractive();
        this.turbo3.on('pointerdown', () => {this.car_speed += 16});
        this.turbo4=this.scene.add.image(-190,550,'turbo4');
        this.turbo4.setOrigin(0,0);
        this.turbo4.setInteractive();
        this.turbo4.on('pointerdown', () => {this.car_speed += 32});

        this.Body_coll=this.scene.add.text(-900,800,'Body ',{font:'50px Arial',fill:'white'});
        this.Body_coll.setOrigin(0,0);
        this.body1=this.scene.add.image(-700,750,'body1');
        this.body1.setOrigin(0,0);
        this.body1.setInteractive();
        this.body1.on('pointerdown', () => {this.car_speed += 2});
        this.body2=this.scene.add.image(-530,750,'body2');
        this.body2.setOrigin(0,0);
        this.body2.setInteractive();
        this.body2.on('pointerdown', () => {this.car_speed += 4});
        this.body3=this.scene.add.image(-360,750,'body3');
        this.body3.setOrigin(0,0);
        this.body3.setInteractive();
        this.body3.on('pointerdown', () => {this.car_speed += 8});
        this.body4=this.scene.add.image(-190,750,'body4');
        this.body4.setOrigin(0,0);
        this.body4.setInteractive();
        this.body4.on('pointerdown', () => {this.car_speed += 16});

        

        
        this.table_store=this.scene.add.group();
        this.table_store.add(this);
        this.table_store.add(this.engine_coll);
        this.table_store.add(this.engine1);
        this.table_store.add(this.engine2);
        this.table_store.add(this.engine3);
        this.table_store.add(this.engine4);
        this.table_store.add(this.Tires_coll);
        this.table_store.add(this.tire1);
        this.table_store.add(this.tire2);
        this.table_store.add(this.tire3);
        this.table_store.add(this.tire4);
        this.table_store.add(this.turbo1);
        this.table_store.add(this.turbo2);
        this.table_store.add(this.turbo3);
        this.table_store.add(this.turbo4);
        this.table_store.add(this.Turbo_coll);
        this.table_store.add(this.Body_coll);
        this.table_store.add(this.body1);
        this.table_store.add(this.body2);
        this.table_store.add(this.body3);
        this.table_store.add(this.body4);
    }

   move(){
     
       while(this.x<50){
       
        this.table_store.incX(50);
       }
      
       this.table_store.setDepth(1);
       
    
   }
   

  

   
   
    
    
   




}
