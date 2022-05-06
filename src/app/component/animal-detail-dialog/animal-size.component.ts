import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-animal-size',
  templateUrl: './animal-size.component.html',
  styleUrls: ['./animal-size.component.scss']
})
export class AnimalSizeComponent {
  @Input() public animalSize?: string;
  public sizes: string[];

  constructor() {
    this.sizes = ['Winzig', 'Klein', 'Mittel', 'Groß', 'Sehr groß', 'Sehr groß mit Rückenflosse', 'Riesig', 'Schmal'];
  }
}
