import {AfterViewInit, Component} from '@angular/core';
import {DataGetterService} from './services/data-getter.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  public title = 'moviedb-app';
  public dataGetter = new DataGetterService();

  ngAfterViewInit(): void {
    this.dataGetter.RequestInfo('ru-RU', '/movie/now_playing', 1);
  }
}
