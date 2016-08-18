System.registerDynamic("src/password-validators", ["./util"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var util_1 = $__require('./util');
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
    return PasswordValidators;
  }());
  exports.PasswordValidators = PasswordValidators;
  return module.exports;
});

System.registerDynamic("src/email-validators", ["./util"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var util_1 = $__require('./util');
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

System.registerDynamic("src/universal-validators", ["@angular/core/src/facade/lang", "./util"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var lang_1 = $__require('@angular/core/src/facade/lang');
  var util_1 = $__require('./util');
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
        if (lang_1.NumberWrapper.isNaN(control.value)) {
          return {'numberRequired': true};
        }
        return undefined;
      };
    };
    UniversalValidators.isInRange = function(minValue, maxValue) {
      return function validate(control) {
        if (util_1.Util.isNotPresent(control))
          return undefined;
        if (lang_1.NumberWrapper.isNaN(control.value)) {
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
    return UniversalValidators;
  }());
  exports.UniversalValidators = UniversalValidators;
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
      return control.value !== '' ? false : true;
    };
    ;
    return Util;
  }());
  exports.Util = Util;
  return module.exports;
});

System.registerDynamic("src/creditcard-validators", ["./util"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var util_1 = $__require('./util');
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

System.registerDynamic("ng2-validators", ["./src/password-validators", "./src/email-validators", "./src/universal-validators", "./src/creditcard-validators"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  function __export(m) {
    for (var p in m)
      if (!exports.hasOwnProperty(p))
        exports[p] = m[p];
  }
  __export($__require('./src/password-validators'));
  __export($__require('./src/email-validators'));
  __export($__require('./src/universal-validators'));
  __export($__require('./src/creditcard-validators'));
  return module.exports;
});
