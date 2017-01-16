import {inject} from 'aurelia-framework';
import {computedFrom} from 'aurelia-framework';
import {Configuration} from './globals';
//import {bootstrap} from 'bootstrap';

@inject(Configuration)
export class Welcome {
  constructor(config) {        
    this.title = 'Aurelia - Binding Behavior';
  }

}
