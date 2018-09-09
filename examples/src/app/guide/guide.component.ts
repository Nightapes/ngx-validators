import { Component } from '@angular/core';
import { Items, items } from '../items';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css']
})
export class GuideComponent {
  menuItems: Items[] = items;
}
