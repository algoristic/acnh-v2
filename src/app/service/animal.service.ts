import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'

import { Animal } from '../model/core/animal';
import { Data } from '../model/core/data';
import { Filter } from '../model/ui/filter';

import { AnimalFilteringService } from './animal.filtering.service';

import data from '../../assets/json/data.min.json';

@Injectable({ providedIn: 'root' })
export class AnimalService {
  constructor(private filteringService: AnimalFilteringService) { }

  public getAnimals(filter: Filter, domain: string): Observable<Animal[]> {
    // 'fetch' data
    const input = ((data as unknown) as Data);
    // filter and sort result
    const animals = input.animals
      .filter(animal => animal.domain === domain)
      .filter(animal => {
        const priceRangeFilter = this.filteringService.getPriceRangeFilter(filter);
        return priceRangeFilter(animal);
      })
      .filter(animal => {
        const monthFilter = this.filteringService.getMonthFilter(filter);
        return monthFilter(animal, filter);
      })
      .filter(animal => {
        const timeFilter = this.filteringService.getTimeFilter(filter);
        return timeFilter(animal, filter);
      })
      .sort(this.filteringService.getSortedBy(filter));
    return of(animals);
  }

  public getMaxValue(): number {
      const input = ((data as unknown) as Data);
      return Math.max(...input.animals.map(animal => animal.value));
  }
}
