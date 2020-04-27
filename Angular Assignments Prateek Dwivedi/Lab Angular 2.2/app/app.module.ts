import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MyorderTestPipe1 } from './myorder.pipe';
@NgModule({
  declarations: [
    AppComponent,
    MyorderTestPipe1
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [MyorderTestPipe1],
  bootstrap: [AppComponent]
})
export class AppModule { }
