import { Component} from '@angular/core';
import {LocalStorageService} from '../../services/local-storage.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  public favItems = this.favorites.getFavorites();
  constructor(
    private favorites: LocalStorageService
  ) {}
  public removeFav(item): void{
    this.favorites.removeFavorite(item);
  }


}
