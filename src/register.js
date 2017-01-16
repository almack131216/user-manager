import {inject, NewInstance} from 'aurelia-dependency-injection';  
import {ValidationController} from 'aurelia-validation';

@inject(NewInstance.of(ValidationController))
export class RegistrationForm {  
  firstName = '';
  lastName = '';
  email = '';

  constructor(controller) {
    this.title = 'Register';
    this.controller = controller;
  }

  submit() {
    let errors = this.controller.validate();
    // todo: call server...
  }
}