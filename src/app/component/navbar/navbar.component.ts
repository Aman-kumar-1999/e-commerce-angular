import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isLogin: boolean = true;
  // isLogin: boolean = false;
  isExpanded: boolean = true;
  folders = [
    {
      icon: 'home_app_logo',
      name: 'Home',
      url: '',
    },
    {
      icon: 'badge',
      name: 'Profile',
      url: 'profile',
    },
    {
      icon: 'dashboard',
      name: 'Dashboard',
      url: 'dashboard',
    },
    {
      icon: 'inactive_order',
      name: 'Order',
      url: 'order',
    },
    {
      icon: 'science',
      name: 'Product',
      url: 'product',
    },
    {
      icon: 'diversity_3',
      name: 'Vendor',
      url: 'vendor',
    },
    {
      icon: 'person',
      name: 'User',
      url: 'user',
    },
    {
      icon: 'settings',
      name: 'Settings',
      url: 'settings',
    },
    {
      icon: 'local_shipping',
      name: 'Shipments',
      url: 'shipments',
    },
    {
      icon: 'list_alt',
      name: 'My Orders',
      url: 'myorder',
    },
    {
      icon: 'settings_accessibility',
      name: 'Others',
      url: 'others',
    },
  ];
}
