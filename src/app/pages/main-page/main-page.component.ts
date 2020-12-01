import {Component, OnInit, Input} from '@angular/core';
import {DataGetterService} from '../../services/data-getter.service';
import {Dates} from '../../interfaces/dates';
import {CardInterface} from '../../interfaces/cardInterface';
import {MatPaginatorModule} from '@angular/material/paginator';
// TODO пустая строка 1 шт
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(
    private dataGetter: DataGetterService,
    private MatPaginatorIntl: MatPaginatorModule // TODO неиспользуемое удаляем
  ) { }
// TODO над конструктором объявление переменных
  @Input() PageIndex; // TODO тип, доступность
  cardList: Array<CardInterface>; // TODO доступность
  public dates: Dates;

  public item: CardInterface;
  public page = +localStorage.getItem('page');
  public total: number;

  getInfo(): void { // TODO приватный, публичный - какой?
    this.dataGetter.requestInfo('ru-RU', 1).subscribe(response => {
      localStorage.setItem('page', response.page + '');
      this.dates = response.dates;
      this.cardList = response.results;
      this.total = response.total_results;
    });
  } // TODO зачем столько пустых строк?


  changePage(event): void { // TODO зачем столько пустых строк? доступность метода, тип переменной


    this.dataGetter.requestInfo('ru-RU', event.pageIndex + 1).subscribe(response => { // TODO зачем повторять тот же код, что и в гетинфо?
      localStorage.setItem('page', response.page + ''); // TODO не проще ли сделать изменение страницы и вызвать гетинфо передав ему новое значение страницы?
      this.cardList = response.results;
    });
  }

  ngOnInit(): void{ // TODO после конструктора, а не в конце
    this.getInfo();
  }
}
