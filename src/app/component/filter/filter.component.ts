import { Component, OnInit } from '@angular/core';

import { Filter } from '../../model/ui/filter';
import { FilterService } from '../../service/filter.service';
import { TimeService } from '../../service/time.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  public filter?: Filter;
  public currentMonth?: string;
  public currentHour?: string;

  constructor(
    private filterService: FilterService,
    private timeService: TimeService
  ) { }

  ngOnInit(): void {
    this.filterService.getFilter().subscribe(filter => this.filter = filter);
    this.currentMonth = this.timeService.getMonthName();
    this.currentHour = this.timeService.getHourName();
  }

  changeFilter(): void {
    if(this.filter !== undefined) {
      this.filterService.setFilter(this.filter);
    }
  }
}
