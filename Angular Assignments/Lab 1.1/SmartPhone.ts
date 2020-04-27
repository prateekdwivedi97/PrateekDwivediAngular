import {Mobile} from './mobile'
class SmartPhone extends Mobile
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
var p=new SmartPhone(101,"Motorola",15000,"SmartPhone");
p.printMobDetails();