import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
@Injectable()
export class MyservService {
http:HttpClient;
booklist:BookList[]=[];
  constructor(http:HttpClient) {
    this.http=http;
   }
   fetched:boolean=false;
   fetchBookLists(){
    this.http.get('./data/booklist.json').subscribe(
      data=>{
        if(!this.fetched){  
          this.convert(data); 
          this.fetched=true;
        }
      });        
   }
   getBookLists():BookList[]{
     return this.booklist;
}
convert(data:any){ 
 for(let obj of data){
   let b=new BookList(obj.id,obj.title,obj.authorName,obj.year);
   this.booklist.push(b); 
 }
}
delete(eid:number){
let foundIndex:number=-1;
for(let i=0;i<this.booklist.length;i++){
   let e=this.booklist[i];
   if(eid==e.id){
     foundIndex=i ;
     break;
   }
}
this.booklist.splice(foundIndex,1);  
}
update(eid:any)
{
for(let i=0;i<this.booklist.length;i++){
   let e=this.booklist[i];
   if(eid.id==e.id){
     console.log(eid.title);
     this.booklist.splice(i,1);  
     this.booklist.push(eid);
     console.log(e.title);
     break;
   }
}
}
add(e:BookList){
 this.booklist.push(e);
}
}
export class BookList{
id:number;
title:string;
author:string;
year:number;
constructor(id:number,title:string,author:string,year:number){
 this.id=id;
 this.title=this.title;
 this.author=this.author;
 this.year=this.year;
}
}
 
