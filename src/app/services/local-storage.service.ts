import { Injectable } from '@angular/core';
import { CardInterface } from '../interfaces/cardInterface';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  public favorites: Array<CardInterface> = [];

  constructor() { }

  public getFavorites(): Array<CardInterface>{
    if (localStorage.getItem('favs') === null){
      return this.favorites;
    }
    else {
      this.favorites = JSON.parse(localStorage.getItem('favs'));
      return this.favorites;
    }
  }


}
