import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, CategoryComponent, SectionComponent, ImageCardPlatesComponent, CommonNavigationComponent } from './';

/* Feature modules */
import { AdminModule } from './admin/admin.module';
import { GalleryModule } from './gallery/gallery.module';
import { SharedModule } from './shared/shared.module';

/* Layouts */
import { SiteLayoutComponent, SiteHeaderComponent, SiteFooterComponent } from './_layout';


@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    SectionComponent,
    ImageCardPlatesComponent,
    CommonNavigationComponent,
    SiteLayoutComponent,
    SiteHeaderComponent,
    SiteFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AdminModule,
    GalleryModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
