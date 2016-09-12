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
npm install ng2-validators
```


## How to use [model driven]

needs: ```ReactiveFormsModule```

### Passwords

```
@import {PasswordValidators} from 'ng2-validators/ng2-validators'

...
password: Control = new Control('', Validators.compose([
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
@import {PasswordValidators} from 'ng2-validators/ng2-validators'

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
@import {PasswordValidators} from 'ng2-validators/ng2-validators'

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
@import {EmailValidators} from 'ng2-validators/ng2-validators'

...

email: Control = new Control('', EmailValidators.normal());
email2: Control = new Control('', EmailValidators.simple());
```

### Universal

```
@import {UniversalValidators} from 'ng2-validators/ng2-validators'

...

control: Control = new Control('', UniversalValidators.noWhitespace());
control: Control = new Control('', UniversalValidators.isNumber());
control: Control = new Control('', UniversalValidators.isInRange(2, 5));
control: Control = new Control('', UniversalValidators.minLength(2));
control: Control = new Control('', UniversalValidators.maxLength(7));
control: Control = new Control('', UniversalValidators.min(2));
control: Control = new Control('', UniversalValidators.max(2));
```

### Creditcards

```
@import {CreditCardValidators} from 'ng2-validators/ng2-validators'

...

control: Control = new Control('', UniversalValidators.isCreditCard());
control: Control = new Control('', UniversalValidators.americanExpress());
control: Control = new Control('', UniversalValidators.dinersclub());
control: Control = new Control('', UniversalValidators.discover());
control: Control = new Control('', UniversalValidators.jcb());
control: Control = new Control('', UniversalValidators.maestro());
control: Control = new Control('', UniversalValidators.mastercard());
control: Control = new Control('', UniversalValidators.visa());

```


## How to use [template driven][beta]

needs ```FormsModule and ValidatorsModule ```

```
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ValidatorsModule } from 'ng2-validators/ng2-validators'

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
<p *ngIf="formControl.hasError('repeatCharacterRegexRule')">Password contains repeating characters</p>
<p *ngIf="formControl.hasError('digitCharacterRule')">Password should contain at least on digit</p>
<p *ngIf="formControl.hasError('alphabeticalCharacterRule')">Password should contain at least on alphabetical character</p>
<p *ngIf="formControl.hasError('lowercaseCharacterRule')">Password should contain at least on lowercase character</p>
<p *ngIf="formControl.hasError('uppercaseCharacterRule')">Password should contain at least on uppercase character</p>
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
<p *ngIf="formControl.hasError('creditcard')">Is not a creditcard</p>
</form>

// Override values
// Test only for a specific creditcard
<input type="text" [(ngModel)]="model.creditcard" name="creditcard" #formControl="ngModel" [creditCard]="all|americanExpress|dinersclub|discover|jcb|maestro|mastercard|visa">

```

### Email
```
<form>
<input type="text" [(ngModel)]="model.email" name="email" #formControl="ngModel" email>
<p *ngIf="formControl.hasError('normalEmailRule')">Is not a email</p>
</form>

```

### Universal

#### whitespace

```
<form>
<input type="text" [(ngModel)]="model.firstname" name="firstname" #formControl="ngModel" noWhitespace>
<p *ngIf="formControl.hasError('noWhitespaceRequired')">Should not contain a whitespace</p>
</form>
```

#### isNumber

```
<form>
<input type="number" [(ngModel)]="model.amount" name="amount" #formControl="ngModel" isNumber>
<p *ngIf="formControl.hasError('numberRequired')">Needs to be a number</p>
</form>
```

#### isInRange

```
<form>
<input type="number" [(ngModel)]="model.amount" name="amount" #formControl="ngModel" isInRange  [min]="2" [max]="4">
<p *ngIf="formControl.hasError('numberRequired')">Needs to be a number</p>
<p *ngIf="formControl.hasError('rangeValueToSmall')">Number to small</p>
<p *ngIf="formControl.hasError('rangeValueToBig')">Number to big</p>
</form>
```
#### min

```
<form>
<input type="number" [(ngModel)]="model.amount" name="amount" #formControl="ngModel" [min]="2">
<p *ngIf="formControl.hasError('numberRequired')">Needs to be a number</p>
<p *ngIf="formControl.hasError('min')">Number to small</p>
</form>
```
#### max

```
<form>
<input type="number" [(ngModel)]="model.amount" name="amount" #formControl="ngModel" [max]="2">
<p *ngIf="formControl.hasError('numberRequired')">Needs to be a number</p>
<p *ngIf="formControl.hasError('max')">Number to small</p>
</form>
```

##Todo

* Implement  https://github.com/mailcheck/mailcheck
* Add more password rules
* Add phone validators
* Add address validator 

Get the complete changelog here: https://github.com/Nightapes/ng2-validators/releases

