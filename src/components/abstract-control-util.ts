import { AbstractControl } from '@angular/forms';

export class AbstractControlUtil {
    static isNotPresent(control: AbstractControl): boolean {
        let value = control.value;
        if (value === undefined || value === null) {
            return true;
        }
        return value !== '' ? false : true;
    };

    static addError(control: AbstractControl, errorId: string, value: any) {
        if (!control.errors) {
            control.setErrors({ [errorId]: value });
        } else if (!control.hasError(errorId)) {
            control.errors[errorId] = value;
        }
    }

    static removeError(control: AbstractControl, errorId: string) {
        if (control.errors && control.hasError(errorId)) {
            if (Object.keys(control.errors).length > 1) {
                delete control.errors[errorId];
            } else {
                control.setErrors(null);
            }
        }
    }
}
