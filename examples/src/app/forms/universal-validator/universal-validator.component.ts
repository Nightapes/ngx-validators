import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-universal-validator',
  templateUrl: './universal-validator.component.html',
  styleUrls: ['./universal-validator.component.css']
})
export class FormUniversalValidatorComponent implements OnInit {

  model: any = {
    whitespace: '',
    isNumber: '',
    range: '',
    min: '',
    max: ''
  };
  constructor() { }

  ngOnInit() {
  }

}
