import { Component, OnInit, Input } from '@angular/core';

import { Animal } from '../../model/core/animal';
import { AnimalService } from '../../service/animal.service';
import { Filter } from '../../model/ui/filter';

@Component({
  selector: 'app-domain-view',
  templateUrl: './domain-view.component.html',
  styleUrls: ['./domain-view.component.scss']
})
export class DomainViewComponent implements OnInit {
  @Input() public filter: Filter = {};
  @Input() public domain: string = '';
  public animals: Animal[] = [];

  constructor(private animalService: AnimalService) { }

  ngOnInit(): void {
    this.animalService.getAnimals(this.filter, this.domain)
      .subscribe(animals => {
        this.animals = animals;
      })
  }
}
