import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AnimalsViewComponent } from './component/animals-view/animals-view.component';
import { DomainViewComponent } from './component/domain-view/domain-view.component';
import { FilterComponent } from './component/filter/filter.component';

import { AnimalDetailComponent } from './component/animal-detail/animal-detail.component';
import { HeaderComponent } from './component/header/header.component';
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
    HeaderComponent,
    BrandComponent,
    SortComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
