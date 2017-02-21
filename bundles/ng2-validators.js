System.registerDynamic("src/creditcard/creditcard-validators", ["./../util"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var util_1 = $__require('./../util');
  var visaRegex = '^(?:4[0-9]{12})(?:[0-9]{3})?$';
  var americanExpressRegex = '^(?:3[47][0-9]{13})$';
  var maestroRegex = '^(?:(?:5[0678]\\d\\d|6304|6390|67\\d\\d)\\d{8,15})$';
  var jcbRegex = '^(?:(?:2131|1800|35\\d{3})\\d{11})$';
  var discoverRegex = '^(?:6(?:011|5[0-9]{2})(?:[0-9]{12}))$';
  var dinersclubRegex = '^(?:3(?:0[0-5]|[68][0-9])[0-9]{11})$';
  var mastercardRegex = '^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$';
  exports.isCreditCard = function(control) {
    if (util_1.Util.isNotPresent(control))
      return undefined;
    if (new RegExp(americanExpressRegex + '|' + visaRegex + '|' + maestroRegex + '|' + jcbRegex + '|' + discoverRegex + '|' + mastercardRegex + '|' + dinersclubRegex).test(control.value)) {
      return undefined;
    }
    return {'creditcard': true};
  };
  exports.americanExpress = function(control) {
    if (util_1.Util.isNotPresent(control))
      return undefined;
    if (new RegExp(americanExpressRegex).test(control.value)) {
      return undefined;
    }
    return {'americanExpress': true};
  };
  exports.dinersclub = function(control) {
    if (util_1.Util.isNotPresent(control))
      return undefined;
    if (new RegExp(dinersclubRegex).test(control.value)) {
      return undefined;
    }
    return {'dinersclub': true};
  };
  exports.discover = function(control) {
    if (util_1.Util.isNotPresent(control))
      return undefined;
    if (new RegExp(discoverRegex).test(control.value)) {
      return undefined;
    }
    return {'discover': true};
  };
  exports.jcb = function(control) {
    if (util_1.Util.isNotPresent(control))
      return undefined;
    if (new RegExp(jcbRegex).test(control.value)) {
      return undefined;
    }
    return {'jcb': true};
  };
  exports.maestro = function(control) {
    if (util_1.Util.isNotPresent(control))
      return undefined;
    if (new RegExp(maestroRegex).test(control.value)) {
      return undefined;
    }
    return {'maestro': true};
  };
  exports.mastercard = function(control) {
    if (util_1.Util.isNotPresent(control))
      return undefined;
    if (new RegExp(mastercardRegex).test(control.value)) {
      return undefined;
    }
    return {'mastercard': true};
  };
  exports.visa = function(control) {
    if (util_1.Util.isNotPresent(control))
      return undefined;
    if (new RegExp(visaRegex).test(control.value)) {
      return undefined;
    }
    return {'visa': true};
  };
  exports.CreditCardValidators = {
    isCreditCard: exports.isCreditCard,
    americanExpress: exports.americanExpress,
    dinersclub: exports.dinersclub,
    discover: exports.discover,
    jcb: exports.jcb,
    maestro: exports.maestro,
    mastercard: exports.mastercard,
    visa: exports.visa
  };
  return module.exports;
});

