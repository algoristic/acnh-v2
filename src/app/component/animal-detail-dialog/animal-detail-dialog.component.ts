import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Animal } from '../../model/core/animal';

@Component({
  selector: 'app-animal-detail-dialog',
  templateUrl: './animal-detail-dialog.component.html',
  styleUrls: ['./animal-detail-dialog.component.scss']
})
export class AnimalDetailDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<AnimalDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public animal: Animal
  ) { }

  onNoClick(): void {
    console.log('onNoClick');
    this.dialogRef.close();
  }
}  
