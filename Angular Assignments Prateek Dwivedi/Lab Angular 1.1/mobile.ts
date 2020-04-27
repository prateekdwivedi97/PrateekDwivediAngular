export class Mobile{
mobId:number;
mobName:string;
mobCost:number;
constructor(mobId:number, mobName:string, mobCost:number)
{
this.mobId=mobId;
this.mobName=mobName;
this.mobCost=mobCost;
}
printMobDetails():void{
    console.log("MobId:"+this.mobId);
    console.log("MobName:"+this.mobName);
    console.log("MobCost:"+this.mobCost);
}
}