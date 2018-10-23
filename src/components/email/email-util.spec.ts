import { EmailValidators } from './email-validators';
import { FormControl } from '@angular/forms';
import { EmailSuggestion } from './email-util';

fdescribe('Email util service', () => {
    describe('check split', () => {

        let emailSuggestion: EmailSuggestion = new EmailSuggestion();

        it('should work splitting emails', () => {
            const mail = [
                'prettyandsimple@example.com',
                'very.common@example.com',
                'disposable.style.email.with+symbol@example.com',
                'other.email-with-dash@example.com',
                'x@example.com',
                'example@s.solutions',
                'example-indeed@strange-example.com',

            ];

            mail.forEach(element => {
                let result = emailSuggestion.splitEmail(element)
                console.log(result)
                expect(result).toBeDefined();
            });

        });

    });
});