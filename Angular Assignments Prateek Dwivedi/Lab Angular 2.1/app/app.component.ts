import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab21';
  id:number;
name:string;
salary:number;
department:string;
  Emp=[
    {'id':100,'name':"Pawan",'salary':5000,'department':".net"},
    {'id':101,'name':"Aman",'salary':21000,'department':"JDBC"},
    {'id':102,'name':"Satish",'salary':35000,'department':"Python"}
    ] 
  
  Add () {
      var employee={id:this.id,name:this.name,salary:this.salary,department:this.department};
      this.Emp.push(employee);
  }
  onSubmit()
  {
    alert(this.id+" "+this.name+" "+this.salary+" "+this.department);
  }
delete(id:number)
{
  for (let i = this.Emp.length - 1; i>= 0; i--) {
      if (this.Emp[i].id === id) {
          this.Emp.splice(i, 1);
      }
  }
}
newid:number;
newname:string;
newsalary:number;
newdepartment:string;
update(id:number,name:string,salary:number,department:string)
{
  this.newid=id;
  this.newname=name;
  this.newsalary=salary;
  this.newdepartment=department;
  }
editrow(id:number,name:string,salary:number,department:string)
{
  for(let i=0;i<this.Emp.length;i++){
    let e=this.Emp[i];
    if(e.id==id){
      console.log(name);
      this.Emp.splice(i,1);  
      this.Emp.push({id,name,salary,department});
      console.log(e.name);
      break;
    }
}
}

}