import { Component,OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import {PservService} from './pserv.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error("Method has not been implemented.");
  }
  
  addForm:FormGroup;
  submitted:boolean=false; 
  constructor(public formBuilder: FormBuilder,public pservService : PservService) { }

  ngOnInit() {
    this.addForm =this.formBuilder.group({
      productId:['',[Validators.required]],

      producName:['',[Validators.required]],
      productCost: ['',[Validators.required]],
    });
  }

  addProduct(){
    this.submitted=true;
    if(this.addForm.invalid)
    {
      return;
    }
    this.pservService.addProduct(this.addForm.value);
   
  }

}



