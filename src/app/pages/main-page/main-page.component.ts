import {AfterViewInit, Component} from '@angular/core';
import { DataGetterService} from '../../services/data-getter.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements AfterViewInit{

  constructor() {}
  public result = this.ngAfterViewInit();
  public dates = JSON.parse(JSON.parse(localStorage.getItem('response'))).dates;

  start(dataGetter: DataGetterService): void{
    dataGetter.RequestInfo('ru-RU', '/movie/now_playing', 1);
  }

  ngAfterViewInit(): void {
    this.start(new DataGetterService());
  }



}