System.registerDynamic("src/creditcard/creditcard.directive", ["@angular/core", "@angular/forms", "./creditcard-validators"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('@angular/core');
  var forms_1 = $__require('@angular/forms');
  var creditcard_validators_1 = $__require('./creditcard-validators');
  var CreditCardValidatorDirective = (function() {
    function CreditCardValidatorDirective() {
      this.creditCard = 'all';
    }
    CreditCardValidatorDirective.prototype.ngOnInit = function() {
      switch (this.creditCard) {
        case 'all':
          this.validator = creditcard_validators_1.CreditCardValidators.isCreditCard;
          break;
        case 'americanExpress':
          this.validator = creditcard_validators_1.CreditCardValidators.americanExpress;
          break;
        case 'dinersclub':
          this.validator = creditcard_validators_1.CreditCardValidators.dinersclub;
          break;
        case 'discover':
          this.validator = creditcard_validators_1.CreditCardValidators.discover;
          break;
        case 'jcb':
          this.validator = creditcard_validators_1.CreditCardValidators.jcb;
          break;
        case 'maestro':
          this.validator = creditcard_validators_1.CreditCardValidators.maestro;
          break;
        case 'mastercard':
          this.validator = creditcard_validators_1.CreditCardValidators.mastercard;
          break;
        case 'visa':
          this.validator = creditcard_validators_1.CreditCardValidators.visa;
          break;
        default:
          this.validator = creditcard_validators_1.CreditCardValidators.isCreditCard;
          break;
      }
    };
    CreditCardValidatorDirective.prototype.validate = function(c) {
      return this.validator(c);
    };
    __decorate([core_1.Input(), __metadata('design:type', String)], CreditCardValidatorDirective.prototype, "creditCard", void 0);
    CreditCardValidatorDirective = __decorate([core_1.Directive({
      selector: '[creditCard][formControlName],[creditCard][formControl],[creditCard][ngModel]',
      providers: [{
        provide: forms_1.NG_VALIDATORS,
        useExisting: core_1.forwardRef(function() {
          return CreditCardValidatorDirective;
        }),
        multi: true
      }]
    }), __metadata('design:paramtypes', [])], CreditCardValidatorDirective);
    return CreditCardValidatorDirective;
  }());
  exports.CreditCardValidatorDirective = CreditCardValidatorDirective;
  return module.exports;
});

System.registerDynamic("src/email/email-validators", ["./../util"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var util_1 = $__require('./../util');
  exports.simple = function(control) {
    if (util_1.Util.isNotPresent(control))
      return undefined;
    var pattern = '^.+@.+\\..+$';
    if (new RegExp(pattern).test(control.value)) {
      return undefined;
    }
    return {'simpleEmailRule': true};
  };
  exports.normal = function(control) {
    if (util_1.Util.isNotPresent(control))
      return undefined;
    var pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (pattern.test(control.value)) {
      return undefined;
    }
    return {'normalEmailRule': true};
  };
  exports.EmailValidators = {
    simple: exports.simple,
    normal: exports.normal
  };
  return module.exports;
});

System.registerDynamic("src/email/email.directive", ["@angular/core", "@angular/forms", "./email-validators"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('@angular/core');
  var forms_1 = $__require('@angular/forms');
  var email_validators_1 = $__require('./email-validators');
  var EmailValidatorDirective = (function() {
    function EmailValidatorDirective() {
      this.email = 'normal';
    }
    EmailValidatorDirective.prototype.ngOnInit = function() {
      switch (this.email) {
        case 'simple':
          this.validator = email_validators_1.EmailValidators.simple;
          break;
        case 'normal':
          this.validator = email_validators_1.EmailValidators.normal;
          break;
        default:
          this.validator = email_validators_1.EmailValidators.normal;
          break;
      }
    };
    EmailValidatorDirective.prototype.validate = function(c) {
      return this.validator(c);
    };
    __decorate([core_1.Input(), __metadata('design:type', String)], EmailValidatorDirective.prototype, "email", void 0);
    EmailValidatorDirective = __decorate([core_1.Directive({
      selector: '[email][formControlName],[email][formControl],[email][ngModel]',
      providers: [{
        provide: forms_1.NG_VALIDATORS,
        useExisting: core_1.forwardRef(function() {
          return EmailValidatorDirective;
        }),
        multi: true
      }]
    }), __metadata('design:paramtypes', [])], EmailValidatorDirective);
    return EmailValidatorDirective;
  }());
  exports.EmailValidatorDirective = EmailValidatorDirective;
  return module.exports;
});

