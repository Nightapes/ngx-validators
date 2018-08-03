import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css']
})
export class GuideComponent implements OnInit {

  password = [
    {
      name: 'repeatCharacterRegexRule',
    },
    {
      name: 'whitespaceRule',
    },
    {
      name: 'allowedCharacterRule',
    },
    {
      name: 'alphabeticalCharacterRule',
    },
    {
      name: 'digitCharacterRule',
    },
    {
      name: 'lowercaseCharacterRule',
    },
    {
      name: 'uppercaseCharacterRule',
    },
    {
      name: 'specialCharacterRule',
    }
  ];
  email = [
    {
      name: 'simple',
    },
    {
      name: 'normal',
      hint: '(follows the <a href="https://www.w3.org/TR/html5/forms.html#valid-e-mail-address">HTML5</a> rules)',
    }
  ];
  universal = [
    {
      name: 'noWhitespace',
    },
    {
      name: 'noEmptyString',
    },
    {
      name: 'isNumber',
    },
    {
      name: 'isInRange',
    },
    {
      name: 'minLength',
    },
    {
      name: 'maxLength',
    },
    {
      name: 'min',
    },
    {
      name: 'max',
    }
  ];
  creditcards = [
    {
      name: 'americanexpress',
    },
    {
      name: 'visa',
    },
    {
      name: 'dinersclub',
    },
    {
      name: 'discover',
    },
    {
      name: 'jcb',
    },
    {
      name: 'maestro',
    },
    {
      name: 'mastercard',
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
