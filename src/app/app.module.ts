import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './components/app/app.component';
import { CategoryComponent } from './components/category/category.component';
import { SectionComponent } from './components/section/section.component';
import { ImageCardPlatesComponent } from './components/image-card-plates/image-card-plates.component';
import { CommonNavigationComponent } from './components/common-navigation/common-navigation.component';
import { InnerNavComponent } from './components/_shared/inner-nav/inner-nav.component';
import { LoadingSpinnerComponent } from './components/_shared/loading-spinner/loading-spinner.component';
import { GalerryImagePlateComponent } from './components/galerry-image-plate/galerry-image-plate.component';
import { ImageViewerComponent } from './components/image-viewer/image-viewer.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { ServicesComponent } from './components/services/services.component';
/* Directives */
import { MouseWheelHzScrollDirective } from './directives/mouse-whell-hz-scroll.directive';
import { ContextMenuProtectionDirective } from './directives/context-menu-protection.directive';

import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { AppMaterialModule } from './app-material.module';

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
    InnerNavComponent,
    LoadingSpinnerComponent,
    GalerryImagePlateComponent,
    ImageViewerComponent,
    MouseWheelHzScrollDirective,
    ContactMeComponent,
    ContextMenuProtectionDirective,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    AdminModule,
    AuthModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
