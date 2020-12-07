import { Component, OnInit, Input} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {


  public linkerText: string = 'Favorites';
  public link: string = '';
  constructor(
    private router: Router
  ){ }
  checkRouterLink(): void{
      if (this.router.url === '/account'){
        this.linkerText = 'Go Back To Main';

      }
      else{
        this.linkerText = 'Favorites';
        this.link = '/account';
      }
  }
  ngOnInit(): void {
    this.checkRouterLink();
  }

}
