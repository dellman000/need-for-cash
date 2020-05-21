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
    startIndex: any;
    list_item: StoredObject_UI;
    car_Array: (Engine_CarPartObject | Body_CarPartObject | Tire_CarPartObject | Turbo_CarPartObject)[];
    UIgroupEquiped: Phaser.GameObjects.Group;
   constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, 'Inventory_Tab');
        scene.sys.updateList.add(this);
        scene.sys.displayList.add(this);
        this.startIndex=0;
        this.car_Array=new Array<(Engine_CarPartObject|Body_CarPartObject|Tire_CarPartObject|Turbo_CarPartObject)>(4);
        this.inventory = new Array<(Engine_CarPartObject|Body_CarPartObject|Tire_CarPartObject|Turbo_CarPartObject)>(10);
        this.UIgroupEquiped=this.scene.add.group();
        this.nulledEquiped(this.car_Array);
        this.on('pointerover',()=>{this.closeDescription()})
        this.ShowUI_equiped(x-200,y-200,this.car_Array);
        //x=800,y=330
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
        //this.printArray(this.inventory);
        this.showUI(x,y,this.inventory,this.car_Array);
        //this.setVisible(true);
        this.setInteractive();
        //this.speed=engine_power+handeling+hullstrenght+boots_gain;
        this.UI_index=0
       
    }
  







    UpList(Array_list:(Engine_CarPartObject|Body_CarPartObject|Tire_CarPartObject|Turbo_CarPartObject)[]){
        let G =this.UIgroup.getChildren() as StoredObject_UI[];
        for(let i=G.length-1;(i != -1);i--){
            G[i].carpart=Array_list[this.UI_index-1];
            G[i].updatePicture(); 
            G[i].update_description();
            G[i].decription.setVisible(false);
            this.UI_index--;
           
         }

    }
    Downlist(Array_list:(Engine_CarPartObject|Body_CarPartObject|Tire_CarPartObject|Turbo_CarPartObject)[]){
        let G =this.UIgroup.getChildren() as StoredObject_UI[];
        for(let i=0;(i< G.length);i++){
           G[i].carpart=Array_list[this.UI_index+1];
           G[i].updatePicture();
           G[i].update_description();
           G[i].decription.setVisible(false);
           this.UI_index++;  
           console.log(this.UI_index);    
        }
        
    }
    closeDescription(){
        let G=this.UIgroup.getChildren() as StoredObject_UI[];
        for(let i=0;i<G.length;i++){
            G[i].decription.setVisible(false);
            G[i].view_description.setVisible(false)
            G[i].showing=false;
        }
        G=this.UIgroupEquiped.getChildren() as StoredObject_UI[];
        for(let i=0;i<G.length;i++){
            G[i].decription.setVisible(false);
            G[i].view_description.setVisible(false)
            G[i].showing=false;
        }
    }



    AddToCar(Item:(Engine_CarPartObject|Body_CarPartObject|Tire_CarPartObject|Turbo_CarPartObject),
        Array_list:(Engine_CarPartObject|Body_CarPartObject|Tire_CarPartObject|Turbo_CarPartObject)[]){
        let parts =new Array<String>(4)
        parts=["Engine_Mk","Body_Mk","Tire_Mk","Turbo_Mk"];
        let Icon=Item.name;
        let inserted=false
        Icon= Icon.substr(0,Icon.length-1);
        let index=0;
        console.log(Icon);

        for(let i=0;i<=3;i++){
            console.log("comparing ",Icon," to ",parts[i])
            if(Icon==parts[i]){
                Array_list[i]=Item;
                Array_list[i].nulled=false;
                inserted=true;
                index=i;
                
                
            }
        }
        if(inserted==true){
            
           // console.log("inserted true");
           // console.log(Array_list[index]);
            Array_list[index]=Item;
            this.UpdateEquipedUI(index,Array_list);
        }
        else{
            console.log("inserted false");
        }
       
    
    }
    


    UpdateEquipedUI(index:number,Array_list:(Engine_CarPartObject|Body_CarPartObject|Tire_CarPartObject|Turbo_CarPartObject)[]){
        let G=this.UIgroupEquiped.getChildren() as StoredObject_UI[];
        //for(let i=0;i<G.length;i++){
            G[index].carpart=Array_list[index];
            G[index].updatePicture();
            //console.log(G[index].carpart);

            
       // }
    }

    ShowUI_equiped(x,y,Array_list:(Engine_CarPartObject|Body_CarPartObject|Tire_CarPartObject|Turbo_CarPartObject)[]){
    for(let i=0;i<=3;i++){
         if(Array_list[i].nulled==true){
        let equipedUI= new StoredObject_UI(this.scene,x+300,y+(i*150),i,Array_list[i])
        equipedUI.setTexture('EquipItem');
        this.UIgroupEquiped.add(equipedUI);
        }
        else{
            let equipedUI= new StoredObject_UI(this.scene,x+300,y+(i*150),i,Array_list[i]);
            equipedUI.updatePicture();
            this.UIgroupEquiped.add(equipedUI);
        }    
}
    }

    showUI(x,y,Array_list:(Engine_CarPartObject|Body_CarPartObject|Tire_CarPartObject|Turbo_CarPartObject)[],
    Array_list_car:(Engine_CarPartObject|Body_CarPartObject|Tire_CarPartObject|Turbo_CarPartObject)[]){
       for(let i=0;i<=2;i++){
        let list_item=new StoredObject_UI(this.scene,x+400,y-200+(i*200),i,Array_list[i]);
        list_item.green_button.setInteractive();
       list_item.green_button.on('pointerdown',()=>{this.AddToCar(list_item.carpart, Array_list_car); });
        this.UIgroup.add(list_item);    
       }

    }

    printArray(Array_list:(Engine_CarPartObject|Body_CarPartObject|Tire_CarPartObject|Turbo_CarPartObject)[]){
        for(let i=0;i<Array_list.length;i++){
           //console.log(Array_list[i].name);
        }
    }


