import { Component, OnInit, AfterViewInit, ViewChild, Input } from '@angular/core';
import { MatSelect } from '@angular/material/select';

import { Filter } from '../../model/ui/filter';
import { FilterService } from '../../service/filter.service';
import { TimeService } from '../../service/time.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Input() public extended?: boolean;

  public monthOptions;
  public timeOptions;

  public filter?: Filter;

  constructor(
    private filterService: FilterService,
    private timeService: TimeService) {
      this.monthOptions = [
        { value: 'current', viewValue: this.timeService.getMonthName() },
        { value: 'all', viewValue: 'Ganzes Jahr' }
      ];
      this.timeOptions = [
        { value: 'current', viewValue: this.timeService.getHourName() },
        { value: 'all', viewValue: 'Ganzer Tag' }
      ];
    }

  ngOnInit(): void {
    this.filterService.getFilter().subscribe(filter => this.filter = filter);
  }

  changeFilter(): void {
    console.log('call');
    if(this.filter !== undefined) {
      this.filterService.setFilter(this.filter);
    }
  }
}
