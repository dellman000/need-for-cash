export default class Engine_CarPartObject  {
    power: any;
    name: string;  
    durablity: number; 
    constructor(name:string,power:number,Durablity:number) {
         this.name=name;
         this.power=power*this.durablity;     
         this.durablity=Durablity;     
     } 
 }
 