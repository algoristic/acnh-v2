import { Component, OnInit } from '@angular/core';

import { Filter } from './model/ui/filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public filter: Filter = { };

  ngOnInit(): void { }
}
