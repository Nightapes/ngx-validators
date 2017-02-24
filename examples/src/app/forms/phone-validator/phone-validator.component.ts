import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-phone-validator',
  templateUrl: './phone-validator.component.html',
  styleUrls: ['./phone-validator.component.css']
})
export class FormPhoneValidatorComponent implements OnInit {

  model: any = {
    phone: '',
    phone2: '',
    countryCode: ''
  };

  constructor() { }

  ngOnInit() {
  }

}
