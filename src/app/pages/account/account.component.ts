import { Component} from '@angular/core';
import {LocalStorageService} from '../../services/local-storage.service';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  public favItems = this.favorites.getFavorites();

  public constructor(
    private favorites: LocalStorageService,
    private title: Title,
    private meta: Meta
  ) {
    title.setTitle('MovieDB app Favorites Page'),
      meta.addTags([
        {name: 'keywords', content: 'MovieDB, movies, awsooooome' },
        {name: 'description', content: 'MovieDB page for Favorites' },
        {name: 'author', content: 'IgorAlexeenko'}
      ]);
  }

  public removeFav(item): void{
    this.favorites.removeFavorite(item);
  }


}
