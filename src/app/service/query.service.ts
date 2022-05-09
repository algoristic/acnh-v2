import { Injectable } from '@angular/core';

import { Filter, FILTER_DEFAULTS } from '../model/ui/filter';


@Injectable({ providedIn: 'root' })
export class QueryService {

  public getFilter(): Filter {
    const filter: any = {};
    Object.keys(FILTER_DEFAULTS).forEach((key: string) => {
      const defaultValue: any = (FILTER_DEFAULTS as any)[key];
      const option = this.get(key, defaultValue);
      filter[key] = option;
    })
    return (<Filter>filter);
    // const monthOption = this.get('monthOption', 'current');
    // const timeOption = this.get('timeOption', 'current');
    // const sortProperty = this.get('sortProperty', 'value');
    // const sortOrder = this.get('sortOrder', 'descending');
    // return {
    //   monthOption: monthOption,
    //   timeOption: timeOption,
    //   sortProperty: sortProperty,
    //   sortOrder: sortOrder
    // };
  }

  public setFilter(filter: Filter): void {
    Object.keys(filter).forEach((key: string) => {
      const value: any = (filter as any)[key];
      const defaultValue: any = (FILTER_DEFAULTS as any)[key];
      if(value !== defaultValue) {
        this.set(key, value);
      }
    });
  }

  public get(key: string, defaultValue: string): string {
    const params: URLSearchParams = this.getQueryParams();
    if(params.has(key)) {
      return params.get(key)!;
    } else {
      return defaultValue;
    }
  }

  public set(key: string, value: string): void {
    const params = this.getQueryParams();
    params.set(key, value);
    this.setQueryParams(params);
  }

  public delete(key: string): void {
    const params = this.getQueryParams();
    if(params.has(key)) {
      params.delete(key);
      this.setQueryParams(params);
    }
  }

  private getQueryParams(): URLSearchParams {
    return new URLSearchParams(window.location.search);
  }

  private setQueryParams(params: URLSearchParams): void {
    const url = params.toString();
    history.replaceState({}, '', `?${url}`);
  }
}
