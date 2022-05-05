import { Injectable } from '@angular/core';

import { Animal } from '../model/core/animal';
import { Filter } from '../model/ui/filter';
import { TimeService } from './time.service';

@Injectable({ providedIn: 'root' })
export class AnimalFilteringService {
  constructor(private timeService: TimeService) { }

  getMonthFilter(filter: Filter): (animal: Animal) => boolean {
    const currentMonth = this.timeService.getMonth();
    const current = (animal: Animal) => animal.northern.includes(currentMonth)
    const all = () => true;
    let result;
    switch (filter.monthOption) {
      case "all":
        result = all;
        break;
      default:
      case "current":
        result = current;
        break;
    }
    return result;
  }

  getTimeFilter(filter: Filter): (animal: Animal) => boolean {
    const currentHour = this.timeService.getHour();
    const current = (animal: Animal) => animal.active[currentHour] ? true : false;
    const all = () => true;
    let result = current;
    switch (filter.timeOption) {
      case "all":
        result = all;
        break;
      default:
      case "current":
        result = current;
        break;
    }
    return result;
  }
}
