import { Injectable } from '@angular/core';

import { Animal } from '../model/core/animal';
import { Filter } from '../model/ui/filter';
import { TimeService } from './time.service';

type AnimalFilterFunction = (animal: Animal, filter: Filter) => boolean;
type AnimalFilter = {
  current: AnimalFilterFunction,
  all: AnimalFilterFunction,
  custom: AnimalFilterFunction
}

type AnimalSortFunction = (a_1: Animal, a_2: Animal) => number;
type AnimalSortProperty = {
  ascending: AnimalSortFunction,
  descending: AnimalSortFunction
}
type AnimalSort = {
  value: AnimalSortProperty,
  name: AnimalSortProperty
}

@Injectable({ providedIn: 'root' })
export class AnimalFilteringService {
  private monthFilter: AnimalFilter;
  private timeFilter: AnimalFilter;
  private sort: AnimalSort;

  constructor(private timeService: TimeService) {
    this.monthFilter = {
      current: (animal: Animal) => {
        const currentMonth = this.timeService.getMonth();
        return animal.northern.includes(currentMonth)
      },
      all: () => true,
      custom: (animal: Animal, filter: Filter) => {
        return animal.northern.some(month => {
          return filter.months!.includes(month);
        });
      }
    }
    this.timeFilter = {
      current: (animal: Animal) => {
        const currentHour = this.timeService.getHour();
        return animal.active[currentHour] ? true : false
      },
      all: () => true,
      custom: () => true
    }
    this.sort = {
      value: {
        ascending: (a1: Animal, a2: Animal) => a1.value - a2.value,
        descending: (a1: Animal, a2: Animal) => a2.value - a1.value
      },
      name: {
        ascending: (a1: Animal, a2: Animal) => (a1.name < a2.name) ? -1 : (a1.name > a2.name) ? 1 : 0,
        descending: (a1: Animal, a2: Animal) => (a1.name < a2.name) ? 1 : (a1.name > a2.name) ? -1 : 0
      }
    }
  }

  getPriceRangeFilter(filter: Filter): (animal: Animal) => boolean {
    return (animal: Animal) => {
      if(!filter.priceRange) {
        return true;
      } else {
        return ((animal.value >= filter.priceMin) && (animal.value <= filter.priceMax));
      }
    }
  }

  getMonthFilter(filter: Filter): (animal: Animal, filter: Filter) => boolean {
    return (this.monthFilter as any)[filter.monthOption];
  }

  getTimeFilter(filter: Filter): (animal: Animal, filter: Filter) => boolean {
    return (this.timeFilter as any)[filter.timeOption];
  }

  getSortedBy(filter: Filter): (a_1: Animal, a_2: Animal) => number {
    return (this.sort as any)[filter.sortProperty][filter.sortOrder];
  }
}
