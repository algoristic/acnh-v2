// angular directives
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

// angular/material components
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
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

@NgModule({
  declarations: [
    AppComponent,
    AnimalsViewComponent,
    DomainViewComponent,
    FilterComponent,
    AnimalDetailComponent,
    BrandComponent,
    SortComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
