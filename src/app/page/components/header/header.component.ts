import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'book-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss']
})

export class HeaderComponent {
  isOpen: boolean = false;

  constructor(private route: Router) { }

  toogleMenu() {
    this.isOpen = !this.isOpen;
  }

  backtoHome() {
    this.toogleMenu();
    this.route.navigate(['/']);
  }
}
