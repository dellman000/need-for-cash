import Turbo_CarPartObject from "./carPartsObjects/Turbo_CarPartObject";
import Body_CarPartObject from "./carPartsObjects/body_CarPartObject";
import Engine_CarPartObject from "./carPartsObjects/engine_CarPartObject";
import Tire_CarPartObject from "./carPartsObjects/Tire_CarPartObject";
import StoredObject_UI from "./Inventory/storedObject_UI";
import LoanObjectUI from "./LoanObject_UI";

export default class StoreObject extends Phaser.GameObjects.Sprite {
    table_store: Phaser.GameObjects.Group;
    recc: Phaser.GameObjects.Rectangle;
    engine_coll: Phaser.GameObjects.Text;
    Tires_coll: Phaser.GameObjects.Text;
    Body_coll: Phaser.GameObjects.Text;
    Turbo_coll: Phaser.GameObjects.Text;
    engine1: Phaser.GameObjects.Image;
    tire1: Phaser.GameObjects.Image;
    
    turbo1: Phaser.GameObjects.Image;
    
    body1: Phaser.GameObjects.Image;
    car_speed: number;
    StoreInventory: (Engine_CarPartObject | Body_CarPartObject | Tire_CarPartObject | Turbo_CarPartObject)[];
    shoppingCart: (Engine_CarPartObject | Body_CarPartObject | Tire_CarPartObject | Turbo_CarPartObject)[];
    ENGINE_ROW: number;
    BODY_ROW: number;
    TIRE_ROW: number;
    TURBO_ROW: number;
    ITEM_GAP:number
    test: StoredObject_UI;
    UIgroup: Phaser.GameObjects.Group;


    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, 'store_screen');
        scene.sys.updateList.add(this);
        scene.sys.displayList.add(this);
        this.setInteractive();
        this.setOrigin(0,0);
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
        //this.table_store.add(this.engine1);
        this.table_store.add(this.Tires_coll);
        //this.table_store.add(this.tire1);
        //this.table_store.add(this.turbo1);
        this.table_store.add(this.Turbo_coll);
        this.table_store.add(this.Body_coll);
        //this.table_store.add(this.body1);
        this.StoreInventory = new Array<(Engine_CarPartObject|Body_CarPartObject|Tire_CarPartObject|Turbo_CarPartObject)>(10);
        this.shoppingCart=new Array<(Engine_CarPartObject|Body_CarPartObject|Tire_CarPartObject|Turbo_CarPartObject)>(10)
        this.createStoreInventory(this.StoreInventory);
        this.createStoreUI(this.StoreInventory);
        this.on('pointerdown',this.move,this);
       
    }

    createStoreInventory(Array_list:(Engine_CarPartObject|Body_CarPartObject|Tire_CarPartObject|Turbo_CarPartObject)[]  ){
        for(let i =1;i<=4;i++){
            let x=new Engine_CarPartObject("Engine_Mk"+String(i),10,100);
            Array_list[i]=x;
           }
           for(let i=5;i<=8;i++){
            let x=new Body_CarPartObject("Tire_Mk"+String(i-4),10,100);
            Array_list[i]=x;
           }
           for(let i=9;i<=12;i++){
            let x=new Tire_CarPartObject("Turbo_Mk"+String(i-8),10,100);
            Array_list[i]=x;
           }
           for(let i=13;i<=16;i++){
            let x=new Turbo_CarPartObject("Body_Mk"+String(i-12),10,100);
            Array_list[i]=x;
           }
    }


    createStoreUI(Array_list:(Engine_CarPartObject|Body_CarPartObject|Tire_CarPartObject|Turbo_CarPartObject)[]){
        let ITEM_GAP=180;
        let ENGINE_ROW=150;
        let BODY_ROW=350;
        let TIRE_ROW=550;
        let TURBO_ROW=750;
         
        for(let i =1;i<=4;i++){
            let x = new StoredObject_UI(this.scene,-900+(i*ITEM_GAP),ENGINE_ROW,i,Array_list[i]);
            x.on('pointerdown',()=>{this.logItem(x);});
            x.setOrigin(0,0);
            this.table_store.add(x);
            x.setInteractive();
           }
           for(let i=1;i<=4;i++){
            let x=new StoredObject_UI(this.scene,-900+(i*ITEM_GAP),BODY_ROW,i+4,Array_list[i+4]);
            x.on('pointerdown',()=>{this.logItem(x);});
            x.setOrigin(0,0);
            x.setInteractive();
            this.table_store.add(x);
           }
           for(let i=1;i<=4;i++){
            let x=new StoredObject_UI(this.scene,-900+(i*ITEM_GAP),TIRE_ROW,i+8,Array_list[i+8]);
            x.on('pointerdown',()=>{this.logItem(x);});
            x.setOrigin(0,0);
            x.setInteractive();
            this.table_store.add(x);
           }
           for(let i=1;i<=4;i++){
            let x=new StoredObject_UI(this.scene,-900+(i*ITEM_GAP),TURBO_ROW,i+12,Array_list[i+12]);
            x.on('pointerdown',()=>{this.logItem(x);});
            x.setOrigin(0,0);
            x.setInteractive();
            this.table_store.add(x);
           }
    }
   move(){
       while(this.x<50){
        this.table_store.incX(50);
       }
       this.table_store.setDepth(3);
   }

   logItem(x:StoredObject_UI){
    console.log(x.index);
   }
   

  

   
   
    
    
   




}
