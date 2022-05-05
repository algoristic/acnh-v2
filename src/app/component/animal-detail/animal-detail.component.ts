import { Component, Input } from '@angular/core';

import { Animal } from '../../model/core/animal';

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.scss']
})
export class AnimalDetailComponent {
  @Input() public animal?: Animal;
}
