export default class Tire_CarPartObject  {
    power: number;
    name: string;   
    durablity: number;
    nulled: boolean;
    index:number;
    constructor(name:string,power:number,Durablity:number) {
         this.name=name;
         this.durablity=Durablity;  
         this.power=power*this.durablity;  
              
     } 
     EmptyValue(){
        this.name='';
        this.durablity=-10;
        this.power= -10;
        this.nulled=true;
    }
 }
 