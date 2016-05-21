import {Util} from '../src/util';
import {Control} from '@angular/common';

export function main() {

    describe('Util service', () => {

        describe('isNotPresent', () => {

            it('should work for empty control', () => {
                let control: Control = new Control('');
                let validated = Util.isNotPresent(control);
                expect(validated).toBeTruthy();
            });

            it('should work for control with text', () => {
                let control: Control = new Control('aaabbbccc');
                let validated = Util.isNotPresent(control);
                expect(validated).toBeFalsy();
            });

        });

    });
}