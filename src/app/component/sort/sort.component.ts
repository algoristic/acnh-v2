import { Component, OnInit, Input } from '@angular/core';

import { Filter } from '../../model/ui/filter';
import { FilterService } from '../../service/filter.service';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent implements OnInit {
  @Input() public extended?: boolean;

  public propertyOptions;
  public orderOptions;

  public filter?: Filter;

  constructor(private filterService: FilterService) {
    this.propertyOptions = [
      { value: 'value', viewValue: 'Sternis' },
      { value: 'name', viewValue: 'Alphabetisch' }
    ];
    this.orderOptions = [
      { value: 'descending', viewValue: 'Absteigend' },
      { value: 'ascending', viewValue: 'Aufsteigend' }
    ];
  }

  ngOnInit(): void {
    this.filterService.getFilter().subscribe(filter => this.filter = filter);
  }

  changeFilter(): void {
    if(this.filter !== undefined) {
      this.filterService.setFilter(this.filter);
    }
  }
}