System.registerDynamic("src/universal/universal-validators", ["./../util"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var util_1 = $__require('./../util');
  var noWhitespace = function(control) {
    if (util_1.Util.isNotPresent(control))
      return undefined;
    var pattern = '\\s';
    if (new RegExp(pattern).test(control.value)) {
      return {'noWhitespaceRequired': true};
    }
    return undefined;
  };
  var isNumber = function(control) {
    if (util_1.Util.isNotPresent(control))
      return undefined;
    if (isNaN(control.value)) {
      return {'numberRequired': true};
    }
    return undefined;
  };
  var isInRange = function(minValue, maxValue) {
    return function(control) {
      if (util_1.Util.isNotPresent(control))
        return undefined;
      if (isNaN(control.value)) {
        return {'numberRequired': true};
      }
      if (+control.value < minValue) {
        return {'rangeValueToSmall': true};
      }
      if (+control.value > maxValue) {
        return {'rangeValueToBig': true};
      } else {
        return undefined;
      }
    };
  };
  var minLength = function(minLength) {
    return function(control) {
      if (util_1.Util.isNotPresent(control))
        return undefined;
      var value = control.value;
      if (value.length <= minLength) {
        return undefined;
      }
      return {'minLength': true};
    };
  };
  var maxLength = function(maxLength) {
    return function(control) {
      if (util_1.Util.isNotPresent(control))
        return undefined;
      var value = control.value;
      if (maxLength >= value.length) {
        return undefined;
      }
      return {'maxLength': true};
    };
  };
  var min = function(min) {
    return function(control) {
      if (util_1.Util.isNotPresent(control))
        return undefined;
      var value = control.value;
      if (isNaN(control.value)) {
        return {'numberRequired': true};
      }
      if (+value >= min) {
        return undefined;
      }
      return {'min': true};
    };
  };
  var max = function(max) {
    return function(control) {
      if (util_1.Util.isNotPresent(control))
        return undefined;
      var value = control.value;
      if (isNaN(control.value)) {
        return {'numberRequired': true};
      }
      if (max >= +value) {
        return undefined;
      }
      return {'max': true};
    };
  };
  exports.UniversalValidators = {
    max: max,
    min: min,
    maxLength: maxLength,
    minLength: minLength,
    isInRange: isInRange,
    isNumber: isNumber,
    noWhitespace: noWhitespace
  };
  return module.exports;
});

