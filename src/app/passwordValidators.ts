import { FormGroup } from "@angular/forms";

export function validPass(cont:string, compCont:string)
{
    return (formgroup:FormGroup)=>
    {
        const passwordField = formgroup.controls[cont];
        const conpassField = formgroup.controls[compCont];

        if(passwordField.value!=conpassField.value)
        {
            conpassField.setErrors({missmatch:true});
        }
        else
        {
            conpassField.setErrors(null);
        }
    };
}