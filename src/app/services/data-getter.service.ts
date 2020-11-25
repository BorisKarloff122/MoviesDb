import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataGetterService {

  constructor(
    // private http: HttpClient
  ) { }

  RequestInfo(lang: string, query: string, pages: number): void {
    // TODO использовать HttpClient в урле сформированной хочу видеть шаблонную строку

      const request = new XMLHttpRequest();
      const mainThread = 'https://api.themoviedb.org/3';
      const apiKey = '?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c';
      if (pages === undefined) {
        pages = 1;
      } else if (lang === undefined) {
        lang = '';
      } else if (pages <= 0) {
        pages = 1;
      }
      const url = mainThread + query + apiKey + '&language=' + lang + '&page=' + pages;
      request.open('GET', url, true);
      request.send();
      request.onreadystatechange = () => {

        if (request.readyState === XMLHttpRequest.DONE) {
          localStorage.setItem('response', JSON.stringify(request.response));
        }
      };

  }
}