System.registerDynamic("src/universal/universal.directive", ["@angular/core", "@angular/forms", "./universal-validators"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('@angular/core');
  var forms_1 = $__require('@angular/forms');
  var universal_validators_1 = $__require('./universal-validators');
  var WhiteSpaceValidatorDirective = (function() {
    function WhiteSpaceValidatorDirective() {}
    WhiteSpaceValidatorDirective.prototype.ngOnInit = function() {
      this.validator = universal_validators_1.UniversalValidators.noWhitespace;
    };
    WhiteSpaceValidatorDirective.prototype.validate = function(c) {
      return this.validator(c);
    };
    WhiteSpaceValidatorDirective = __decorate([core_1.Directive({
      selector: '[noWhitespace][formControlName],[noWhitespace][formControl],[noWhitespace][ngModel]',
      providers: [{
        provide: forms_1.NG_VALIDATORS,
        useExisting: core_1.forwardRef(function() {
          return WhiteSpaceValidatorDirective;
        }),
        multi: true
      }]
    }), __metadata('design:paramtypes', [])], WhiteSpaceValidatorDirective);
    return WhiteSpaceValidatorDirective;
  }());
  exports.WhiteSpaceValidatorDirective = WhiteSpaceValidatorDirective;
  var IsNumberValidatorDirective = (function() {
    function IsNumberValidatorDirective() {}
    IsNumberValidatorDirective.prototype.ngOnInit = function() {
      this.validator = universal_validators_1.UniversalValidators.isNumber;
    };
    IsNumberValidatorDirective.prototype.validate = function(c) {
      return this.validator(c);
    };
    IsNumberValidatorDirective = __decorate([core_1.Directive({
      selector: '[isNumber][formControlName],[isNumber][formControl],[isNumber][ngModel]',
      providers: [{
        provide: forms_1.NG_VALIDATORS,
        useExisting: core_1.forwardRef(function() {
          return IsNumberValidatorDirective;
        }),
        multi: true
      }]
    }), __metadata('design:paramtypes', [])], IsNumberValidatorDirective);
    return IsNumberValidatorDirective;
  }());
  exports.IsNumberValidatorDirective = IsNumberValidatorDirective;
  var IsInRangeValidatorDirective = (function() {
    function IsInRangeValidatorDirective() {}
    IsInRangeValidatorDirective.prototype.ngOnInit = function() {
      this.validator = universal_validators_1.UniversalValidators.isInRange(this.minValue, this.maxValue);
    };
    IsInRangeValidatorDirective.prototype.validate = function(c) {
      return this.validator(c);
    };
    __decorate([core_1.Input(), __metadata('design:type', Number)], IsInRangeValidatorDirective.prototype, "minValue", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Number)], IsInRangeValidatorDirective.prototype, "maxValue", void 0);
    IsInRangeValidatorDirective = __decorate([core_1.Directive({
      selector: '[isInRange][formControlName],[isInRange][formControl],[isInRange][ngModel]',
      providers: [{
        provide: forms_1.NG_VALIDATORS,
        useExisting: core_1.forwardRef(function() {
          return IsInRangeValidatorDirective;
        }),
        multi: true
      }]
    }), __metadata('design:paramtypes', [])], IsInRangeValidatorDirective);
    return IsInRangeValidatorDirective;
  }());
  exports.IsInRangeValidatorDirective = IsInRangeValidatorDirective;
  var MaxValidatorDirective = (function() {
    function MaxValidatorDirective() {}
    MaxValidatorDirective.prototype.ngOnInit = function() {
      this.validator = universal_validators_1.UniversalValidators.max(this.max);
    };
    MaxValidatorDirective.prototype.validate = function(c) {
      return this.validator(c);
    };
    __decorate([core_1.Input(), __metadata('design:type', Number)], MaxValidatorDirective.prototype, "max", void 0);
    MaxValidatorDirective = __decorate([core_1.Directive({
      selector: '[max][formControlName],[max][formControl],[max][ngModel]',
      providers: [{
        provide: forms_1.NG_VALIDATORS,
        useExisting: core_1.forwardRef(function() {
          return MaxValidatorDirective;
        }),
        multi: true
      }]
    }), __metadata('design:paramtypes', [])], MaxValidatorDirective);
    return MaxValidatorDirective;
  }());
  exports.MaxValidatorDirective = MaxValidatorDirective;
  var MinValidatorDirective = (function() {
    function MinValidatorDirective() {}
    MinValidatorDirective.prototype.ngOnInit = function() {
      this.validator = universal_validators_1.UniversalValidators.max(this.min);
    };
    MinValidatorDirective.prototype.validate = function(c) {
      return this.validator(c);
    };
    __decorate([core_1.Input(), __metadata('design:type', Number)], MinValidatorDirective.prototype, "min", void 0);
    MinValidatorDirective = __decorate([core_1.Directive({
      selector: '[min][formControlName],[min][formControl],[min][ngModel]',
      providers: [{
        provide: forms_1.NG_VALIDATORS,
        useExisting: core_1.forwardRef(function() {
          return MinValidatorDirective;
        }),
        multi: true
      }]
    }), __metadata('design:paramtypes', [])], MinValidatorDirective);
    return MinValidatorDirective;
  }());
  exports.MinValidatorDirective = MinValidatorDirective;
  return module.exports;
});

