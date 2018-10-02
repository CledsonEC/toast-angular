import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';

import { ToastModule } from 'ng2-toastr/ng2-toastr';


import { AppComponent } from './app.component';
import { ToastOptions } from 'ng2-toastr/src/toast-options';
import { ToastComponent } from './toast/toast.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastModule.forRoot()
  ],
  providers: [
    {provide: ToastOptions, useClass: ToastComponent},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
