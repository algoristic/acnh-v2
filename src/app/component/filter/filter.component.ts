import { Component, OnInit } from '@angular/core';

import { Filter } from '../../model/ui/filter';
import { FilterService } from '../../service/filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  filter?: Filter;

  constructor(private service: FilterService) { }

  ngOnInit(): void {
    this.service.getFilter().subscribe(filter => this.filter = filter);
  }

  changeFilter(): void {
    console.log(this.filter);
    if(this.filter !== undefined) {
      this.service.setFilter(this.filter);
    }
  }
}