System.registerDynamic("src/password/password-validators", ["./../util"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var util_1 = $__require('./../util');
  exports.repeatCharacterRegexRule = function(repeatCount) {
    return function(control) {
      if (util_1.Util.isNotPresent(control))
        return undefined;
      var repeatDec = repeatCount - 1;
      var pattern = '([^\\x00-\\x1F])\\1{' + repeatDec + '}';
      if (control.value !== '' && new RegExp(pattern).test(control.value)) {
        return {'repeatCharacterRegexRule': true};
      }
      return undefined;
    };
  };
  exports.allowedCharacterRule = function(allowedChars) {
    return function(control) {
      if (util_1.Util.isNotPresent(control))
        return undefined;
      var value = control.value;
      var valid = true;
      var invalidChars = [];
      for (var _i = 0,
          value_1 = value; _i < value_1.length; _i++) {
        var char = value_1[_i];
        if (allowedChars.indexOf(char) === -1) {
          valid = false;
          if (invalidChars.indexOf(char) === -1) {
            invalidChars.push(char);
          }
        }
      }
      if (!valid) {
        return {'allowedCharacterRule': invalidChars};
      }
      return undefined;
    };
  };
  exports.alphabeticalCharacterRule = function(amount) {
    return function(control) {
      if (util_1.Util.isNotPresent(control))
        return undefined;
      var value = control.value;
      if (value.length === 0) {
        return undefined;
      }
      var pattern = /[^A-Za-z]+/g;
      var stripped = value.replace(pattern, '');
      if (stripped.length < amount) {
        return {'alphabeticalCharacterRule': true};
      }
      return undefined;
    };
  };
  exports.digitCharacterRule = function(amount) {
    return function(control) {
      if (util_1.Util.isNotPresent(control))
        return undefined;
      var value = control.value;
      if (value.length === 0) {
        return undefined;
      }
      var pattern = /[^0-9\.]+/g;
      var stripped = value.replace(pattern, '');
      if (stripped.length < amount) {
        return {'digitCharacterRule': true};
      }
      return undefined;
    };
  };
  exports.lowercaseCharacterRule = function(amount) {
    return function(control) {
      if (util_1.Util.isNotPresent(control))
        return undefined;
      var value = control.value;
      if (value.length === 0) {
        return undefined;
      }
      var pattern = /[^a-z]+/g;
      var stripped = value.replace(pattern, '');
      if (stripped.length < amount) {
        return {'lowercaseCharacterRule': true};
      }
      return undefined;
    };
  };
  exports.uppercaseCharacterRule = function(amount) {
    return function(control) {
      if (util_1.Util.isNotPresent(control))
        return undefined;
      var value = control.value;
      if (value.length === 0) {
        return undefined;
      }
      var pattern = /[^A-Z]+/g;
      var stripped = value.replace(pattern, '');
      if (stripped.length < amount) {
        return {'uppercaseCharacterRule': true};
      }
      return undefined;
    };
  };
  exports.mismatchedPasswords = function(passwordControlName, confirmPasswordControlName) {
    return function(group) {
      var newPasswordValue = group.get(passwordControlName ? passwordControlName : 'newPassword').value;
      var newPasswordConfirmValue = group.get(confirmPasswordControlName ? confirmPasswordControlName : 'confirmPassword').value;
      if (newPasswordValue !== newPasswordConfirmValue) {
        group.get(confirmPasswordControlName ? confirmPasswordControlName : 'confirmPassword').setErrors({'mismatchedPasswords': true});
        return {'mismatchedPasswords': true};
      }
      return undefined;
    };
  };
  exports.PasswordValidators = {
    repeatCharacterRegexRule: exports.repeatCharacterRegexRule,
    allowedCharacterRule: exports.allowedCharacterRule,
    alphabeticalCharacterRule: exports.alphabeticalCharacterRule,
    digitCharacterRule: exports.digitCharacterRule,
    lowercaseCharacterRule: exports.lowercaseCharacterRule,
    uppercaseCharacterRule: exports.uppercaseCharacterRule,
    mismatchedPasswords: exports.mismatchedPasswords
  };
  return module.exports;
});

System.registerDynamic("src/password/password.directive", ["@angular/core", "@angular/forms", "./password-validators"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('@angular/core');
  var forms_1 = $__require('@angular/forms');
  var password_validators_1 = $__require('./password-validators');
  var PasswordValidatorDirective = (function() {
    function PasswordValidatorDirective() {
      this.repeatCharacter = 4;
      this.alphabeticalCharacter = 1;
      this.digitCharacter = 1;
      this.lowercaseCharacter = 1;
      this.uppercaseCharacter = 1;
    }
    PasswordValidatorDirective.prototype.ngOnInit = function() {
      this.repeatCharacterValidator = password_validators_1.PasswordValidators.repeatCharacterRegexRule(this.repeatCharacter);
      this.alphabeticalCharacterValidator = password_validators_1.PasswordValidators.alphabeticalCharacterRule(this.alphabeticalCharacter);
      this.digitCharacterValidator = password_validators_1.PasswordValidators.digitCharacterRule(this.digitCharacter);
      this.lowercaseCharacterValidator = password_validators_1.PasswordValidators.lowercaseCharacterRule(this.lowercaseCharacter);
      this.uppercaseCharacterValidator = password_validators_1.PasswordValidators.uppercaseCharacterRule(this.uppercaseCharacter);
    };
    PasswordValidatorDirective.prototype.validate = function(c) {
      var compose = forms_1.Validators.compose([this.repeatCharacterValidator, this.digitCharacterValidator, this.alphabeticalCharacterValidator, this.lowercaseCharacterValidator, this.uppercaseCharacterValidator]);
      return compose(c);
    };
    __decorate([core_1.Input(), __metadata('design:type', Number)], PasswordValidatorDirective.prototype, "repeatCharacter", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Number)], PasswordValidatorDirective.prototype, "alphabeticalCharacter", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Number)], PasswordValidatorDirective.prototype, "digitCharacter", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Number)], PasswordValidatorDirective.prototype, "lowercaseCharacter", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Number)], PasswordValidatorDirective.prototype, "uppercaseCharacter", void 0);
    PasswordValidatorDirective = __decorate([core_1.Directive({
      selector: '[password][formControlName],[password][formControl],[password][ngModel]',
      providers: [{
        provide: forms_1.NG_VALIDATORS,
        useExisting: core_1.forwardRef(function() {
          return PasswordValidatorDirective;
        }),
        multi: true
      }]
    }), __metadata('design:paramtypes', [])], PasswordValidatorDirective);
    return PasswordValidatorDirective;
  }());
  exports.PasswordValidatorDirective = PasswordValidatorDirective;
  return module.exports;
});

