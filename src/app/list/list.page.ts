import { Component, OnInit } from '@angular/core';
import { notStrictEqual } from 'assert';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  private notes = [
    'Altor',
    'Altor',
    'Altor',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  private notes = [
    'Altor',
    'Altor',
    'Altor',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor() {
    for (let i = 1; i < 4; i++) {
      this.items.push({
        title: 'thisnotes',
        title: 'vagabundo',
        note: this.notes[Math.floor(Math.random() * this.notes.length)],
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
