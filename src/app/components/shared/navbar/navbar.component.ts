import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public url: string;
  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(() => {
      this.url = this.router.url.toString();
    });
  }

}