System.registerDynamic("src/util", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Util = (function() {
    function Util() {}
    Util.isNotPresent = function(control) {
      var value = control.value;
      if (value === undefined || value === null) {
        return true;
      }
      return value !== '' ? false : true;
    };
    ;
    return Util;
  }());
  exports.Util = Util;
  return module.exports;
});

System.registerDynamic("src/phone/phone-validators", ["./../util", "google-libphonenumber"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var util_1 = $__require('./../util');
  var google_libphonenumber_1 = $__require('google-libphonenumber');
  exports.regionsCode = {
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
    ZZ: 'ZZ'
  };
  exports.checkRegionCode = function(local) {
    return !(exports.regionsCode[local] === undefined);
  };
  exports.isValidRegionCode = function(control) {
    if (util_1.Util.isNotPresent(control)) {
      return undefined;
    }
    if (!exports.checkRegionCode(control.value)) {
      return {'noValidRegionCode': true};
    }
    return undefined;
  };
  exports.isPhoneNumber = function(local) {
    return function validate(control) {
      if (util_1.Util.isNotPresent(control)) {
        return undefined;
      }
      if (!exports.checkRegionCode(local)) {
        return {'noValidRegionCode': true};
      }
      var phoneParser = google_libphonenumber_1.PhoneNumberUtil.getInstance();
      var error = {'noPhoneNumber': true};
      try {
        var phoneNumber = phoneParser.parse(control.value, local);
        if (phoneParser.isValidNumber(phoneNumber)) {
          error = undefined;
        }
      } catch (err) {
        error = {'noPhoneNumber': true};
      }
      return error;
    };
  };
  exports.isPossibleNumberWithReason = function(local) {
    return function validate(control) {
      if (util_1.Util.isNotPresent(control)) {
        return undefined;
      }
      if (!exports.checkRegionCode(local)) {
        return {'noValidRegionCode': true};
      }
      var phoneParser = google_libphonenumber_1.PhoneNumberUtil.getInstance();
      var error = {'noPhoneNumber': true};
      try {
        var phoneNumber = phoneParser.parse(control.value, local);
        var reason = phoneParser.isPossibleNumberWithReason(phoneNumber);
        switch (reason) {
          case google_libphonenumber_1.PhoneNumberUtil.ValidationResult.IS_POSSIBLE:
            error = undefined;
            break;
          case google_libphonenumber_1.PhoneNumberUtil.ValidationResult.TOO_LONG:
            error = {'phoneNumberTooLong': true};
            break;
          case google_libphonenumber_1.PhoneNumberUtil.ValidationResult.TOO_SHORT:
            error = {'phoneNumberTooShort': true};
            break;
          case google_libphonenumber_1.PhoneNumberUtil.ValidationResult.INVALID_COUNTRY_CODE:
            error = {'phoneNumberInvalidCountryCode': true};
            break;
          default:
            error = {'noPhoneNumber': true};
            break;
        }
      } catch (err) {
        error = {'noPhoneNumber': true};
      }
      return error;
    };
  };
  exports.PhoneValidators = {
    isPossibleNumberWithReason: exports.isPossibleNumberWithReason,
    isPhoneNumber: exports.isPhoneNumber,
    checkRegionCode: exports.checkRegionCode,
    isValidRegionCode: exports.isValidRegionCode,
    regionsCode: exports.regionsCode
  };
  return module.exports;
});

