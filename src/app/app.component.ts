import { Component,ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import {ToastOptions} from 'ng2-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends ToastOptions {
  title = 'app';

  constructor(public toastr: ToastsManager, vcr: ViewContainerRef) {
    super()
    this.toastr.setRootViewContainerRef(vcr);
  }
    showSuccess() {
       //this.toastr.success('You are awesome!', 'Sucesso!',{closeButton: 'true'});
       
        this.toastr.success('This toast will dismiss in 10 seconds.', null);
     }
   
     showError() {
       this.toastr.error('This is not good!', 'Oops!');
     }
   
     showWarning() {
       this.toastr.warning('You are being warned.', 'Alert!');
     }
   
     showInfo() {
       this.toastr.info('Just some information for you.');
     }
     
     showCustom() {
       this.toastr.custom('<span style="color: red">Message in red.</span>', null, {enableHTML: true});
     }

}
