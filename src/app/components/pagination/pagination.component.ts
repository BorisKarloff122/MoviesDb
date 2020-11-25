import { Component } from '@angular/core';
import { DataGetterService } from '../../services/data-getter.service';
import {CardsComponent} from '../cards/cards.component';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  public dataGetter = new DataGetterService(); // TODO здесь гневный смайлик
  public cards = new CardsComponent(); // TODO здесь он тоже злой
  private curentPage: number = JSON.parse(JSON.parse(localStorage.getItem('response'))).page;
  results = JSON.parse(JSON.parse(localStorage.getItem('response'))); // TODO доступность???
  count = this.makePagination(); // TODO все еще злой

  constructor() {}

  // TODO доступность???
  moveToPage(page: string): void{
    // TODO тут бы я воспользовалась Output(), пока оставь пагинацию, перепеши остальные части, я просмотрю и посмотрим
    // TODO на работу Output/Input, в чем разница, как применять и зачем оно нужно
    this.dataGetter.RequestInfo('&language=ru-RU', '/movie/now_playing', +page);
    this.cards.ngOnInit(); // TODO wtf is this? нет, нет и нет, не из этой песни, не тут оно должно быть и не так
  }
// TODO доступность???
  makePagination(): string[] {
    const currentPage: number = this.results.page; // TODO зачем эта строчка если у тебя есть current page?
    const arr = [];
    for (let i = currentPage; i <= currentPage + 5; i ++){
      arr.push(i);
    }
    return arr;
  }
// TODO доступность???
  pagNext(): void{
    const iterator = this.curentPage++; // TODO равносильно this.currentPage + 1;
    this.dataGetter.RequestInfo('&language=ru-RU', '/movie/now_playing', iterator);
  }
// TODO доступность???
  pagPrev(): void{
    let iterator = this.curentPage + 1;
    if (this.curentPage === 0) {
      iterator = 1;
    }
    else{
      iterator = this.curentPage - 1;
    }
    this.dataGetter.RequestInfo('&language=ru-RU', '/movie/now_playing', iterator);

  }



}
