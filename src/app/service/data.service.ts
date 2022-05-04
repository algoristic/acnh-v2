import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'

import { Animal } from '../model/animal';
import { Data } from '../model/data';

import data from '../../assets/data.min.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public getAnimals(): Observable<Animal[]> {
    const input = ((data as unknown) as Data);
    const animals = input.animals;
    return of(animals);
  }
}
