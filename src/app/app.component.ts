import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validPass } from './passwordValidators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'form-validation';
  submitted:boolean=false;
  registerForm:FormGroup;

  constructor(private formbuilder:FormBuilder)
  {

  }

  ngOnInit()
  {
    this.registerForm=this.formbuilder.group(
      {
        firstname : ['',Validators.required],
        lastname : ['',Validators.required],
        email : ['',[Validators.required,Validators.email]],
        password: ['',[Validators.required,Validators.minLength(8)]],
        conpass : ['',[Validators.required]],
        tandc : [false,Validators.requiredTrue]
      },{validators:validPass('password','conpass')})
  }

  get h()
  {
    return this.registerForm.controls;

  }
  

  onSubmit=()=>
  {
    this.submitted=true;
    console.log(this.registerForm);
  }

  onReset=()=>
  {
    this.submitted=false;
    this.registerForm.reset();
  }
}
