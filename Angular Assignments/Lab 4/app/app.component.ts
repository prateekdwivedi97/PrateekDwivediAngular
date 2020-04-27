import { Component,OnInit,ChangeDetectionStrategy } from '@angular/core';
import { user } from './user';
import { MyservService } from './myserv.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit{
  title = 'servicepipes';
 data:Array<Map<string, string>>;
  headers: Array<string>;
  filters:Array<Ifilter>;
  constructor(){ }
    ngOnInit() {
      this.data = new Array(
        new Map([["Book ID","10"],["Book Title","BBB"],["Book Author","XYZ"],["Book Year of Publish","1998"]]),
        new Map([["Book ID","11"],["Book Title","AAA"],["Book Author","ABC"],["Book Year of Publish","2000"]]),
        new Map([["Book ID","12"],["Book Title","DDD"],["Book Author","BHU"],["Book Year of Publish","2014"]]),
      );
      this.headers=Array.from((this.data[0]).keys());
      this.filters=new Array({ header: "Book ID",filter:""},{ header: "Book Title",filter:""},{ header: "Book Author",filter:""},{ header: "Book Year of Publish",filter:""})
    }
  }
  export interface Ifilter{ header: string; filter:string;}

