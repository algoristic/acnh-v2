import { Injectable } from '@angular/core';

import { Filter, FILTER_DEFAULTS } from '../model/ui/filter';


@Injectable({ providedIn: 'root' })
export class QueryService {

  public getFilter(): Filter {
    const filter: any = {};
    Object.keys(FILTER_DEFAULTS).forEach((key: string) => {
      const defaultValue: any = (FILTER_DEFAULTS as any)[key];
      let option: string = this.get(key, defaultValue);
      const objectIdentifiers = ['{', '['];
      const firstLetter = option ? option.charAt(0) : '';
      if(objectIdentifiers.includes(firstLetter)) {
        option = JSON.parse(option);
      }
      filter[key] = option;
    })
    return (<Filter>filter);
  }

  public setFilter(filter: Filter): void {
    Object.keys(filter).forEach((key: string) => {
      let value: any = (filter as any)[key];
      const defaultValue: any = (FILTER_DEFAULTS as any)[key];
      if(value !== defaultValue) {
        if(!(typeof value === 'string')) {
          value = JSON.stringify(value);
        }
        this.set(key, value);
      } else {
        this.delete(key);
      }
    });
  }

  public get(key: string, defaultValue: string): string {
    const params: URLSearchParams = this.getQueryParams();
    if(params.has(key)) {
      return params.get(key)!;
    } else {
      if(!(typeof defaultValue === 'string')) {
        defaultValue = JSON.stringify(defaultValue);
      }
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
    let url = params.toString();
    url = (url.length > 1) ? url : '';
    history.replaceState({}, '', `?${url}`);
  }
}
