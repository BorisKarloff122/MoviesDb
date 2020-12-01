import {Component, OnInit, Input} from '@angular/core';
import {DataGetterService} from '../../services/data-getter.service';
import {Dates} from '../../interfaces/dates';
import {CardInterface} from '../../interfaces/cardInterface';
import {MatPaginatorModule} from '@angular/material/paginator';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit{
  constructor(
    private dataGetter: DataGetterService,
    private MatPaginatorIntl: MatPaginatorModule) {}
  @Input() PageIndex;
  cardList: Array<CardInterface>;
  public dates: Dates;

  public item: CardInterface;
  public page = +localStorage.getItem('page');
  public total: number;
  getInfo(): void{
    this.dataGetter.requestInfo('ru-RU', 1).subscribe(response => {
      localStorage.setItem('page', response.page + '');
      this.dates = response.dates;
      this.cardList = response.results;
      this.total = response.total_results;
    });
  }


  changePage(event): void{


    this.dataGetter.requestInfo('ru-RU', event.pageIndex + 1).subscribe(response => {
      localStorage.setItem('page', response.page + '');
      this.cardList = response.results;
    });
  }

  ngOnInit(): void{
    this.getInfo();
  }
}
