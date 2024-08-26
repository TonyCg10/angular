import { Component } from '@angular/core';
import { CURRENCIES } from "./currency";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Currency Program';

  currencies? = CURRENCIES;
}
