import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {Results} from '../interfaces/results';
@Injectable({
  providedIn: 'root'
})
export class DataGetterService{
  constructor(private httpClient: HttpClient) {}
  public requestInfo(lang: string, pages: number): Observable<Results[]>{
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&language=${lang}&page=${pages}`;
    return this.httpClient.get<Results[]>(url, {responseType: 'json'});
  }
  public saves(lang: string, pages: number): void{
    this.requestInfo(lang, pages).subscribe(response => localStorage.setItem('response', JSON.stringify(response)));
  }

}
