import { AbstractControl } from '@angular/forms';

export class Util {
    static isNotPresent(control: AbstractControl): boolean {
        return control.value !== '' ? false : true;
    };
}

