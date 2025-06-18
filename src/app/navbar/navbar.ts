import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

 isMenuOpen = false;
  activeMenu: string = 'home';

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  setActiveMenu(menu: string) {
    this.activeMenu = menu;
    this.isMenuOpen = false;
  }
}
