import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {
  public linkerText: string = 'My account';
  public link: string = '';

  public constructor(
    private router: Router
  ){}

  ngOnInit(): void {
    this.checkRouterLink();
  }

  checkRouterLink(): void {
    if (this.router.url === '/account') {
      this.linkerText = 'Go Back';
    } else {
      this.linkerText = 'My account';
      this.link = '/account';
    }
  }
}
