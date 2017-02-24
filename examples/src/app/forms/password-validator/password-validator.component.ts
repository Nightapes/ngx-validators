import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-password-validator',
  templateUrl: './password-validator.component.html',
  styleUrls: ['./password-validator.component.css']
})
export class FormPasswordValidatorComponent implements OnInit {

  password: string;

  constructor() { }

  ngOnInit() {
  }

}
