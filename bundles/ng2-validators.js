System.registerDynamic("src/password-validators", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var PasswordValidators = (function() {
    function PasswordValidators() {}
    PasswordValidators.repeatCharacterRegexRule = function(repeatCount) {
      return function validate(control) {
        var repeatDec = repeatCount - 1;
        var pattern = '([^\\x00-\\x1F])\\1{' + repeatDec + '}';
        if (control.value !== '' && new RegExp(pattern).test(control.value)) {
          return {'repeatCharacterRegexRule': true};
        }
        return undefined;
      };
    };
    PasswordValidators.whitespaceRule = function() {
      return function validate(control) {
        var pattern = '\\s';
        if (control.value !== '' && new RegExp(pattern).test(control.value)) {
          return {'whitespaceRule': true};
        }
        return undefined;
      };
    };
    PasswordValidators.allowedCharacterRule = function(allowedChars) {
      return function validate(control) {
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

System.registerDynamic("src/email-validators", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var EmailValidators = (function() {
    function EmailValidators() {}
    EmailValidators.simple = function() {
      return function validate(control) {
        var pattern = '^.+@.+\\..+$';
        if (control.value !== '' && !new RegExp(pattern).test(control.value)) {
          return {'simpleEmailRule': true};
        }
        return undefined;
      };
    };
    EmailValidators.normal = function() {
      return function validate(control) {
        var pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        if (control.value !== '' && !pattern.test(control.value)) {
          return {'normalEmailRule': true};
        }
        return undefined;
      };
    };
    return EmailValidators;
  }());
  exports.EmailValidators = EmailValidators;
  return module.exports;
});

System.registerDynamic("ng2-validators", ["./src/password-validators", "./src/email-validators"], true, function($__require, exports, module) {
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
  return module.exports;
});
