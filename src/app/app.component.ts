import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'ng-app',
 templateUrl: 'app.template.html' 
 // template: `<h1>{{title}}</h1><ng-app></ng-app>`
})

export class AppComponent {
  appName: string = "Stock MG";
}
