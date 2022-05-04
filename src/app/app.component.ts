import { Component, OnInit } from '@angular/core';

import { Animal } from './model/animal';
import { DataService } from './service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public animals: Animal[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getAnimals()
      .subscribe(animals => {
        this.animals = animals
      });
  }
}
