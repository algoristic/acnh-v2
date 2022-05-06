// angular directives
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

// angular/material components
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

//app components
import { AppComponent } from './app.component';
import { AnimalsViewComponent } from './component/animals-view/animals-view.component';
import { DomainViewComponent } from './component/domain-view/domain-view.component';
import { FilterComponent } from './component/filter/filter.component';
import { AnimalDetailComponent } from './component/animal-detail/animal-detail.component';
import { BrandComponent } from './component/brand/brand.component';
import { SortComponent } from './component/sort/sort.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimalDetailDialogComponent } from './component/animal-detail-dialog/animal-detail-dialog.component';
import { AnimalPropertyColumnComponent } from './component/animal-detail-dialog/animal-property-column.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalsViewComponent,
    DomainViewComponent,
    FilterComponent,
    AnimalDetailComponent,
    BrandComponent,
    SortComponent,
    AnimalDetailDialogComponent,
    AnimalPropertyColumnComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatBadgeModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatTableModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
