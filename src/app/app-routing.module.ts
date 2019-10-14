import { DashboardLayoutComponent } from './dashboard/dashboard-layout/dashboard-layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';
import { FeaturesComponent } from './features/features.component';
import { ForumComponent } from './forum/forum.component';
import { SearchComponent } from './search/search.component';
import { SupportComponent } from './support/support.component';
import { sidebarWidgetsComponent } from './sidebarWidgets/sidebarWidgets.component';

export const AppRoutes: Routes = [{
   path: '',
   redirectTo: 'home',
   pathMatch: 'full',
   },
   {
      path: '',
      loadChildren: () => import('./session/session.module').then(m => m.SessionModule)
   },
   
   {
      path: '',
      component: MainComponent,
      children: [
         {
            path: 'home',
            component: HomeComponent
         },
         // {
         //    path: '',
         //    loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)
         // },
         {
            path: 'pricing',
            component: PricingComponent
         },
          {
            path: 'features',
            component: FeaturesComponent
         }, {
            path: 'forum',
            component: ForumComponent
         }, {
            path: 'search',
            component: SearchComponent
         }, {
            path: 'support',
            component: SupportComponent
         }, {
            path: '',
            loadChildren: () => import('./portfolio/portfolio.module').then(m => m.PortfolioModule)
         }, {
            path: '',
            loadChildren: () => import('./testimonial/testimonial.module').then(m => m.TestimonialModule)
         }, {
            path: 'sidebar-widgets',
            component: sidebarWidgetsComponent
         },
         //  {
         //    path: '',
         //    loadChildren: () => import('./session/session.module').then(m => m.SessionModule)
         // },
          {
            path: '',
            loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule)
         }, {
            path: 'about/:keyword',
            component: ForumComponent
      	},
      ]
   },
   {
      path: '',
      component: DashboardLayoutComponent,
      children: [
         {
            path: '',
            loadChildren: './dashboard/dashboard-layout/dashboard-layout.module#DashboardLayoutModule'
         }
      ]
   },
   {
      path: '**',
      redirectTo: 'home'
    }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(AppRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
