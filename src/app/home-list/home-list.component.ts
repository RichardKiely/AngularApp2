import { Component, OnInit } from '@angular/core';

export class Location {
  name!: string;
}

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css'],
})
export class HomeListComponent implements OnInit {
  constructor() {}
  location: Location = {
    name: 'Brandon Hotel',
  };

  ngOnInit(): void {}
}
