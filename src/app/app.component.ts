import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  template:
  `<div>
  <h3>{{pageTitle}}</h3>
  <cric-products></cric-products>
  </div>`
})
export class AppComponent{
  pageTitle: string = "Online Cricket Store";
}