nulledEquiped(Array_list:(Engine_CarPartObject|Body_CarPartObject|Tire_CarPartObject|Turbo_CarPartObject)[]){
    for(let i=0;i<Array_list.length;i++){
        let x =new Engine_CarPartObject('',-10,-10);
        x.EmptyValue();
       
        Array_list[i]=x;
        console.log(Array_list[i].nulled);
    }
}



   Buildinventory(Array_list:(Engine_CarPartObject|Body_CarPartObject|Tire_CarPartObject|Turbo_CarPartObject) []){
       for(let i =0;i<=4;i++){
        let x=new Engine_CarPartObject("Engine_Mk"+String(i+1),10,1);
        Array_list[i]=x;
        x.index=i;
       }
       for(let i=5;i<=8;i++){
        let x=new Body_CarPartObject("Body_Mk"+String(i-4),10,1);
        Array_list[i]=x;
        x.index=i;
       }
       for(let i=9;i<=12;i++){
        let x=new Tire_CarPartObject("Tire_Mk"+String(i-8),10,1);
        Array_list[i]=x;
        x.index=i;
       }
       for(let i=13;i<=16;i++){
        let x=new Turbo_CarPartObject("Turbo_Mk"+String(i-12),10,1);
        Array_list[i]=x;
        x.index=i;
       }
   }

  ReturnEngine(){
    return this.car_Array[0];
  }
  ReturnBody(){
      return this.car_Array[1]
  }
  ReturnTire(){
      return this.car_Array[2]
  }
  ReturnTurbo(){
      return this.car_Array[3]
  }

  moveBack(){
     // console.log("hello move back")
     let back=1550;
     this.x-=back;
    let G= this.UIgroupEquiped.getChildren() as StoredObject_UI[];
    
   
   for(let i=0;i<G.length;i++){
      G[i].x-=back;
      G[i].decription.x-=back;
      G[i].itemframe.x-=back;
      G[i].green_button.x -=back;
      G[i].red_button.x-= back;
      G[i].view_description.x-=back;
    }
    G=this.UIgroup.getChildren() as StoredObject_UI[];
    for(let i=0;i<G.length;i++){
        G[i].x-=back;
        G[i].decription.x-=back;
        G[i].itemframe.x-=back;
        G[i].green_button.x -=back;
        G[i].red_button.x-= back;
        G[i].view_description.x-=back;
    }
    this.testDown.x-=back;
    this.testup.x-=back;
    
}
movefront(){
    let back=-1550;
     this.x-=back;
    let G= this.UIgroupEquiped.getChildren() as StoredObject_UI[];
    
   
   for(let i=0;i<G.length;i++){
      G[i].x-=back;
      G[i].decription.x-=back;
      G[i].itemframe.x-=back;
      G[i].green_button.x -=back;
      G[i].red_button.x-= back;
      G[i].view_description.x-=back;
    }
    G=this.UIgroup.getChildren() as StoredObject_UI[];
    for(let i=0;i<G.length;i++){
        G[i].x-=back;
        G[i].decription.x-=back;
        G[i].itemframe.x-=back;
        G[i].green_button.x -=back;
        G[i].red_button.x-= back;
        G[i].view_description.x-=back;
    }
    this.testDown.x-=back;
    this.testup.x-=back;
}
   

   preUpdate(){
      // this.y-=1;
       //sthis.rec.y-=1;
   }


   
   
    
    
   




}
