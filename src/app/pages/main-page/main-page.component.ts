import {Component, OnInit, Input} from '@angular/core';
import {DataGetterService} from '../../services/data-getter.service';
import {Dates} from '../../interfaces/dates';
import {CardInterface} from '../../interfaces/cardInterface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  @Input() private PageIndex: number;
  public cardList: Array<CardInterface>;
  public dates: Dates;
  public page = +localStorage.getItem('page');
  public total: number;
  public p = 1;
  public collection: Array<any>;

  constructor(
    private dataGetter: DataGetterService
  ) { }

  public ngOnInit(): void{
    this.getInfo(1);
    this.collection = Array(63).fill(0).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}`}));
  }

  public getInfo(pageNumber): void {
    this.p = pageNumber;
    this.dataGetter.requestInfo('ru-RU', pageNumber).subscribe(response => {
      localStorage.setItem('page', response.page + '');
      this.dates = response.dates;
      this.cardList = response.results;
      this.total = response.total_results;
    });
  }

}
