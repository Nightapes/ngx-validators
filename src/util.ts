import { AbstractControl } from '@angular/common';

export class Util {
    static isNotPresent(control: AbstractControl): boolean {
        return control.value !== '' ? false : true;
    };
}

