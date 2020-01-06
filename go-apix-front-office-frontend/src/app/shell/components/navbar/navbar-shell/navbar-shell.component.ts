import { Component, OnInit, Input, HostListener } from '@angular/core';
const STICKY_POINT = 90;

@Component({
  selector: 'dc-navbar-shell',
  templateUrl: './navbar-shell.component.html',
  styleUrls: ['./navbar-shell.component.scss']
})
export class NavbarShellComponent implements OnInit {
  @Input()
  useOnlyDarkLogo: boolean;

  @Input()
  darkLinks: boolean;

  navbarExpanded: boolean;
  navbarSticky: boolean;

  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const windowScroll = window.pageYOffset;

    if (windowScroll >= STICKY_POINT) {
      this.navbarSticky = true;
    } else {
      this.navbarSticky = false;
    }
  }

  constructor() {}

  ngOnInit() {}

  toggleNavbar() {
    this.navbarExpanded = !this.navbarExpanded;
  }
}
