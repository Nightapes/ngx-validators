import {Util} from '../src/util';
import {FormControl} from '@angular/forms';

export function main() {

    describe('Util service', () => {

        describe('isNotPresent', () => {

            it('should work for empty control', () => {
                let control: FormControl = new FormControl('');
                let validated = Util.isNotPresent(control);
                expect(validated).toBeTruthy();
            });

            it('should work for control with text', () => {
                let control: FormControl = new FormControl('aaabbbccc');
                let validated = Util.isNotPresent(control);
                expect(validated).toBeFalsy();
            });

        });

    });
}
