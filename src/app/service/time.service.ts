import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TimeService {
  getHour(): number {
    return (new Date()).getHours();
  }

  getHourName(): string {
    const hour = this.getHour();
    return `${hour} Uhr`;
  }

  getMonth(): number {
    return (1 + (new Date()).getMonth())
  }

  getMonthName(): string {
    return (new Date()).toLocaleString('de-DE', { month: 'long' });
  }
}
