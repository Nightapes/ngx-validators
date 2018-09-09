import { Component } from '@angular/core';
import { items, Items } from 'app/items';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menuItems: Items[] = items;
}
