import { Component, OnInit, Input } from '@angular/core';

import { Animal } from '../../model/core/animal';
import { AnimalService } from '../../service/animal.service';
import { FilterService } from '../../service/filter.service';

@Component({
  selector: 'app-domain-view',
  templateUrl: './domain-view.component.html',
  styleUrls: ['./domain-view.component.scss']
})
export class DomainViewComponent implements OnInit {
  @Input() public domain: string = '';
  public animals: Animal[] = [];

  constructor(
    private animalService: AnimalService,
    private filterService: FilterService) { }

  ngOnInit() {
    this.filterService.getFilter().subscribe(filter => {
      this.animalService.getAnimals(filter, this.domain).subscribe(animals => {
        this.animals = animals;
        console.log(`${this.domain}`);
      })
    });
  }
}
