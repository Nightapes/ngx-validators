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


## How to use

```
password: Control = new Control('', Validators.compose([
        PasswordValidators.repeatCharacterRegexRule(4),
        PasswordValidators.whitespaceRule()
    ]));
```

```
email: Control = new Control('', EmailValidators.normal());
```

```
text: Control = new Control('', UniversalValidators.minLength(2));
```


##Todo

* Implement  https://github.com/mailcheck/mailcheck
* Add more password rules
* Add phone validators
* Add address validator 

Get the complete changelog here: https://github.com/Nightapes/ng2-validators/releases

