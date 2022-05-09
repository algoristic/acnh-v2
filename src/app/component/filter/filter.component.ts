import { Component, OnInit } from '@angular/core';

import { Filter, FILTER_DEFAULTS } from '../../model/ui/filter';
import { AnimalService } from '../../service/animal.service';
import { FilterService } from '../../service/filter.service';
import { TimeService } from '../../service/time.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  public extended: boolean = false;
  public months = [
    { value: 1, viewValue: "Jan", selected: false },
    { value: 2, viewValue: "Feb", selected: false },
    { value: 3, viewValue: "Mrz", selected: false },
    { value: 4, viewValue: "Apr", selected: false },
    { value: 5, viewValue: "Mai", selected: false },
    { value: 6, viewValue: "Jun", selected: false },
    { value: 7, viewValue: "Jul", selected: false },
    { value: 8, viewValue: "Aug", selected: false },
    { value: 9, viewValue: "Sep", selected: false },
    { value: 10, viewValue: "Okt", selected: false },
    { value: 11, viewValue: "Nov", selected: false },
    { value: 12, viewValue: "Dez", selected: false }
  ];
  public monthOptions;
  public timeOptions;
  public priceMax: number;

  public filter?: Filter;

  constructor(
    private filterService: FilterService,
    private timeService: TimeService,
    private animalService: AnimalService) {
      this.monthOptions = [
        { value: 'current', viewValue: this.timeService.getMonthName() },
        { value: 'all', viewValue: 'Ganzes Jahr' }
      ];
      this.timeOptions = [
        { value: 'current', viewValue: this.timeService.getHourName() },
        { value: 'all', viewValue: 'Ganzer Tag' }
      ];
      this.priceMax = this.animalService.getMaxValue();
    }

  ngOnInit(): void {
    this.filterService.getFilter().subscribe(filter => {
      this.filter = filter;
      if(filter.monthOption === 'custom' || filter.timeOption === 'custom') {
        this.extended = true;
        this.months = this.months.map(month => {
          if(filter.months!.includes(month.value)) {
            month.selected = true;
          }
          return month;
        });
      }
    });
  }

  // set default values for extended options
  extend(): void {
    this.extended = true;
    const filterMonths: number[] = [];
    let { monthOption } = this.filter!;
    if('current' === monthOption) {
      const current = this.timeService.getMonth();
      this.months = this.months.map(month => {
        if(month.value === current) {
          filterMonths.push(current);
          month.selected = true;
        }
        return month;
      });
    } else { // 'all' === monthOption
      this.months = this.months.map(month => {
        month.selected = true;
        filterMonths.push(month.value);
        return month;
      });
    }
    this.filter!.months = filterMonths;
    this.filter!.monthOption = 'custom';
    this.filter!.priceRange = true;
    this.filter!.priceMin = 0;
    this.filter!.priceMax = this.priceMax;
    this.changeFilter();
  }

  // reset values for extended options an set default values for normal options
  reduce(): void {
    this.extended = false;
    this.filter!.monthOption = FILTER_DEFAULTS.monthOption;
    this.filter!.months = undefined;
    this.filter!.priceRange = false;
    this.filter!.priceMin = FILTER_DEFAULTS.priceMin;
    this.filter!.priceMax = FILTER_DEFAULTS.priceMax;
    this.changeFilter();
  }

  changeFilter(): void {
    this.filterService.setFilter(this.filter!);
  }

  monthSelect(event: any, value: number): void {
    if(this.filter != undefined) {
      if(event.checked) {
        this.filter.months!.push(value);
      } else {
        this.filter.months = this.filter.months!.filter(val => val !== value);
        if(this.filter.months.length === 0) {
          this.filter.months = undefined;
        }
      }
      this.changeFilter();
    }
  }
}
