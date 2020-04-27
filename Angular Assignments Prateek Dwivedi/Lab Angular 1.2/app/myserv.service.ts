import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyservService {

  constructor() { }
  showTodayDate()
  {
    let date=new Date();
    return date;
  }
  showName()
  {
    let name='Mahesh';
    return name;
  }
}
