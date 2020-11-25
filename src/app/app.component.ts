import { AfterViewInit, Component, OnInit } from '@angular/core';
import {DataGetterService} from './services/data-getter.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'moviedb-app';
  public dataGetter = new DataGetterService(); // TODO то о чем говорили, убери это, больше я видеть это не хочу

  public ngOnInit(): void {
    // TODO почему это тут, это должно быть в компоненте в котором у тебя будут отображаться данные, мы
    // не запрашиваем сразу все данные в этом компоненте -> перенести в main-pages и используя *ngFor отобразить
    this.dataGetter.RequestInfo('ru-RU', '/movie/now_playing', 1);
  }
}
