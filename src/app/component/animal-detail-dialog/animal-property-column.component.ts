import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-animal-property-column',
  templateUrl: './animal-property-column.component.html',
  styleUrls: ['./animal-property-column.component.scss']
})

export class AnimalPropertyColumnComponent {
  @Input() public name?: string;
  @Input() public value?: string;
}
