import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs'

import { Filter } from '../model/ui/filter';
import { QueryService } from './query.service';

@Injectable({ providedIn: 'root' })
export class FilterService {

  private filter: BehaviorSubject<Filter>;

  constructor(private queryService: QueryService) {
    let filter = this.queryService.getFilter();
    this.filter = new BehaviorSubject(filter);
  }

  getFilter(): Observable<Filter> {
    return this.filter.asObservable();
  }

  setFilter(filter: Filter) {
    this.queryService.setFilter(filter);
    this.filter.next(filter);
  }
}
