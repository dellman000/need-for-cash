export default class StoreObject extends Phaser.GameObjects.Sprite {
    table_store: Phaser.GameObjects.Group;
    recc: Phaser.GameObjects.Rectangle;
    engine_coll: Phaser.GameObjects.Text;
    Tires_coll: Phaser.GameObjects.Text;
    Body_coll: Phaser.GameObjects.Text;
    Turbo_coll: Phaser.GameObjects.Text;
    



    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, 'store_screen');
        scene.sys.updateList.add(this);
        scene.sys.displayList.add(this);
        this.setInteractive();
        this.setOrigin(0,0);
        this.on('pointerdown',this.move,this);

       


       this.engine_coll=this.scene.add.text(-900,200,'Engines ',{font:'50px Arial',fill:'white'});
       this.engine_coll.setOrigin(0,0);

       this.Tires_coll=this.scene.add.text(-900,400,'Tires ',{font:'50px Arial',fill:'white'});
       this.Tires_coll.setOrigin(0,0);

       this.Turbo_coll=this.scene.add.text(-900,600,'Turbo ',{font:'50px Arial',fill:'white'});
       this.Turbo_coll.setOrigin(0,0);

       this.Body_coll=this.scene.add.text(-900,800,'Body ',{font:'50px Arial',fill:'white'});
       this.Body_coll.setOrigin(0,0);

      

      
        this.table_store=this.scene.add.group();
        this.table_store.add(this);
        this.table_store.add(this.engine_coll);
        this.table_store.add(this.Tires_coll);
        this.table_store.add(this.Turbo_coll);
        this.table_store.add(this.Body_coll);


    }

   move(){
     
       while(this.x<50){
       
        this.table_store.incX(50);
       }
      
       this.table_store.setDepth(1);
       
    
   }
   

  

   
   
    
    
   




}
