import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'

import { Animal } from '../model/core/animal';
import { Data } from '../model/core/data';
import { Filter } from '../model/ui/filter';
import { DomainFilter } from '../model/ui/domainFilter';

import data from '../../assets/json/data.min.json';

@Injectable({ providedIn: 'root' })
export class AnimalService {
  public getAnimals(filter: Filter, domain: string): Observable<Animal[]> {
    // transform generic Filter to DomainFilter
    const domainFilter: DomainFilter = this.toDomainFilter(filter);
    domainFilter.domain = domain;
    // 'fetch' data
    const input = ((data as unknown) as Data);
    // filter and sort result
    const animals = input.animals.filter(animal => animal.domain === domainFilter.domain);
    return of(animals);
  }

  private toDomainFilter(filter: Filter): DomainFilter {
    return ((filter as unknown) as DomainFilter);
  }
}
