import Engine_CarPartObject from "../carPartsObjects/engine_CarPartObject";
import Body_CarPartObject from "../carPartsObjects/body_CarPartObject";
import Tire_CarPartObject from "../carPartsObjects/Tire_CarPartObject";
import Turbo_CarPartObject from "../carPartsObjects/Turbo_CarPartObject";
import StoredObject_UI from "./storedObject_UI";
export default class InventoryObject extends Phaser.GameObjects.Sprite {
   inventory: any;   
    true_inventory: (Engine_CarPartObject | Body_CarPartObject | Tire_CarPartObject | Turbo_CarPartObject)[];
    test: StoredObject_UI;
    UIgroup: Phaser.GameObjects.Group;
    testDown: Phaser.GameObjects.Rectangle;
    UI_index: number;
    testup: Phaser.GameObjects.Rectangle;
   constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, 'Inventory_Tab');
        scene.sys.updateList.add(this);
        scene.sys.displayList.add(this);

        this.inventory = new Array<(Engine_CarPartObject|Body_CarPartObject|Tire_CarPartObject|Turbo_CarPartObject)>(10);
        this.UIgroup = this.scene.add.group();
        //let inventory: (Engine_CarPartObject|Body_CarPartObject|Tire_CarPartObject|Turbo_CarPartObject)[] = [ ];
        //this.true_inventory=inventory;
        this.testDown=this.scene.add.rectangle(x+400,y+400,100,100,0xff0000);
        this.testDown.setInteractive();
        this.testDown.on('pointerdown',()=>{this.Downlist(this.inventory)})
        this.testup=this.scene.add.rectangle(x+400,y-400,100,100,0x0000ff);
        this.testup.on('pointerdown',()=>{this.UpList(this.inventory)});
        this.testup.setInteractive();

        this.Buildinventory(this.inventory);

        this.printArray(this.inventory);
        this.showUI(x,y,this.inventory);
        //this.setVisible(true);
        this.setInteractive();
        //this.speed=engine_power+handeling+hullstrenght+boots_gain;
        this.UI_index=0



        
        
    }
   
    UpList(Array_list:(Engine_CarPartObject|Body_CarPartObject|Tire_CarPartObject|Turbo_CarPartObject)[]){
        let G =this.UIgroup.getChildren() as StoredObject_UI[];
      //  console.log(G); 
        //console.log(Array_list);
        for(let i=0;(i<G.length)&&(this.UI_index<= Array_list.length) ;i++){
           G[i].carpart=Array_list[this.UI_index-1];
           G[i].updatePicture();
           this.UI_index--;  
           //console.log("uplist",Array_list.length,i); 
          // console.log(G[i]);      
        }

        console.log(this.UI_index);
    }
    Downlist(Array_list:(Engine_CarPartObject|Body_CarPartObject|Tire_CarPartObject|Turbo_CarPartObject)[]){
        let G =this.UIgroup.getChildren() as StoredObject_UI[];
        for(let i=0;(i< G.length)&&(this.UI_index<= Array_list.length) ;i++){
           G[i].carpart=Array_list[this.UI_index+1];
          // G[i].updateData();
           G[i].updatePicture();
        //   console.log(G[i]);
           this.UI_index++;      
              
        }
        console.log(this.UI_index);
    }


    showUI(x,y,Array_list:(Engine_CarPartObject|Body_CarPartObject|Tire_CarPartObject|Turbo_CarPartObject)[]){
       for(let i=0;i<2;i++){
        let list_item=/*this.test=*/new StoredObject_UI(this.scene,x+400,y-100+(i*200),0,Array_list[i]);
        this.UIgroup.add(list_item);    
       }

    }

    printArray(Array_list:(Engine_CarPartObject|Body_CarPartObject|Tire_CarPartObject|Turbo_CarPartObject)[]){
        for(let i=0;i<Array_list.length;i++){
           console.log(Array_list[i].name);
        }
    }
   Buildinventory(Array_list:(Engine_CarPartObject|Body_CarPartObject|Tire_CarPartObject|Turbo_CarPartObject) []){
       for(let i =0;i<=4;i++){
        let x=new Engine_CarPartObject("Engine_Mk"+String(i+1),10,100);
        Array_list[i]=x;
       }
       for(let i=5;i<=8;i++){
        let x=new Body_CarPartObject("Body_Mk"+String(i-4),10,100);
        Array_list[i]=x;
       }
       for(let i=9;i<=12;i++){
        let x=new Tire_CarPartObject("Tire_Mk"+String(i-8),10,100);
        Array_list[i]=x;
       }
       for(let i=13;i<=16;i++){
        let x=new Turbo_CarPartObject("Turbo_Mk"+String(i-12),10,100);
        Array_list[i]=x;
       }
   }

  
   

   preUpdate(){
      // this.y-=1;
       //sthis.rec.y-=1;
   }


   
   
    
    
   




}
