import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { AnimalDetailDialogComponent } from '../animal-detail-dialog/animal-detail-dialog.component';
import { Animal } from '../../model/core/animal';

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.scss']
})
export class AnimalDetailComponent {
  @Input() public animal?: Animal;

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(AnimalDetailDialogComponent, {
      data: this.animal
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed')
    });
  }
}
