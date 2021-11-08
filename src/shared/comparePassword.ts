import { AbstractControl, FormGroup } from "@angular/forms";


export function comparePassword(control: AbstractControl)  {
    const v = control as FormGroup 
    if(v.controls.confirmPassword.value === v.controls.createPassword.value)
    v.controls.confirmPassword.setErrors({match: 'matched'});
    else
    v.controls.confirmPassword.setErrors({match: 'not matching'});

    // var alphanumeric = "someStringHere";
    var myRegEx  = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/i; 
    var isValid = !(myRegEx.test(v.controls.confirmPassword.value));
    if(!isValid){
      v.controls.confirmPassword.setErrors({match: 'true'});
    } else{
      v.controls.confirmPassword.setErrors({match: 'should be in alphanumeric'});
    }
    

    return v;

  }