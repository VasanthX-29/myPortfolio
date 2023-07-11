import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  isdisabled=true;
  pname='';
  pdob='';
  pemail='';
  ppwd='';
  pcpwd='';
  checkFields() {
   
    if (
      this.pname &&
      this.pdob &&
      this.pemail &&
      this.ppwd &&
      this.pcpwd
    ) {
      this.isdisabled = false; // Enable the button
    } else {
      this.isdisabled = true; // Disable the button
    }
  }

  submit(userForm : any)
  {
    console.log('Form submitted',userForm)
  }

}