System.registerDynamic("src/phone/phone.directive", ["@angular/core", "@angular/forms", "./phone-validators"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('@angular/core');
  var forms_1 = $__require('@angular/forms');
  var phone_validators_1 = $__require('./phone-validators');
  var PossiblePhoneValidatorDirective = (function() {
    function PossiblePhoneValidatorDirective() {
      this.possiblePhone = 'US';
    }
    PossiblePhoneValidatorDirective.prototype.ngOnInit = function() {
      this.validator = phone_validators_1.PhoneValidators.isPossibleNumberWithReason(this.possiblePhone);
    };
    PossiblePhoneValidatorDirective.prototype.validate = function(c) {
      return this.validator(c);
    };
    __decorate([core_1.Input(), __metadata('design:type', String)], PossiblePhoneValidatorDirective.prototype, "possiblePhone", void 0);
    PossiblePhoneValidatorDirective = __decorate([core_1.Directive({
      selector: '[possiblePhone][formControlName],[possiblePhone][formControl],[possiblePhone][ngModel]',
      providers: [{
        provide: forms_1.NG_VALIDATORS,
        useExisting: core_1.forwardRef(function() {
          return PossiblePhoneValidatorDirective;
        }),
        multi: true
      }]
    }), __metadata('design:paramtypes', [])], PossiblePhoneValidatorDirective);
    return PossiblePhoneValidatorDirective;
  }());
  exports.PossiblePhoneValidatorDirective = PossiblePhoneValidatorDirective;
  var PhoneValidatorDirective = (function() {
    function PhoneValidatorDirective() {
      this.phone = 'US';
    }
    PhoneValidatorDirective.prototype.ngOnInit = function() {
      this.validator = phone_validators_1.PhoneValidators.isPhoneNumber(this.phone);
    };
    PhoneValidatorDirective.prototype.validate = function(c) {
      return this.validator(c);
    };
    __decorate([core_1.Input(), __metadata('design:type', String)], PhoneValidatorDirective.prototype, "phone", void 0);
    PhoneValidatorDirective = __decorate([core_1.Directive({
      selector: '[phone][formControlName],[phone][formControl],[phone][ngModel]',
      providers: [{
        provide: forms_1.NG_VALIDATORS,
        useExisting: core_1.forwardRef(function() {
          return PhoneValidatorDirective;
        }),
        multi: true
      }]
    }), __metadata('design:paramtypes', [])], PhoneValidatorDirective);
    return PhoneValidatorDirective;
  }());
  exports.PhoneValidatorDirective = PhoneValidatorDirective;
  var CountryCodeValidatorDirective = (function() {
    function CountryCodeValidatorDirective() {}
    CountryCodeValidatorDirective.prototype.ngOnInit = function() {
      this.validator = phone_validators_1.PhoneValidators.isValidRegionCode;
    };
    CountryCodeValidatorDirective.prototype.validate = function(c) {
      return this.validator(c);
    };
    CountryCodeValidatorDirective = __decorate([core_1.Directive({
      selector: '[countryCode][formControlName],[countryCode][formControl],[countryCode][ngModel]',
      providers: [{
        provide: forms_1.NG_VALIDATORS,
        useExisting: core_1.forwardRef(function() {
          return CountryCodeValidatorDirective;
        }),
        multi: true
      }]
    }), __metadata('design:paramtypes', [])], CountryCodeValidatorDirective);
    return CountryCodeValidatorDirective;
  }());
  exports.CountryCodeValidatorDirective = CountryCodeValidatorDirective;
  return module.exports;
});

