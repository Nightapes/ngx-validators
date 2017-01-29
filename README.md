# ng2-validators [![Build Status](https://travis-ci.org/Nightapes/ng2-validators.svg?branch=master)](https://travis-ci.org/Nightapes/ng2-validators.svg?branch=master)

An implementation of various angular validators for Angular 2.

List of validators

1. Password
1. Email
1. Universal
1. Creditcards

## Password validators

The rules are from https://github.com/vt-middleware/passay

The password validators are:

* repeatCharacterRegexRule
* whitespaceRule (moved to UniversalValidators)
* allowedCharacterRule
* alphabeticalCharacterRule
* digitCharacterRule
* lowercaseCharacterRule
* uppercaseCharacterRule
* more will come

## Email validators

* simple (only checks if it looks like a mail)
* normal (follows the [HTML5](https://www.w3.org/TR/html5/forms.html#valid-e-mail-address) rules)

## Universal validators

* noWhitespace
* isNumber
* isInRange
* minLength
* maxLength

## Creditcard validators

* americanexpress
* visa
* dinersclub
* discover
* jcb
* maestro
* mastercard

## Install

```
npm install ng2-validators --save
```


## How to use [model driven]

needs: ```ReactiveFormsModule```

### Passwords

```
import {PasswordValidators} from 'ng2-validators'

...
password: FormControl = new FormControl('', Validators.compose([
        PasswordValidators.repeatCharacterRegexRule(4),
        PasswordValidators.whitespaceRule(),
        PasswordValidators.alphabeticalCharacterRule(1);
        PasswordValidators.digitCharacterRule(1);
        PasswordValidators.lowercaseCharacterRule(1);
        PasswordValidators.uppercaseCharacterRule(1);
        PasswordValidators.allowedCharacterRule(['a', 'b']);
    ]));
```


### Password mismatch

```
import {PasswordValidators} from 'ng2-validators'

...

let password: FormControl = new FormControl('testPassword');
let confirmPassword: FormControl = new FormControl('testPassword');
let form = new FormGroup({
    'newPassword': password,
    'confirmPassword': confirmPassword
}, PasswordValidators.mismatchedPasswords()
);

```

#### Override control name

```
import {PasswordValidators} from 'ng2-validators'

...

let password: FormControl = new FormControl('testPassword');
let confirmPassword: FormControl = new FormControl('testPassword');
let form = new FormGroup({
    'testName': password,
    'testName2': confirmPassword
}, PasswordValidators.mismatchedPasswords('testName', 'testName2' )
);

```


### Email

```
import {EmailValidators} from 'ng2-validators'

...

email: FormControl = new FormControl('', EmailValidators.normal());
email2: FormControl = new FormControl('', EmailValidators.simple());
```

### Universal

```
import {UniversalValidators} from 'ng2-validators'

...

control: FormControl = new FormControl('', UniversalValidators.noWhitespace());
control: FormControl = new FormControl('', UniversalValidators.isNumber());
control: FormControl = new FormControl('', UniversalValidators.isInRange(2, 5));
control: FormControl = new FormControl('', UniversalValidators.minLength(2));
control: FormControl = new FormControl('', UniversalValidators.maxLength(7));
control: FormControl = new FormControl('', UniversalValidators.min(2));
control: FormControl = new FormControl('', UniversalValidators.max(2));
```

### Creditcards

```
import {CreditCardValidators} from 'ng2-validators'

...

control: FormControl = new FormControl('', UniversalValidators.isCreditCard());
control: FormControl = new FormControl('', UniversalValidators.americanExpress());
control: FormControl = new FormControl('', UniversalValidators.dinersclub());
control: FormControl = new FormControl('', UniversalValidators.discover());
control: FormControl = new FormControl('', UniversalValidators.jcb());
control: FormControl = new FormControl('', UniversalValidators.maestro());
control: FormControl = new FormControl('', UniversalValidators.mastercard());
control: FormControl = new FormControl('', UniversalValidators.visa());

```

### Phonenumber

```
import {PhoneValidators} from 'ng2-validators'

...

countryCode: FormControl = new FormControl('', PhoneValidators.isValidRegionCode());
phone: FormControl = new FormControl('', PhoneValidators.isPhoneNumber());
phone2: FormControl = new FormControl('', PhoneValidators.isPossibleNumberWithReason());
```


## How to use [template driven][beta]

needs ```FormsModule and ValidatorsModule ```

```
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ValidatorsModule } from 'ng2-validators'

import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule, FormsModule, ValidatorsModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
```

### Password
```
<form>
<input type="password" [(ngModel)]="model.password" name="password" #formControl="ngModel" password>
<span *ngIf="formControl.hasError('repeatCharacterRegexRule')">Password contains repeating characters</span>
<span *ngIf="formControl.hasError('digitCharacterRule')">Password should contain at least on digit</span>
<span *ngIf="formControl.hasError('alphabeticalCharacterRule')">Password should contain at least on alphabetical character</span>
<span *ngIf="formControl.hasError('lowercaseCharacterRule')">Password should contain at least on lowercase character</span>
<span *ngIf="formControl.hasError('uppercaseCharacterRule')">Password should contain at least on uppercase character</span>
</form>

// Override values
<input type="password" [(ngModel)]="model.password" name="password" #formControl="ngModel"
    password
    [repeatCharacter]="2"
    [alphabeticalCharacter]="2"
    [digitCharacter]="2"
    [lowercaseCharacter]="2"
    [uppercaseCharacter]="2"
>

```

### Creditcard
```
<form>

<input type="text" [(ngModel)]="model.creditcard" name="creditcard" #formControl="ngModel" creditCard>
<span *ngIf="formControl.hasError('creditcard')">Is not a creditcard</span>
</form>

// Override values
// Test only for a specific creditcard
<input type="text" [(ngModel)]="model.creditcard" name="creditcard" #formControl="ngModel" [creditCard]="all|americanExpress|dinersclub|discover|jcb|maestro|mastercard|visa">

```

### Email
```
<form>
<input type="text" [(ngModel)]="model.email" name="email" #formControl="ngModel" email>
<span *ngIf="formControl.hasError('normalEmailRule')">Is not a email</span>
</form>

```

### Phone


#### Valid Phone

```
<form>
<input type="text" [(ngModel)]="model.phone" name="phone" #formControl="ngModel" phone="US">
<span *ngIf="formControl.hasError('noValidRegionCode')">Is not a countryCode</span>
<span *ngIf="formControl.hasError('noPhoneNumber')">Is not a phone number</span>
</form>

```

#### Possible Phone

```
<form>
<input type="text" [(ngModel)]="model.phone" name="phone" #formControl="ngModel" possiblePhone="US">
<span *ngIf="formControl.hasError('noValidRegionCode')">Is not a countryCode</span>
<span *ngIf="formControl.hasError('phoneNumberTooLong')">Phone number is to long</span>
<span *ngIf="formControl.hasError('phoneNumberTooShort')">Phone number is to short</span>
<span *ngIf="formControl.hasError('noPhoneNumber')">Is not a phone number</span>
</form>

```

#### CountryCode

```
<form>
<input type="text" [(ngModel)]="model.countryCode" name="countryCode" #formControl="ngModel" countryCode>
<span *ngIf="formControl.hasError('noValidRegionCode')">Is not a countryCode</span>
</form>

```

### Universal

#### whitespace

```
<form>
<input type="text" [(ngModel)]="model.firstname" name="firstname" #formControl="ngModel" noWhitespace>
<span *ngIf="formControl.hasError('noWhitespaceRequired')">Should not contain a whitespace</span>
</form>
```

#### isNumber

```
<form>
<input type="number" [(ngModel)]="model.amount" name="amount" #formControl="ngModel" isNumber>
<span *ngIf="formControl.hasError('numberRequired')">Needs to be a number</span>
</form>
```

#### isInRange

```
<form>
<input type="number" [(ngModel)]="model.amount" name="amount" #formControl="ngModel" isInRange  [minValue]="2" [maxValue]="4">
<span *ngIf="formControl.hasError('numberRequired')">Needs to be a number</span>
<span *ngIf="formControl.hasError('rangeValueToSmall')">Number to small</span>
<span *ngIf="formControl.hasError('rangeValueToBig')">Number to big</span>
</form>
```
#### min

```
<form>
<input type="number" [(ngModel)]="model.amount" name="amount" #formControl="ngModel" [min]="2">
<span *ngIf="formControl.hasError('numberRequired')">Needs to be a number</span>
<span *ngIf="formControl.hasError('min')">Number to small</span>
</form>
```
#### max

```
<form>
<input type="number" [(ngModel)]="model.amount" name="amount" #formControl="ngModel" [max]="2">
<span *ngIf="formControl.hasError('numberRequired')">Needs to be a number</span>
<span *ngIf="formControl.hasError('max')">Number to small</span>
</form>
```

##Todo

* Implement  https://github.com/mailcheck/mailcheck
* Add more password rules
* Add address validator

Get the complete changelog here: https://github.com/Nightapes/ng2-validators/releases

