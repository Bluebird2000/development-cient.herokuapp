import { Component, OnInit } from '@angular/core';

export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: '/name-check', title: 'Name Check', icon: 'nc-single-02', class: '' },
  { path: '/company-reg', title: 'Company Registrstions', icon: 'nc-single-02', class: ''},
  { path: '/business-reg', title: 'Business Registrations', icon: 'nc-single-02', class: ''}
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];
  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

}
