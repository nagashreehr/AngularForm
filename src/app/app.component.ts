import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { user } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('userForm') userFormControl: NgForm
  title = 'AngularTask2';
  user:user;
  userModel: user;


  constructor(){
    this.user = {firstname:'',lastname:'',email: '',country:'',gender:''}

  }
  onSubmitButtonClick(userForm: any){
    this.userModel=userForm.value;
    console.log(userForm.value.firstname);
  }
}
