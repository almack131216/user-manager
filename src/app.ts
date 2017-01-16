import { Router, RouterConfiguration } from 'aurelia-router';
import { inject } from 'aurelia-framework';
import { WebAPI } from './web-api';

@inject(WebAPI)
export class App {
  router: Router;

  constructor(public api: WebAPI) { }

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'MRT';
    config.map([
      { route: '', moduleId: 'welcome', name: 'welcome', nav: true, title: 'Welcome' },
      { route: 'contacts', moduleId: 'no-selection', name: 'no-selection', nav: true, title: 'Contacts' },
      { route: 'contacts/:id', moduleId: 'contact-detail', name: 'contacts', title: 'Contact' },
      { route: 'login', moduleId: 'login', nav: true, name: 'login', title: 'Login' }
    ]);

    this.router = router;
  }
}