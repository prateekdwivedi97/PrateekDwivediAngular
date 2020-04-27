import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';
import { Form } from './form';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error("Method has not been implemented.");
  }
 
  constructor(){}
  model=new Form(100,"Prateek",30000,"Java");
  
  onSubmit(){
 
    alert(this.model.ID+" "+this.model.Name+" "+this.model.Sal+" "+this.model.Dept);
  }
 get FormData(){return JSON.stringify(this.model)}
}
