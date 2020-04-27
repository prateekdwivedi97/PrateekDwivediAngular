import {Mobile} from './mobile'
class BasicPhone extends Mobile
{
mobType:string;
constructor(mobId:number, mobName:string, mobCost:number,mobType:string)
{
super(mobId,mobName,mobCost);
this.mobType=mobType;
}
printMobDetails():void{
    console.log("MobId:"+this.mobId);
    console.log("MobName:"+this.mobName);
    console.log("MobCost:"+this.mobCost);
console.log("MobType:"+this.mobType);
}
}
var c=new BasicPhone(100,"Redmi",25000,"BasicPhone");
c.printMobDetails();