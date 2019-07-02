import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './components/app/app.component';
import { CategoryComponent } from './components/category/category.component';
import { SectionComponent } from './components/section/section.component';
import { ImageCardPlatesComponent } from './components/image-card-plates/image-card-plates.component';
import { CommonNavigationComponent } from './components/common-navigation/common-navigation.component';
import { ServicesComponent } from './components/services/services.component';

/* Feature modules */
import { AdminModule } from './admin/admin.module';
import { GalleryModule } from './gallery/gallery.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { ContactMeModule } from './contact-me/contact-me.module';

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
    SiteFooterComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AdminModule,
    AuthModule,
    GalleryModule,
    SharedModule,
    ContactMeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
