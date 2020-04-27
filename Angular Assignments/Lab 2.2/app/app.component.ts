import { Component, OnInit } from '@angular/core';
import { MyorderPipe } from './myorder.pipe';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title(title: any) {
    throw new Error("Method has not been implemented.");
  }

  constructor(private orderPipe: MyorderTestPipe1) {
    console.log("order by the digit");
    console.log(this.orderPipe.transform(this.items, 'digit'));
  } 

  items = [
    {empId:100,empName:'Satish',empSal:20000,empDep:'Python',empjoiningdate:'8/10/2016'},
    {empId:101,empName:'Mahesh',empSal:60000,empDep:'Angular',empjoiningdate:'5/09/2018'},
    {empId:102,empName:'Rakesh',empSal:30000,empDep:'.net',empjoiningdate:'10/11/2012'},
  ];
  order = "empId";
  reverse = false;

}
