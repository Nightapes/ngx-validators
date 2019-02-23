import { Component } from '@angular/core';
import { EmailOptions } from 'ngx-validators/components/email/email-util';

@Component({
  selector: 'app-email-suggest',
  templateUrl: './form-email-suggest.component.html'
})

export class FormEmailSuggestComponent {
  model: any;

  // Add your own domains via EmailOptions
  customOptions: EmailOptions = {
    domains: ['msn.com', 'bellsouth.net',
      'telus.net', 'comcast.net', 'optusnet.com.au',
      'earthlink.net', 'qq.com', 'sky.com', 'icloud.com',
      'mac.com', 'sympatico.ca', 'googlemail.com',
      'att.net', 'xtra.co.nz', 'web.de', 'mymail.com',
      'cox.net', 'gmail.com', 'ymail.com', 'yahoo.com',
      'aim.com', 'rogers.com', 'verizon.net',
      'rocketmail.com', 'google.com', 'optonline.net',
      'sbcglobal.net', 'aol.com', 'me.com', 'btinternet.com',
      'charter.net', 'shaw.ca'],
    secondLevelDomains: ['yahoo', 'hotmail', 'mail', 'live', 'outlook', 'gmx', 'mymail'],
    topLevelDomains: ['com', 'com.au', 'com.tw', 'ca', 'co.nz', 'co.uk', 'de',
      'fr', 'it', 'ru', 'net', 'org', 'edu', 'gov', 'jp', 'nl', 'kr', 'se', 'eu',
      'ie', 'co.il', 'us', 'at', 'be', 'dk', 'hk', 'es', 'gr', 'ch', 'no', 'cz',
      'in', 'net', 'net.au', 'info', 'biz', 'mil', 'co.jp', 'sg', 'hu', 'uk']
  };

  addToForm(email) {
    this.model = email;
  }
}
