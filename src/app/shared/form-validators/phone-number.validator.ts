import { ValidatorFn, AbstractControl } from '@angular/forms';

export function phoneNumberValidator(): ValidatorFn {
    const pattern: RegExp = /^[0-9]{10,12}$/im;
    return (control: AbstractControl): {[key: string]: any} | null => {
        if (!(control.dirty || control.touched) || control.value.length === 0) {
            return null;
        } else {
            return pattern.test(control.value) ? null : {'phoneNumber': {value: control.value}};
        }
    };
}
