import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule }    from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './components/app/app.component';
import { CategoryComponent } from './components/category/category.component';
import { SectionComponent } from './components/section/section.component';
import { ImageCardPlatesComponent } from './components/image-card-plates/image-card-plates.component';
import { CommonNavigationComponent } from './components/common-navigation/common-navigation.component';

/* Feature modules */
import { AdminModule } from './admin/admin.module';
import { GalleryModule } from './gallery/gallery.module';
import { SharedModule } from './shared/shared.module';

/* Layouts */
import { SiteLayoutComponent } from './_layout/site-layout/site-layout.component';
import { SiteHeaderComponent } from './_layout/site-header/site-header.component';
import { SiteFooterComponent } from './_layout/site-footer/site-footer.component';


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
