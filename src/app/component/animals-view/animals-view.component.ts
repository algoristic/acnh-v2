import { Component, Input } from '@angular/core';

import { Filter } from '../../model/ui/filter';

@Component({
  selector: 'app-animals-view',
  templateUrl: './animals-view.component.html',
  styleUrls: ['./animals-view.component.scss']
})
export class AnimalsViewComponent {
  @Input() public filter: Filter = {};
}
