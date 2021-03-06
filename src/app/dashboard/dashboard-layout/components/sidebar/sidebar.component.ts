import { AuthService } from './../../../../service/auth.service';
import { Component, OnInit } from '@angular/core';

export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard', icon: 'ion-ios-home', class: '' },
  { path: '/users', title: 'Users', icon: 'ion-ios-person', class: ''},
  { path: '/forums', title: 'Forums', icon: 'ion-ios-mail', class: ''},
  { path: '/category', title: 'Category', icon: 'ion-ios-mail', class: ''},
  { path: '/messages', title: 'Messages', icon: 'ion-ios-mail', class: ''},
  { path: '/market-place', title: 'Market Place', icon: 'ion-ios-mail', class: ''},
  { path: '/settings', title: 'Settings', icon: 'ion-ios-settings', class: ''},
  { path: '/notifications', title: 'Notifications', icon: 'ion-ios-mail', class: ''},
  { path: '/log-out', title: 'Log Out', icon: 'ion-ios-mail', class: ''}
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];
  isAdmin: boolean;
  allMenus = [
    { path: '/dashboard', title: 'Dashboard', icon: 'ion-ios-home', class: '' },
    this.userMenu(),
    { title: 'Forums', path: '/forums', icon: 'ion-ios-mail', class: ''},
    { title: 'Category', path: '/category', icon: 'ion-ios-mail', class: ''},
    { title: 'Messages', path: '/messages', icon: 'ion-ios-mail', class: ''},
    { title: 'Market Place', path: '/market-place', icon: 'ion-ios-mail', class: ''},
    { title: 'Settings', path: '/settings', icon: 'ion-ios-settings', class: ''},
    { title: 'Notifications', path: '/notifications', icon: 'ion-ios-mail', class: ''},
    { title: 'Log Out', path: '/log-out', icon: 'ion-ios-mail', class: ''},
  ];
  constructor(private authService: AuthService) { }

  userMenu() {
    if (this.authService.isAdmin) {
      return {
        title: 'Users', path: '/users', icon: 'ion-ios-person', class: '',
      };
    }
  }

  ngOnInit() {
    if (this.authService.isAdmin) {
      this.isAdmin = true;
    }
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

}
