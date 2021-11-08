import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { comparePassword } from 'src/shared/comparePassword';

@Component({
  selector: 'app-formdemo',
  templateUrl: './formdemo.component.html',
  styleUrls: ['./formdemo.component.scss']
})
export class FormdemoComponent implements OnInit {
     isSubmitted: boolean= false;
    
     countries = ['india', 'japan', 'dubai']; 
    //  storeArray = [this.add()];
  
  registerForm = new FormGroup({
    name: new FormControl('vamshi',Validators.required),
    email: new FormControl('vamshi@gmail.com', [Validators.required, Validators.email]),
    
    createPassword: new FormControl(''),
    confirmPassword: new FormControl(''),

    country: new FormControl(''),
    gender: new FormControl(),


    storeDetails: new FormArray([this.add()])


    // bankdetails: new FormGroup({
    //     formgroup indide formgroup nested array
    // })

  }, [comparePassword]);    
   

  // comparePassword(control: AbstractControl)  {
  //   const v = control as FormGroup 
  //   if(v.controls.confirmPassword.value === v.controls.createPassword.value)
  //   v.controls.confirmPassword.setErrors({match: 'matched'});
  //   else
  //   v.controls.confirmPassword.setErrors({match: 'not matching'});

  //   // var alphanumeric = "someStringHere";
  //   var myRegEx  = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/i; 
  //   var isValid = !(myRegEx.test(v.controls.confirmPassword.value));
  //   if(!isValid){
  //     v.controls.confirmPassword.setErrors({match: 'true'});
  //   } else{
  //     v.controls.confirmPassword.setErrors({match: 'should be in alphanumeric'});
  //   }
    

  //   return v;

  // }


  add() {
    return new FormGroup({
      storename: new FormControl('vamshi',Validators.required),
      categories: new FormControl('vamshi',Validators.required),
    });
  }


  get sample() {
    return (this.registerForm.controls['storeDetails'] as FormArray).controls;
  }


  addItem() {
    ( this.registerForm.controls['storeDetails'] as FormArray).push(this.add());
    // this.storeArray.push(this.add());
  }

  removeItem(id: number)  {
   ( this.registerForm.controls['storeDetails'] as FormArray).removeAt(id); 
        //  this.storeArray.pop();
  }



  constructor() { }

  ngOnInit(): void {

    // this.registerForm.controls['name'].setValue('vamshi');
    // this.registerForm.patchValue(  {name: ''});
    // this.registerForm.controls['name'].setValidators(Validators.minLength(5));

  }


  submit() {
    this.isSubmitted= true;
    console.log(this.registerForm);
    console.log(this.registerForm.value);

    console.log(this.registerForm.controls.name?.errors?.required);
    console.log(this.registerForm.controls['email']?.errors?.required);
  }

}
