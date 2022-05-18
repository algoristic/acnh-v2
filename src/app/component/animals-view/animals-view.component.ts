import { Component } from '@angular/core';

@Component({
  selector: 'app-animals-view',
  templateUrl: './animals-view.component.html',
  styleUrls: ['./animals-view.component.scss']
})
export class AnimalsViewComponent {
  public columns: number;
  public height: number;
  private breakpoints: [size:number, cols:number][] = [
    [300, 2],
    [576, 3],
    [768, 4],
    [992, 5],
    [1200, 6],
    [1400, 8]
  ];

  constructor() {
    this.columns = this.calcColumns();
    this.height = this.calcHeight();
  }


  public handleResize(): void {
    this.columns = this.calcColumns();
    this.height = this.calcHeight();
  }

  private calcColumns(): number {
    let result = 1;
    for(let breakpoint of this.breakpoints)  {
      if(window.innerWidth >= breakpoint[0]) {
        result = breakpoint[1];
      }
    }
    return result;
  }

  private calcHeight(): number {
    if(window.innerWidth < 576) {
      return 150;
    } else {
      return 76;
    }
  }
}
