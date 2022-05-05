import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'

import { Animal } from '../model/core/animal';
import { Data } from '../model/core/data';
import { Filter } from '../model/ui/filter';
import { DomainFilter } from '../model/ui/domainFilter';

import data from '../../assets/json/data.min.json';

@Injectable({ providedIn: 'root' })
export class AnimalService {
  public getAnimals(baseFilter: Filter, domain: string): Observable<Animal[]> {
    // transform generic Filter to DomainFilter
    const filter: DomainFilter = {
      baseFilter: baseFilter,
      domain: domain
    };
    // 'fetch' data
    const input = ((data as unknown) as Data);
    // filter and sort result
    const animals = input.animals.filter(animal => animal.domain === filter.domain);
    return of(animals);
  }
}
