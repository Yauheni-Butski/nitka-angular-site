import { ValidatorFn, AbstractControl } from '@angular/forms';

export function whiteSpaceValidator(): ValidatorFn {
    const pattern: RegExp = /^\s+$/;
    return (control: AbstractControl): {[key: string]: any} | null => {
        if (!(control.dirty || control.touched) || control.value.length === 0) {
            return null;
        } else {
            return pattern.test(control.value) ? {'whiteSpace': {value: control.value}} : null;
        }
    };
}
