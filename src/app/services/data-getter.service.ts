import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import {Results} from '../interfaces/results';
import {CardInterface} from '../interfaces/cardInterface';
@Injectable({
  providedIn: 'root'
})
export class DataGetterService{
  private baseURLAddress = 'https://api.themoviedb.org/3/movie/now_playing';
  private idPath = 'https://api.themoviedb.org/3/movie/';
  private key = 'ebea8cfca72fdff8d2624ad7bbf78e4c';
  constructor(private httpClient: HttpClient) {}
  public requestInfo(lang: string, pages: number): Observable<Results>{
    const url = this.baseURLAddress + `?api_key=${this.key}&language=${lang}&page=${pages}`;
    return this.httpClient.get<Results>(url);
  }
  public getAMovie(id: number, lang: string): Observable<CardInterface>{
    const url = `${this.idPath}${id}?api_key=${this.key}&language=${lang}`;
    return this.httpClient.get<CardInterface>(url);
  }
}
