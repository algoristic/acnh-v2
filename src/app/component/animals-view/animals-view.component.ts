import { Component } from '@angular/core';

@Component({
  selector: 'app-animals-view',
  templateUrl: './animals-view.component.html',
  styleUrls: ['./animals-view.component.scss']
})
export class AnimalsViewComponent {
  public columns: number;

  constructor() {
    this.columns = this.calcColumns();
  }

  public handleResize(): void {
    this.columns = this.calcColumns();
  }

  private calcColumns(): number {
    return Math.min(20, Math.round(window.innerWidth / 100));
  }
}
