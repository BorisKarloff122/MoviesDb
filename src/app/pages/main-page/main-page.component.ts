import {AfterViewInit, Component} from '@angular/core';
import { DataGetterService} from '../../services/data-getter.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements AfterViewInit {

  constructor() {}
  public result = this.ngAfterViewInit(); // TODO шо це таке? не позорься и убери
  public dates = JSON.parse(JSON.parse(localStorage.getItem('response'))).dates;

  // TODO все методы для получения начальных данные, которые нам нужны для отображения страницы мы пишем в ngOnInit
  // TODO ngAfterViewInit используеться, когда вьюха уже построена и нам что то нужно изменить

  start(dataGetter: DataGetterService): void { // TODO что тут забыл сервес, его объявление должно было
    // TODO произойти в конструкторе и тут он должен был вызваться и где подписка, привер ->
    // TODO this.service.getData(someParams?: Params).subscribe(data => this.result = data)
    // TODO все данные не нужно пихать в сторедж только текущую страницу
    dataGetter.RequestInfo('ru-RU', '/movie/now_playing', 1);
  }

  ngAfterViewInit(): void {
    this.start(new DataGetterService());
  }



}
