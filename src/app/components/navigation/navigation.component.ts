import { Component, OnInit } from '@angular/core';

interface IMenuItem {
  title: string;
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})
export class NavigationComponent implements OnInit {

  items: IMenuItem[] = [
    { title: 'Алфавіт' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
