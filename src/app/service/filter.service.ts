import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs'

import { Filter } from '../model/ui/filter';

@Injectable({ providedIn: 'root' })
export class FilterService {

  private filter: BehaviorSubject<Filter> = new BehaviorSubject({
    monthOption: 'current',
    timeOption: 'current',
    sortProperty: 'value',
    sortOrder: 'descending'
  });

  getFilter(): Observable<Filter> {
    return this.filter.asObservable();
  }

  setFilter(filter: Filter) {
    this.filter.next(filter);
  }
}
