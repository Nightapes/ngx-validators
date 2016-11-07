System.registerDynamic("src/creditcard/creditcard-validators", ["./../util"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var util_1 = $__require('./../util');
  var visa = '(?:4[0-9]{12})(?:[0-9]{3})?$';
  var americanExpress = '(?:3[47][0-9]{13})$';
  var maestro = '(?:(?:5[0678]\\d\\d|6304|6390|67\\d\\d)\\d{8,15})$';
  var jcb = '(?:(?:2131|1800|35\\d{3})\\d{11})$';
  var discover = '(?:6(?:011|5[0-9]{2})(?:[0-9]{12}))$';
  var dinersclub = '(?:3(?:0[0-5]|[68][0-9])[0-9]{11})$';
  var mastercard = '(?:5[1-5][0-9]{14})$';
  var CreditCardValidators = (function() {
    function CreditCardValidators() {}
    CreditCardValidators.isCreditCard = function() {
      return function validate(control) {
        if (util_1.Util.isNotPresent(control))
          return undefined;
        if (new RegExp(americanExpress + '|' + visa + '|' + maestro + '|' + jcb + '|' + discover + '|' + mastercard + '|' + dinersclub).test(control.value)) {
          return undefined;
        }
        return {'creditcard': true};
      };
    };
    CreditCardValidators.americanExpress = function() {
      return function validate(control) {
        if (util_1.Util.isNotPresent(control))
          return undefined;
        if (new RegExp(americanExpress).test(control.value)) {
          return undefined;
        }
        return {'americanExpress': true};
      };
    };
    CreditCardValidators.dinersclub = function() {
      return function validate(control) {
        if (util_1.Util.isNotPresent(control))
          return undefined;
        if (new RegExp(dinersclub).test(control.value)) {
          return undefined;
        }
        return {'dinersclub': true};
      };
    };
    CreditCardValidators.discover = function() {
      return function validate(control) {
        if (util_1.Util.isNotPresent(control))
          return undefined;
        if (new RegExp(discover).test(control.value)) {
          return undefined;
        }
        return {'discover': true};
      };
    };
    CreditCardValidators.jcb = function() {
      return function validate(control) {
        if (util_1.Util.isNotPresent(control))
          return undefined;
        if (new RegExp(jcb).test(control.value)) {
          return undefined;
        }
        return {'jcb': true};
      };
    };
    CreditCardValidators.maestro = function() {
      return function validate(control) {
        if (util_1.Util.isNotPresent(control))
          return undefined;
        if (new RegExp(maestro).test(control.value)) {
          return undefined;
        }
        return {'maestro': true};
      };
    };
    CreditCardValidators.mastercard = function() {
      return function validate(control) {
        if (util_1.Util.isNotPresent(control))
          return undefined;
        if (new RegExp(mastercard).test(control.value)) {
          return undefined;
        }
        return {'mastercard': true};
      };
    };
    CreditCardValidators.visa = function() {
      return function validate(control) {
        if (util_1.Util.isNotPresent(control))
          return undefined;
        if (new RegExp(visa).test(control.value)) {
          return undefined;
        }
        return {'visa': true};
      };
    };
    return CreditCardValidators;
  }());
  exports.CreditCardValidators = CreditCardValidators;
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
          this.validator = creditcard_validators_1.CreditCardValidators.isCreditCard();
          break;
        case 'americanExpress':
          this.validator = creditcard_validators_1.CreditCardValidators.americanExpress();
          break;
        case 'dinersclub':
          this.validator = creditcard_validators_1.CreditCardValidators.dinersclub();
          break;
        case 'discover':
          this.validator = creditcard_validators_1.CreditCardValidators.discover();
          break;
        case 'jcb':
          this.validator = creditcard_validators_1.CreditCardValidators.jcb();
          break;
        case 'maestro':
          this.validator = creditcard_validators_1.CreditCardValidators.maestro();
          break;
        case 'mastercard':
          this.validator = creditcard_validators_1.CreditCardValidators.mastercard();
          break;
        case 'visa':
          this.validator = creditcard_validators_1.CreditCardValidators.visa();
          break;
        default:
          this.validator = creditcard_validators_1.CreditCardValidators.isCreditCard();
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
  var EmailValidators = (function() {
    function EmailValidators() {}
    EmailValidators.simple = function() {
      return function validate(control) {
        if (util_1.Util.isNotPresent(control))
          return undefined;
        var pattern = '^.+@.+\\..+$';
        if (new RegExp(pattern).test(control.value)) {
          return undefined;
        }
        return {'simpleEmailRule': true};
      };
    };
    EmailValidators.normal = function() {
      return function validate(control) {
        if (util_1.Util.isNotPresent(control))
          return undefined;
        var pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        if (pattern.test(control.value)) {
          return undefined;
        }
        return {'normalEmailRule': true};
      };
    };
    return EmailValidators;
  }());
  exports.EmailValidators = EmailValidators;
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
          this.validator = email_validators_1.EmailValidators.simple();
          break;
        case 'normal':
          this.validator = email_validators_1.EmailValidators.normal();
          break;
        default:
          this.validator = email_validators_1.EmailValidators.normal();
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
  var UniversalValidators = (function() {
    function UniversalValidators() {}
    UniversalValidators.noWhitespace = function() {
      return function validate(control) {
        if (util_1.Util.isNotPresent(control))
          return undefined;
        var pattern = '\\s';
        if (new RegExp(pattern).test(control.value)) {
          return {'noWhitespaceRequired': true};
        }
        return undefined;
      };
    };
    UniversalValidators.isNumber = function() {
      return function validate(control) {
        if (util_1.Util.isNotPresent(control))
          return undefined;
        if (isNaN(control.value)) {
          return {'numberRequired': true};
        }
        return undefined;
      };
    };
    UniversalValidators.isInRange = function(minValue, maxValue) {
      return function validate(control) {
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
    UniversalValidators.minLength = function(minLength) {
      return function validate(control) {
        if (util_1.Util.isNotPresent(control))
          return undefined;
        var value = control.value;
        if (value.length <= minLength) {
          return undefined;
        }
        return {'minLength': true};
      };
    };
    UniversalValidators.maxLength = function(maxLength) {
      return function validate(control) {
        if (util_1.Util.isNotPresent(control))
          return undefined;
        var value = control.value;
        if (maxLength >= value.length) {
          return undefined;
        }
        return {'maxLength': true};
      };
    };
    UniversalValidators.min = function(min) {
      return function validate(control) {
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
    UniversalValidators.max = function(max) {
      return function validate(control) {
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
    return UniversalValidators;
  }());
  exports.UniversalValidators = UniversalValidators;
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
      this.validator = universal_validators_1.UniversalValidators.noWhitespace();
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
      this.validator = universal_validators_1.UniversalValidators.isNumber();
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

System.registerDynamic("src/password/password-validators", ["./../util"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var util_1 = $__require('./../util');
  var PasswordValidators = (function() {
    function PasswordValidators() {}
    PasswordValidators.repeatCharacterRegexRule = function(repeatCount) {
      return function validate(control) {
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
    PasswordValidators.allowedCharacterRule = function(allowedChars) {
      return function validate(control) {
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
    PasswordValidators.alphabeticalCharacterRule = function(amount) {
      return function validate(control) {
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
    PasswordValidators.digitCharacterRule = function(amount) {
      return function validate(control) {
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
    PasswordValidators.lowercaseCharacterRule = function(amount) {
      return function validate(control) {
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
    PasswordValidators.uppercaseCharacterRule = function(amount) {
      return function validate(control) {
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
    PasswordValidators.mismatchedPasswords = function(passwordControlName, confirmPasswordControlName) {
      return function validate(group) {
        var newPasswordValue = group.get(passwordControlName ? passwordControlName : 'newPassword').value;
        var newPasswordConfirmValue = group.get(confirmPasswordControlName ? confirmPasswordControlName : 'confirmPassword').value;
        if (newPasswordValue !== newPasswordConfirmValue) {
          group.get(confirmPasswordControlName ? confirmPasswordControlName : 'confirmPassword').setErrors({'mismatchedPasswords': true});
          return {'mismatchedPasswords': true};
        }
        return undefined;
      };
    };
    return PasswordValidators;
  }());
  exports.PasswordValidators = PasswordValidators;
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

System.registerDynamic("src/validators.module", ["@angular/core", "./creditcard/creditcard.directive", "./email/email.directive", "./universal/universal.directive", "./password/password.directive"], true, function($__require, exports, module) {
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
  var ValidatorsModule = (function() {
    function ValidatorsModule() {}
    ValidatorsModule = __decorate([core_1.NgModule({
      declarations: [creditcard_directive_1.CreditCardValidatorDirective, email_directive_1.EmailValidatorDirective, password_directive_1.PasswordValidatorDirective, universal_directive_1.IsInRangeValidatorDirective, universal_directive_1.IsNumberValidatorDirective, universal_directive_1.MaxValidatorDirective, universal_directive_1.MinValidatorDirective, universal_directive_1.WhiteSpaceValidatorDirective],
      exports: [creditcard_directive_1.CreditCardValidatorDirective, email_directive_1.EmailValidatorDirective, password_directive_1.PasswordValidatorDirective, universal_directive_1.IsInRangeValidatorDirective, universal_directive_1.IsNumberValidatorDirective, universal_directive_1.MaxValidatorDirective, universal_directive_1.MinValidatorDirective, universal_directive_1.WhiteSpaceValidatorDirective]
    }), __metadata('design:paramtypes', [])], ValidatorsModule);
    return ValidatorsModule;
  }());
  exports.ValidatorsModule = ValidatorsModule;
  return module.exports;
});

System.registerDynamic("index", ["./src/password/password-validators", "./src/email/email-validators", "./src/universal/universal-validators", "./src/creditcard/creditcard-validators", "./src/password/password.directive", "./src/email/email.directive", "./src/universal/universal.directive", "./src/creditcard/creditcard.directive", "./src/validators.module"], true, function($__require, exports, module) {
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
  var validators_module_1 = $__require('./src/validators.module');
  exports.ValidatorsModule = validators_module_1.ValidatorsModule;
  return module.exports;
});
