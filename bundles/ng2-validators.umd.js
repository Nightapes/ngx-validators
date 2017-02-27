(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('google-libphonenumber'), require('@angular/core'), require('@angular/forms')) :
	typeof define === 'function' && define.amd ? define(['exports', 'google-libphonenumber', '@angular/core', '@angular/forms'], factory) :
	(factory((global.ng2 = global.ng2 || {}, global.ng2.validators = global.ng2.validators || {}),global.google.libphonenumber,global.ng.core,global.ng.forms));
}(this, (function (exports,googleLibphonenumber,_angular_core,_angular_forms) { 'use strict';

var Util = (function () {
    function Util() {
    }
    Util.isNotPresent = function (control) {
        var value = control.value;
        if (value === undefined || value === null) {
            return true;
        }
        return value !== '' ? false : true;
    };
    
    return Util;
}());

// tslint:disable-next-line:variable-name
var PasswordValidators = (function () {
    function PasswordValidators() {
    }
    PasswordValidators.repeatCharacterRegexRule = function (repeatCount) {
        return function (control) {
            if (Util.isNotPresent(control))
                return undefined;
            var repeatDec = repeatCount - 1;
            var pattern = '([^\\x00-\\x1F])\\1{' + repeatDec + '}';
            if (control.value !== '' && new RegExp(pattern).test(control.value)) {
                return { 'repeatCharacterRegexRule': true };
            }
            return undefined;
        };
    };
    
    return PasswordValidators;
}());
PasswordValidators.allowedCharacterRule = function (allowedChars) {
    return function (control) {
        if (Util.isNotPresent(control))
            return undefined;
        var value = control.value;
        var valid = true;
        var invalidChars = [];
        for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
            var char = value_1[_i];
            if (allowedChars.indexOf(char) === -1) {
                valid = false;
                if (invalidChars.indexOf(char) === -1) {
                    invalidChars.push(char);
                }
            }
        }
        if (!valid) {
            return { 'allowedCharacterRule': invalidChars };
        }
        return undefined;
    };
};
PasswordValidators.alphabeticalCharacterRule = function (amount) {
    return function (control) {
        if (Util.isNotPresent(control))
            return undefined;
        var value = control.value;
        if (value.length === 0) {
            return undefined;
        }
        var pattern = /[^A-Za-z]+/g;
        var stripped = value.replace(pattern, '');
        if (stripped.length < amount) {
            return { 'alphabeticalCharacterRule': true };
        }
        return undefined;
    };
};
PasswordValidators.digitCharacterRule = function (amount) {
    return function (control) {
        if (Util.isNotPresent(control))
            return undefined;
        var value = control.value;
        if (value.length === 0) {
            return undefined;
        }
        var pattern = /[^0-9\.]+/g;
        var stripped = value.replace(pattern, '');
        if (stripped.length < amount) {
            return { 'digitCharacterRule': true };
        }
        return undefined;
    };
};
PasswordValidators.lowercaseCharacterRule = function (amount) {
    return function (control) {
        if (Util.isNotPresent(control))
            return undefined;
        var value = control.value;
        if (value.length === 0) {
            return undefined;
        }
        var pattern = /[^a-z]+/g;
        var stripped = value.replace(pattern, '');
        if (stripped.length < amount) {
            return { 'lowercaseCharacterRule': true };
        }
        return undefined;
    };
};
PasswordValidators.uppercaseCharacterRule = function (amount) {
    return function (control) {
        if (Util.isNotPresent(control))
            return undefined;
        var value = control.value;
        if (value.length === 0) {
            return undefined;
        }
        var pattern = /[^A-Z]+/g;
        var stripped = value.replace(pattern, '');
        if (stripped.length < amount) {
            return { 'uppercaseCharacterRule': true };
        }
        return undefined;
    };
};
PasswordValidators.specialCharacterRule = function (amount) {
    return function (control) {
        if (Util.isNotPresent(control))
            return undefined;
        var value = control.value;
        if (value.length === 0) {
            return undefined;
        }
        var pattern = /[\w\s]+/g;
        var stripped = value.replace(pattern, '');
        if (stripped.length < amount) {
            return { 'specialCharacterRule': true };
        }
        return undefined;
    };
};
PasswordValidators.mismatchedPasswords = function (passwordControlName, confirmPasswordControlName) {
    return function (group) {
        var newPasswordValue = group.get(passwordControlName ? passwordControlName : 'newPassword').value;
        var newPasswordConfirmValue = group.get(confirmPasswordControlName ? confirmPasswordControlName : 'confirmPassword').value;
        if (newPasswordValue !== newPasswordConfirmValue) {
            group.get(confirmPasswordControlName ? confirmPasswordControlName : 'confirmPassword')
                .setErrors({ 'mismatchedPasswords': true });
            return { 'mismatchedPasswords': true };
        }
        return undefined;
    };
};

var EmailValidators = (function () {
    function EmailValidators() {
    }
    return EmailValidators;
}());
EmailValidators.simple = function (control) {
    if (Util.isNotPresent(control))
        return undefined;
    var pattern = '^.+@.+\\..+$';
    if (new RegExp(pattern).test(control.value)) {
        return undefined;
    }
    return { 'simpleEmailRule': true };
};
// https://www.w3.org/TR/html5/forms.html#valid-e-mail-address
EmailValidators.normal = function (control) {
    if (Util.isNotPresent(control))
        return undefined;
    // tslint:disable-next-line:max-line-length
    var pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (pattern.test(control.value)) {
        return undefined;
    }
    return { 'normalEmailRule': true };
};

var UniversalValidators = (function () {
    function UniversalValidators() {
    }
    return UniversalValidators;
}());
UniversalValidators.noWhitespace = function (control) {
    if (Util.isNotPresent(control))
        return undefined;
    var pattern = '\\s';
    if (new RegExp(pattern).test(control.value)) {
        return { 'noWhitespaceRequired': true };
    }
    return undefined;
};
UniversalValidators.isNumber = function (control) {
    if (Util.isNotPresent(control))
        return undefined;
    if (isNaN(control.value)) {
        return { 'numberRequired': true };
    }
    return undefined;
};
UniversalValidators.isInRange = function (minValue, maxValue) {
    return function (control) {
        if (Util.isNotPresent(control))
            return undefined;
        if (isNaN(control.value)) {
            return { 'numberRequired': true };
        }
        if (+control.value < minValue) {
            return { 'rangeValueToSmall': true };
        }
        if (+control.value > maxValue) {
            return { 'rangeValueToBig': true };
        }
        else {
            return undefined;
        }
    };
};
UniversalValidators.minLength = function (minLength) {
    return function (control) {
        if (Util.isNotPresent(control))
            return undefined;
        var value = control.value;
        if (value.length >= minLength) {
            return undefined;
        }
        return { 'minLength': true };
    };
};
UniversalValidators.maxLength = function (maxLength) {
    return function (control) {
        if (Util.isNotPresent(control))
            return undefined;
        var value = control.value;
        if (maxLength >= value.length) {
            return undefined;
        }
        return { 'maxLength': true };
    };
};
UniversalValidators.min = function (min) {
    return function (control) {
        if (Util.isNotPresent(control))
            return undefined;
        var value = control.value;
        if (isNaN(control.value)) {
            return { 'numberRequired': true };
        }
        if (+value >= min) {
            return undefined;
        }
        return { 'min': true };
    };
};
UniversalValidators.max = function (max) {
    return function (control) {
        if (Util.isNotPresent(control))
            return undefined;
        var value = control.value;
        if (isNaN(control.value)) {
            return { 'numberRequired': true };
        }
        if (max >= +value) {
            return undefined;
        }
        return { 'max': true };
    };
};

var visaRegex = '^(?:4[0-9]{12})(?:[0-9]{3})?$';
var americanExpressRegex = '^(?:3[47][0-9]{13})$';
var maestroRegex = '^(?:(?:5[0678]\\d\\d|6304|6390|67\\d\\d)\\d{8,15})$';
var jcbRegex = '^(?:(?:2131|1800|35\\d{3})\\d{11})$';
var discoverRegex = '^(?:6(?:011|5[0-9]{2})(?:[0-9]{12}))$';
var dinersclubRegex = '^(?:3(?:0[0-5]|[68][0-9])[0-9]{11})$';
var mastercardRegex = '^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$';
var CreditCardValidators = (function () {
    function CreditCardValidators() {
    }
    return CreditCardValidators;
}());
CreditCardValidators.isCreditCard = function (control) {
    if (Util.isNotPresent(control))
        return undefined;
    if (new RegExp(americanExpressRegex + '|' +
        visaRegex + '|' +
        maestroRegex + '|' +
        jcbRegex + '|' +
        discoverRegex + '|' +
        mastercardRegex + '|' +
        dinersclubRegex).test(control.value)) {
        return undefined;
    }
    return { 'creditcard': true };
};
CreditCardValidators.americanExpress = function (control) {
    if (Util.isNotPresent(control))
        return undefined;
    if (new RegExp(americanExpressRegex).test(control.value)) {
        return undefined;
    }
    return { 'americanExpress': true };
};
CreditCardValidators.dinersclub = function (control) {
    if (Util.isNotPresent(control))
        return undefined;
    if (new RegExp(dinersclubRegex).test(control.value)) {
        return undefined;
    }
    return { 'dinersclub': true };
};
CreditCardValidators.discover = function (control) {
    if (Util.isNotPresent(control))
        return undefined;
    if (new RegExp(discoverRegex).test(control.value)) {
        return undefined;
    }
    return { 'discover': true };
};
CreditCardValidators.jcb = function (control) {
    if (Util.isNotPresent(control))
        return undefined;
    if (new RegExp(jcbRegex).test(control.value)) {
        return undefined;
    }
    return { 'jcb': true };
};
CreditCardValidators.maestro = function (control) {
    if (Util.isNotPresent(control))
        return undefined;
    if (new RegExp(maestroRegex).test(control.value)) {
        return undefined;
    }
    return { 'maestro': true };
};
CreditCardValidators.mastercard = function (control) {
    if (Util.isNotPresent(control))
        return undefined;
    if (new RegExp(mastercardRegex).test(control.value)) {
        return undefined;
    }
    return { 'mastercard': true };
};
CreditCardValidators.visa = function (control) {
    if (Util.isNotPresent(control))
        return undefined;
    if (new RegExp(visaRegex).test(control.value)) {
        return undefined;
    }
    return { 'visa': true };
};

var regionsCode = {
    // Region code for global networks (e.g. +800 numbers).
    UN001: '001',
    AD: 'AD',
    AE: 'AE',
    AO: 'AO',
    AQ: 'AQ',
    AR: 'AR',
    AU: 'AU',
    BB: 'BB',
    BR: 'BR',
    BS: 'BS',
    BY: 'BY',
    CA: 'CA',
    CH: 'CH',
    CN: 'CN',
    CS: 'CS',
    CX: 'CX',
    DE: 'DE',
    GB: 'GB',
    HU: 'HU',
    IT: 'IT',
    JP: 'JP',
    KR: 'KR',
    MX: 'MX',
    NZ: 'NZ',
    PL: 'PL',
    RE: 'RE',
    SE: 'SE',
    SG: 'SG',
    US: 'US',
    YT: 'YT',
    ZW: 'ZW',
    // Official code for the unknown region.
    ZZ: 'ZZ'
};
var PhoneValidators = (function () {
    function PhoneValidators() {
    }
    PhoneValidators.checkRegionCode = function (local) {
        return !(regionsCode[local] === undefined);
    };
    
    PhoneValidators.isValidRegionCode = function (control) {
        if (Util.isNotPresent(control)) {
            return undefined;
        }
        if (!PhoneValidators.checkRegionCode(control.value)) {
            return { 'noValidRegionCode': true };
        }
        return undefined;
    };
    
    return PhoneValidators;
}());
PhoneValidators.isPhoneNumber = function (local) {
    return function validate(control) {
        if (Util.isNotPresent(control)) {
            return undefined;
        }
        if (!PhoneValidators.checkRegionCode(local)) {
            return { 'noValidRegionCode': true };
        }
        var phoneParser = googleLibphonenumber.PhoneNumberUtil.getInstance();
        var error = { 'noPhoneNumber': true };
        try {
            var phoneNumber = phoneParser.parse(control.value, local);
            if (phoneParser.isValidNumber(phoneNumber)) {
                error = undefined;
            }
        }
        catch (err) {
            error = { 'noPhoneNumber': true };
        }
        return error;
    };
};
PhoneValidators.isPossibleNumberWithReason = function (local) {
    return function validate(control) {
        if (Util.isNotPresent(control)) {
            return undefined;
        }
        if (!PhoneValidators.checkRegionCode(local)) {
            return { 'noValidRegionCode': true };
        }
        var phoneParser = googleLibphonenumber.PhoneNumberUtil.getInstance();
        var error = { 'noPhoneNumber': true };
        try {
            var phoneNumber = phoneParser.parse(control.value, local);
            var reason = phoneParser.isPossibleNumberWithReason(phoneNumber);
            switch (reason) {
                case googleLibphonenumber.PhoneNumberUtil.ValidationResult.IS_POSSIBLE:
                    error = undefined;
                    break;
                case googleLibphonenumber.PhoneNumberUtil.ValidationResult.TOO_LONG:
                    error = { 'phoneNumberTooLong': true };
                    break;
                case googleLibphonenumber.PhoneNumberUtil.ValidationResult.TOO_SHORT:
                    error = { 'phoneNumberTooShort': true };
                    break;
                case googleLibphonenumber.PhoneNumberUtil.ValidationResult.INVALID_COUNTRY_CODE:
                    error = { 'phoneNumberInvalidCountryCode': true };
                    break;
                default:
                    error = { 'noPhoneNumber': true };
                    break;
            }
        }
        catch (err) {
            error = { 'noPhoneNumber': true };
        }
        return error;
    };
};

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.PasswordValidatorDirective = PasswordValidatorDirective_1 = (function () {
    function PasswordValidatorDirective() {
        this.repeatCharacter = 4;
        this.alphabeticalCharacter = 1;
        this.digitCharacter = 1;
        this.lowercaseCharacter = 1;
        this.uppercaseCharacter = 1;
    }
    PasswordValidatorDirective.prototype.ngOnInit = function () {
        this.repeatCharacterValidator = PasswordValidators.repeatCharacterRegexRule(this.repeatCharacter);
        this.alphabeticalCharacterValidator = PasswordValidators.alphabeticalCharacterRule(this.alphabeticalCharacter);
        this.digitCharacterValidator = PasswordValidators.digitCharacterRule(this.digitCharacter);
        this.lowercaseCharacterValidator = PasswordValidators.lowercaseCharacterRule(this.lowercaseCharacter);
        this.uppercaseCharacterValidator = PasswordValidators.uppercaseCharacterRule(this.uppercaseCharacter);
    };
    PasswordValidatorDirective.prototype.validate = function (c) {
        var compose = _angular_forms.Validators.compose([this.repeatCharacterValidator,
            this.digitCharacterValidator, this.alphabeticalCharacterValidator,
            this.lowercaseCharacterValidator, this.uppercaseCharacterValidator]);
        return compose(c);
    };
    return PasswordValidatorDirective;
}());
__decorate([
    _angular_core.Input()
], exports.PasswordValidatorDirective.prototype, "repeatCharacter", void 0);
__decorate([
    _angular_core.Input()
], exports.PasswordValidatorDirective.prototype, "alphabeticalCharacter", void 0);
__decorate([
    _angular_core.Input()
], exports.PasswordValidatorDirective.prototype, "digitCharacter", void 0);
__decorate([
    _angular_core.Input()
], exports.PasswordValidatorDirective.prototype, "lowercaseCharacter", void 0);
__decorate([
    _angular_core.Input()
], exports.PasswordValidatorDirective.prototype, "uppercaseCharacter", void 0);
exports.PasswordValidatorDirective = PasswordValidatorDirective_1 = __decorate([
    _angular_core.Directive({
        selector: '[password][formControlName],[password][formControl],[password][ngModel]',
        providers: [{
                provide: _angular_forms.NG_VALIDATORS,
                // tslint:disable-next-line:no-forward-ref
                useExisting: _angular_core.forwardRef(function () { return PasswordValidatorDirective_1; }),
                multi: true
            }]
    })
], exports.PasswordValidatorDirective);
var PasswordValidatorDirective_1;

var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.EmailValidatorDirective = EmailValidatorDirective_1 = (function () {
    function EmailValidatorDirective() {
        this.email = 'normal';
    }
    EmailValidatorDirective.prototype.ngOnInit = function () {
        switch (this.email) {
            case 'simple':
                this.validator = EmailValidators.simple;
                break;
            case 'normal':
                this.validator = EmailValidators.normal;
                break;
            default:
                this.validator = EmailValidators.normal;
                break;
        }
    };
    EmailValidatorDirective.prototype.validate = function (c) {
        return this.validator(c);
    };
    return EmailValidatorDirective;
}());
__decorate$1([
    _angular_core.Input()
], exports.EmailValidatorDirective.prototype, "email", void 0);
exports.EmailValidatorDirective = EmailValidatorDirective_1 = __decorate$1([
    _angular_core.Directive({
        selector: '[email][formControlName],[email][formControl],[email][ngModel]',
        providers: [{
                provide: _angular_forms.NG_VALIDATORS,
                // tslint:disable-next-line:no-forward-ref
                useExisting: _angular_core.forwardRef(function () { return EmailValidatorDirective_1; }),
                multi: true
            }]
    })
], exports.EmailValidatorDirective);
var EmailValidatorDirective_1;

var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.WhiteSpaceValidatorDirective = WhiteSpaceValidatorDirective_1 = (function () {
    function WhiteSpaceValidatorDirective() {
    }
    WhiteSpaceValidatorDirective.prototype.ngOnInit = function () {
        this.validator = UniversalValidators.noWhitespace;
    };
    WhiteSpaceValidatorDirective.prototype.validate = function (c) {
        return this.validator(c);
    };
    return WhiteSpaceValidatorDirective;
}());
exports.WhiteSpaceValidatorDirective = WhiteSpaceValidatorDirective_1 = __decorate$2([
    _angular_core.Directive({
        selector: '[noWhitespace][formControlName],[noWhitespace][formControl],[noWhitespace][ngModel]',
        providers: [{
                provide: _angular_forms.NG_VALIDATORS,
                // tslint:disable-next-line:no-forward-ref
                useExisting: _angular_core.forwardRef(function () { return WhiteSpaceValidatorDirective_1; }),
                multi: true
            }]
    })
], exports.WhiteSpaceValidatorDirective);
exports.IsNumberValidatorDirective = IsNumberValidatorDirective_1 = (function () {
    function IsNumberValidatorDirective() {
    }
    IsNumberValidatorDirective.prototype.ngOnInit = function () {
        this.validator = UniversalValidators.isNumber;
    };
    IsNumberValidatorDirective.prototype.validate = function (c) {
        return this.validator(c);
    };
    return IsNumberValidatorDirective;
}());
exports.IsNumberValidatorDirective = IsNumberValidatorDirective_1 = __decorate$2([
    _angular_core.Directive({
        selector: '[isNumber][formControlName],[isNumber][formControl],[isNumber][ngModel]',
        providers: [{
                provide: _angular_forms.NG_VALIDATORS,
                // tslint:disable-next-line:no-forward-ref
                useExisting: _angular_core.forwardRef(function () { return IsNumberValidatorDirective_1; }),
                multi: true
            }]
    })
], exports.IsNumberValidatorDirective);
exports.IsInRangeValidatorDirective = IsInRangeValidatorDirective_1 = (function () {
    function IsInRangeValidatorDirective() {
    }
    IsInRangeValidatorDirective.prototype.ngOnInit = function () {
        this.validator = UniversalValidators.isInRange(this.minValue, this.maxValue);
    };
    IsInRangeValidatorDirective.prototype.validate = function (c) {
        return this.validator(c);
    };
    return IsInRangeValidatorDirective;
}());
__decorate$2([
    _angular_core.Input()
], exports.IsInRangeValidatorDirective.prototype, "minValue", void 0);
__decorate$2([
    _angular_core.Input()
], exports.IsInRangeValidatorDirective.prototype, "maxValue", void 0);
exports.IsInRangeValidatorDirective = IsInRangeValidatorDirective_1 = __decorate$2([
    _angular_core.Directive({
        selector: '[isInRange][formControlName],[isInRange][formControl],[isInRange][ngModel]',
        providers: [{
                provide: _angular_forms.NG_VALIDATORS,
                // tslint:disable-next-line:no-forward-ref
                useExisting: _angular_core.forwardRef(function () { return IsInRangeValidatorDirective_1; }),
                multi: true
            }]
    })
], exports.IsInRangeValidatorDirective);
exports.MaxValidatorDirective = MaxValidatorDirective_1 = (function () {
    function MaxValidatorDirective() {
    }
    MaxValidatorDirective.prototype.ngOnInit = function () {
        this.validator = UniversalValidators.max(this.max);
    };
    MaxValidatorDirective.prototype.validate = function (c) {
        return this.validator(c);
    };
    return MaxValidatorDirective;
}());
__decorate$2([
    _angular_core.Input()
], exports.MaxValidatorDirective.prototype, "max", void 0);
exports.MaxValidatorDirective = MaxValidatorDirective_1 = __decorate$2([
    _angular_core.Directive({
        selector: '[max][formControlName],[max][formControl],[max][ngModel]',
        providers: [{
                provide: _angular_forms.NG_VALIDATORS,
                // tslint:disable-next-line:no-forward-ref
                useExisting: _angular_core.forwardRef(function () { return MaxValidatorDirective_1; }),
                multi: true
            }]
    })
], exports.MaxValidatorDirective);
exports.MinValidatorDirective = MinValidatorDirective_1 = (function () {
    function MinValidatorDirective() {
    }
    MinValidatorDirective.prototype.ngOnInit = function () {
        this.validator = UniversalValidators.min(this.min);
    };
    MinValidatorDirective.prototype.validate = function (c) {
        return this.validator(c);
    };
    return MinValidatorDirective;
}());
__decorate$2([
    _angular_core.Input()
], exports.MinValidatorDirective.prototype, "min", void 0);
exports.MinValidatorDirective = MinValidatorDirective_1 = __decorate$2([
    _angular_core.Directive({
        selector: '[min][formControlName],[min][formControl],[min][ngModel]',
        providers: [{
                provide: _angular_forms.NG_VALIDATORS,
                // tslint:disable-next-line:no-forward-ref
                useExisting: _angular_core.forwardRef(function () { return MinValidatorDirective_1; }),
                multi: true
            }]
    })
], exports.MinValidatorDirective);
var WhiteSpaceValidatorDirective_1;
var IsNumberValidatorDirective_1;
var IsInRangeValidatorDirective_1;
var MaxValidatorDirective_1;
var MinValidatorDirective_1;

var __decorate$3 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.CreditCardValidatorDirective = CreditCardValidatorDirective_1 = (function () {
    function CreditCardValidatorDirective() {
        this.creditCard = 'all';
    }
    CreditCardValidatorDirective.prototype.ngOnInit = function () {
        switch (this.creditCard) {
            case 'all':
                this.validator = CreditCardValidators.isCreditCard;
                break;
            case 'americanExpress':
                this.validator = CreditCardValidators.americanExpress;
                break;
            case 'dinersclub':
                this.validator = CreditCardValidators.dinersclub;
                break;
            case 'discover':
                this.validator = CreditCardValidators.discover;
                break;
            case 'jcb':
                this.validator = CreditCardValidators.jcb;
                break;
            case 'maestro':
                this.validator = CreditCardValidators.maestro;
                break;
            case 'mastercard':
                this.validator = CreditCardValidators.mastercard;
                break;
            case 'visa':
                this.validator = CreditCardValidators.visa;
                break;
            default:
                this.validator = CreditCardValidators.isCreditCard;
                break;
        }
    };
    CreditCardValidatorDirective.prototype.validate = function (c) {
        return this.validator(c);
    };
    return CreditCardValidatorDirective;
}());
__decorate$3([
    _angular_core.Input()
], exports.CreditCardValidatorDirective.prototype, "creditCard", void 0);
exports.CreditCardValidatorDirective = CreditCardValidatorDirective_1 = __decorate$3([
    _angular_core.Directive({
        selector: '[creditCard][formControlName],[creditCard][formControl],[creditCard][ngModel]',
        providers: [{
                provide: _angular_forms.NG_VALIDATORS,
                // tslint:disable-next-line:no-forward-ref
                useExisting: _angular_core.forwardRef(function () { return CreditCardValidatorDirective_1; }),
                multi: true
            }]
    })
], exports.CreditCardValidatorDirective);
var CreditCardValidatorDirective_1;

var __decorate$4 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.PossiblePhoneValidatorDirective = PossiblePhoneValidatorDirective_1 = (function () {
    function PossiblePhoneValidatorDirective() {
        this.possiblePhone = 'US';
    }
    PossiblePhoneValidatorDirective.prototype.ngOnInit = function () {
        this.validator = PhoneValidators.isPossibleNumberWithReason(this.possiblePhone);
    };
    PossiblePhoneValidatorDirective.prototype.validate = function (c) {
        return this.validator(c);
    };
    return PossiblePhoneValidatorDirective;
}());
__decorate$4([
    _angular_core.Input()
], exports.PossiblePhoneValidatorDirective.prototype, "possiblePhone", void 0);
exports.PossiblePhoneValidatorDirective = PossiblePhoneValidatorDirective_1 = __decorate$4([
    _angular_core.Directive({
        selector: '[possiblePhone][formControlName],[possiblePhone][formControl],[possiblePhone][ngModel]',
        providers: [{
                provide: _angular_forms.NG_VALIDATORS,
                // tslint:disable-next-line:no-forward-ref
                useExisting: _angular_core.forwardRef(function () { return PossiblePhoneValidatorDirective_1; }),
                multi: true
            }]
    })
], exports.PossiblePhoneValidatorDirective);
exports.PhoneValidatorDirective = PhoneValidatorDirective_1 = (function () {
    function PhoneValidatorDirective() {
        this.phone = 'US';
    }
    PhoneValidatorDirective.prototype.ngOnInit = function () {
        this.validator = PhoneValidators.isPhoneNumber(this.phone);
    };
    PhoneValidatorDirective.prototype.validate = function (c) {
        return this.validator(c);
    };
    return PhoneValidatorDirective;
}());
__decorate$4([
    _angular_core.Input()
], exports.PhoneValidatorDirective.prototype, "phone", void 0);
exports.PhoneValidatorDirective = PhoneValidatorDirective_1 = __decorate$4([
    _angular_core.Directive({
        selector: '[phone][formControlName],[phone][formControl],[phone][ngModel]',
        providers: [{
                provide: _angular_forms.NG_VALIDATORS,
                // tslint:disable-next-line:no-forward-ref
                useExisting: _angular_core.forwardRef(function () { return PhoneValidatorDirective_1; }),
                multi: true
            }]
    })
], exports.PhoneValidatorDirective);
exports.CountryCodeValidatorDirective = CountryCodeValidatorDirective_1 = (function () {
    function CountryCodeValidatorDirective() {
    }
    CountryCodeValidatorDirective.prototype.ngOnInit = function () {
        this.validator = PhoneValidators.isValidRegionCode;
    };
    CountryCodeValidatorDirective.prototype.validate = function (c) {
        return this.validator(c);
    };
    return CountryCodeValidatorDirective;
}());
exports.CountryCodeValidatorDirective = CountryCodeValidatorDirective_1 = __decorate$4([
    _angular_core.Directive({
        selector: '[countryCode][formControlName],[countryCode][formControl],[countryCode][ngModel]',
        providers: [{
                provide: _angular_forms.NG_VALIDATORS,
                // tslint:disable-next-line:no-forward-ref
                useExisting: _angular_core.forwardRef(function () { return CountryCodeValidatorDirective_1; }),
                multi: true
            }]
    })
], exports.CountryCodeValidatorDirective);
var PossiblePhoneValidatorDirective_1;
var PhoneValidatorDirective_1;
var CountryCodeValidatorDirective_1;

var __decorate$5 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.ValidatorsModule = (function () {
    function ValidatorsModule() {
    }
    return ValidatorsModule;
}());
exports.ValidatorsModule = __decorate$5([
    _angular_core.NgModule({
        declarations: [exports.CreditCardValidatorDirective,
            exports.EmailValidatorDirective,
            exports.PasswordValidatorDirective,
            exports.IsInRangeValidatorDirective,
            exports.IsNumberValidatorDirective,
            exports.MaxValidatorDirective,
            exports.MinValidatorDirective,
            exports.WhiteSpaceValidatorDirective,
            exports.PhoneValidatorDirective,
            exports.PossiblePhoneValidatorDirective,
            exports.CountryCodeValidatorDirective],
        exports: [exports.CreditCardValidatorDirective,
            exports.EmailValidatorDirective,
            exports.PasswordValidatorDirective,
            exports.IsInRangeValidatorDirective,
            exports.IsNumberValidatorDirective,
            exports.MaxValidatorDirective,
            exports.MinValidatorDirective,
            exports.WhiteSpaceValidatorDirective,
            exports.PhoneValidatorDirective,
            exports.PossiblePhoneValidatorDirective,
            exports.CountryCodeValidatorDirective]
    })
], exports.ValidatorsModule);

// validators

exports.PasswordValidators = PasswordValidators;
exports.EmailValidators = EmailValidators;
exports.UniversalValidators = UniversalValidators;
exports.CreditCardValidators = CreditCardValidators;
exports.PhoneValidators = PhoneValidators;

Object.defineProperty(exports, '__esModule', { value: true });

})));
