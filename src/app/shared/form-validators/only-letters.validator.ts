import { ValidatorFn, AbstractControl } from '@angular/forms';

export function onlyLettersValidator(): ValidatorFn {
    const pattern: RegExp = /^[a-zA-Zа-яА-Я]*$/m;
    return (control: AbstractControl): {[key: string]: any} | null => {
        if (!(control.dirty || control.touched) || control.value.length === 0) {
            return null;
        } else {
            return pattern.test(control.value.trim()) ? null : {'onlyLetters': {value: control.value}};
        }
    };
}
