import { AbstractControl } from '@angular/forms';

export class Util {
    static isNotPresent(control: AbstractControl): boolean {
        let value = control.value;
        if (value === undefined || value === null) {
            return true;
        }
        return value !== '' ? false : true;
    };

    static addError(control: AbstractControl, errorId: string, value: any) {
        if (!control.errors) {
            control.setErrors({[errorId]: value});
        } else if (!control.hasError(errorId)) {
            control.errors[errorId] = value;
        }
    }

    static removeError(control: AbstractControl, errorId: string) {
        if (control.errors && control.hasError(errorId)) {
            delete control.errors[errorId];
        } 
    }
}
