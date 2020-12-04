import {Component, OnInit, Input} from '@angular/core';
import {DataGetterService} from '../../services/data-getter.service';
import {Dates} from '../../interfaces/dates';
import {CardInterface} from '../../interfaces/cardInterface';
import { Results } from '../../interfaces/results';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  @Input() private PageIndex: number; // TODO откуда значение приходит? Кто родительский компонент текущего компонента?
  public cardList: Array<CardInterface>;
  public dates: Dates;
  public page = +localStorage.getItem('page');
  public total: number; // TODO зачем эта переменная?
  public p = 1; // TODO такое имя допустимо, для переменных с маленькой областью видимостью, тут же оно должно отображать суть переменной
  public collection: Array<any>;
  public moviesResults: Results;

  constructor(
    private dataGetter: DataGetterService
  ) { }

  public ngOnInit(): void{
    this.getInfo(1);
    // TODO почему 63? а если больше придет страниц? и не совсем понимаю зачем такая реализация
    this.collection = Array(63).fill(0).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}`}));
  }

  public getInfo(pageNumber): void {
    this.p = pageNumber;
    this.dataGetter.requestInfo('ru-RU', pageNumber).subscribe((response: any) => { // TODO type
      localStorage.setItem('page', response.page + ''); // TODO зачем пустая строка?
      // this.dates = response.dates; // TODO зачем создавать столько переменных под каждое значение, которое тебе нужно вывести/передать?
      // this.cardList = response.results;
      // this.total = response.total_results;
      this.moviesResults = response;
    });
  }

}
