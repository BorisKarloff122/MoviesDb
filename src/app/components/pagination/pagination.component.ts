import { Component } from '@angular/core';
import { DataGetterService } from '../../services/data-getter.service';
import {CardsComponent} from '../cards/cards.component';


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  public cards = new CardsComponent();

  private curentPage: number = JSON.parse(localStorage.getItem('response')).page;
  results = JSON.parse(localStorage.getItem('response'));
  count = this.makePagination();

  constructor(private dataGetter: DataGetterService) {}
  moveToPage($event: any): void{
    const targetBlock = event.target as HTMLElement;
    const goToPage = parseInt(targetBlock.innerHTML, 10);
    this.dataGetter.saves('ru-RU', goToPage);
  }

  makePagination(): Array<string> {
    const currentPage: number = this.results.page;
    const arr = [];
    for (let i = currentPage; i <= currentPage + 5; i ++){
      arr.push(i);
    }
    return arr;
  }

  pagNext(): void{
    const iterator = this.curentPage + 1;
    this.dataGetter.saves('ru-RU', iterator);
  }

  pagPrev(): void{
    let iterator = this.curentPage + 1;
    if (this.curentPage === 0) {
      iterator = 1;
    }
    else{
      iterator = this.curentPage - 1;
    }
    this.dataGetter.saves('ru-RU', iterator);
  }



}
