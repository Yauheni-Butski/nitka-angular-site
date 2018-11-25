import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './components/app/app.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { CategoryComponent } from './components/category/category.component';
import { SectionComponent } from './components/section/section.component';
import { ImageCardPlatesComponent } from './components/image-card-plates/image-card-plates.component';
import { CommonNavigationComponent } from './components/common-navigation/common-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    CategoryComponent,
    SectionComponent,
    ImageCardPlatesComponent,
    CommonNavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent, CommonNavigationComponent]
})
export class AppModule { }
