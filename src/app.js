import {Aurelia} from 'aurelia-framework';

export class App {

  configureRouter(config, router){
    config.title = 'Aurelia';
    config.map([
      { route: ['','welcome'], name: 'welcome', moduleId: './welcome', nav: true, title: 'Welcome'},
      { route: 'form', name: 'form', moduleId: './form', nav: true, title: 'Form'},
      { route: 'register', name: 'register', moduleId: './register', nav: true, title: 'Register'}
    ]);

    this.router = router;
  }
}