System.registerDynamic("src/validators.module", ["@angular/core", "./creditcard/creditcard.directive", "./email/email.directive", "./universal/universal.directive", "./password/password.directive", "./phone/phone.directive"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('@angular/core');
  var creditcard_directive_1 = $__require('./creditcard/creditcard.directive');
  var email_directive_1 = $__require('./email/email.directive');
  var universal_directive_1 = $__require('./universal/universal.directive');
  var password_directive_1 = $__require('./password/password.directive');
  var phone_directive_1 = $__require('./phone/phone.directive');
  var ValidatorsModule = (function() {
    function ValidatorsModule() {}
    ValidatorsModule = __decorate([core_1.NgModule({
      declarations: [creditcard_directive_1.CreditCardValidatorDirective, email_directive_1.EmailValidatorDirective, password_directive_1.PasswordValidatorDirective, universal_directive_1.IsInRangeValidatorDirective, universal_directive_1.IsNumberValidatorDirective, universal_directive_1.MaxValidatorDirective, universal_directive_1.MinValidatorDirective, universal_directive_1.WhiteSpaceValidatorDirective, phone_directive_1.PhoneValidatorDirective, phone_directive_1.PossiblePhoneValidatorDirective, phone_directive_1.CountryCodeValidatorDirective],
      exports: [creditcard_directive_1.CreditCardValidatorDirective, email_directive_1.EmailValidatorDirective, password_directive_1.PasswordValidatorDirective, universal_directive_1.IsInRangeValidatorDirective, universal_directive_1.IsNumberValidatorDirective, universal_directive_1.MaxValidatorDirective, universal_directive_1.MinValidatorDirective, universal_directive_1.WhiteSpaceValidatorDirective, phone_directive_1.PhoneValidatorDirective, phone_directive_1.PossiblePhoneValidatorDirective, phone_directive_1.CountryCodeValidatorDirective]
    }), __metadata('design:paramtypes', [])], ValidatorsModule);
    return ValidatorsModule;
  }());
  exports.ValidatorsModule = ValidatorsModule;
  return module.exports;
});

System.registerDynamic("index", ["./src/password/password-validators", "./src/email/email-validators", "./src/universal/universal-validators", "./src/creditcard/creditcard-validators", "./src/phone/phone-validators", "./src/password/password.directive", "./src/email/email.directive", "./src/universal/universal.directive", "./src/creditcard/creditcard.directive", "./src/phone/phone.directive", "./src/validators.module"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var password_validators_1 = $__require('./src/password/password-validators');
  exports.PasswordValidators = password_validators_1.PasswordValidators;
  var email_validators_1 = $__require('./src/email/email-validators');
  exports.EmailValidators = email_validators_1.EmailValidators;
  var universal_validators_1 = $__require('./src/universal/universal-validators');
  exports.UniversalValidators = universal_validators_1.UniversalValidators;
  var creditcard_validators_1 = $__require('./src/creditcard/creditcard-validators');
  exports.CreditCardValidators = creditcard_validators_1.CreditCardValidators;
  var phone_validators_1 = $__require('./src/phone/phone-validators');
  exports.PhoneValidators = phone_validators_1.PhoneValidators;
  var password_directive_1 = $__require('./src/password/password.directive');
  exports.PasswordValidatorDirective = password_directive_1.PasswordValidatorDirective;
  var email_directive_1 = $__require('./src/email/email.directive');
  exports.EmailValidatorDirective = email_directive_1.EmailValidatorDirective;
  var universal_directive_1 = $__require('./src/universal/universal.directive');
  exports.IsInRangeValidatorDirective = universal_directive_1.IsInRangeValidatorDirective;
  exports.IsNumberValidatorDirective = universal_directive_1.IsNumberValidatorDirective;
  exports.MaxValidatorDirective = universal_directive_1.MaxValidatorDirective;
  exports.MinValidatorDirective = universal_directive_1.MinValidatorDirective;
  exports.WhiteSpaceValidatorDirective = universal_directive_1.WhiteSpaceValidatorDirective;
  var creditcard_directive_1 = $__require('./src/creditcard/creditcard.directive');
  exports.CreditCardValidatorDirective = creditcard_directive_1.CreditCardValidatorDirective;
  var phone_directive_1 = $__require('./src/phone/phone.directive');
  exports.PhoneValidatorDirective = phone_directive_1.PhoneValidatorDirective;
  exports.CountryCodeValidatorDirective = phone_directive_1.CountryCodeValidatorDirective;
  exports.PossiblePhoneValidatorDirective = phone_directive_1.PossiblePhoneValidatorDirective;
  var validators_module_1 = $__require('./src/validators.module');
  exports.ValidatorsModule = validators_module_1.ValidatorsModule;
  return module.exports;
});
