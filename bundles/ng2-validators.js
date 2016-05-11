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
    return PasswordValidators;
  }());
  exports.PasswordValidators = PasswordValidators;
  return module.exports;
});

System.registerDynamic("ng2-validators", ["./src/password-validators"], true, function($__require, exports, module) {
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
  return module.exports;
});
