import { AbstractControl } from '@angular/forms';

export class Util {
    static isNotPresent(control: AbstractControl): boolean {
        let value = control.value;
        if (value === undefined || value === null) {
            return true;
        }
        return value !== '' ? false : true;
    };
}

