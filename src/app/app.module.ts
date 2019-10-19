import { AccessDeniedComponent } from './core/access-denied.component';
import { MainService } from './service/main-service.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SlickModule } from 'ngx-slick';
import { DirectivesModule } from './core/directive/directives.module';
import { AgmCoreModule } from '@agm/core';
/* Routing */
import { AppRoutingModule } from './app-routing.module';

/* Service */
import { ChkService } from './service/chk.service';
import { AuthService } from './service/auth.service';


/* components */
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';

import { MenuItems } from './core/menu/menu-items/menu-items';
import { MenuToggleModule } from './core/menu-toggle.module';
import { PageTitleService } from './core/page-title/page-title.service';
import { WidgetsModule } from './widgets/widgets.module';
import { FeaturesComponent } from './features/features.component';
import { ForumComponent } from './forum/forum.component';
import { SearchComponent } from './search/search.component';
import { SupportComponent } from './support/support.component';
import { Footer2Component } from './footer2/footer2.component';
import { sidebarWidgetsComponent } from './sidebarWidgets/sidebarWidgets.component';
import { DashboardLayoutComponent } from './dashboard/dashboard-layout/dashboard-layout.component';
import { ComponentsModule } from './dashboard/dashboard-layout/components/components.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { UserDataService } from './service/user-data.service';

@NgModule({
   declarations: [
      AppComponent,
      MainComponent,
      HomeComponent,
      PricingComponent,
      FooterComponent,
      HeaderComponent,
      MenuComponent,
      FeaturesComponent,
      ForumComponent,
      SearchComponent,
      SupportComponent,
      Footer2Component,
      sidebarWidgetsComponent,
      DashboardLayoutComponent,
      AccessDeniedComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      AppRoutingModule,
      ComponentsModule,
      WidgetsModule,
      MenuToggleModule,
      NgbModule,
      DirectivesModule,
      SlickModule.forRoot(),
      AgmCoreModule.forRoot({
         apiKey: 'AIzaSyD4y2luRxfM8Q8yKHSLdOOdNpkiilVhD9k'
      })
   ],
   providers: [
      MenuItems,
      PageTitleService,
      ChkService,
      AuthService,
      MainService,
      UserDataService
   ],
   bootstrap: [AppComponent]
})
export class AppModule { }
