import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './components/app/app.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { CategoryComponent } from './components/category/category.component';
import { CategorySectionComponent } from './components/category-section/category-section.component';
import { ImageCardPlatesComponent } from './components/image-card-plates/image-card-plates.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    CategoryComponent,
    CategorySectionComponent,
    ImageCardPlatesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
