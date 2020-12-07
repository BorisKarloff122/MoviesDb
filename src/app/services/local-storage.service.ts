import { Injectable } from '@angular/core';
import { CardInterface } from '../interfaces/cardInterface';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  public favorites: CardInterface[] = JSON.parse(localStorage.getItem('favs'));

  public constructor(
  ){}

  public getFavorites(): Array<CardInterface>{
    if (localStorage.getItem('favs') === null){
      return this.favorites;
    }
    else {
      this.favorites = JSON.parse(localStorage.getItem('favs'));
      return this.favorites;
    }
  }

  public setFavorites(item: CardInterface): void {
    if (this.favorites !== null){
      this.favorites.push(item);
      this.setFavoriteItems(this.favorites);
    }
    else{
      this.favorites = [];
      this.favorites.push(item);
      this.setFavoriteItems(this.favorites);
    }
  }

  public removeFavorite(item): void {
    this.favorites.splice(this.favorites.indexOf(item), 1);
    this.setFavoriteItems(this.favorites);
  }

  public setFavoriteItems(favorites): void{
    localStorage.setItem('favs', JSON.stringify(favorites));
  }

}
