import {Component} from '@angular/core';
import { CardInterface} from '../../interfaces/cardInterface';
import { Input} from '@angular/core';
import {DataGetterService} from '../../services/data-getter.service';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent{
  constructor( // TODO замечания по оформлению можно найти в других компонентах
    private dataGetter: DataGetterService,
  ){}
  public item: CardInterface;
  @Input() cardList: CardInterface[];
  public row: CardInterface;
  public open;
  public openModal(id): void {
    this.dataGetter.getAMovie(id, 'ru-RU').subscribe(response => { // TODO я просила использовать material dialog, а тут снова нативщина
        this.row = response;
        document.getElementsByClassName('modal')[0].classList.add('open'); // TODO забываем писать такое
      });
  }
// TODO зачем тут столько пустых строк?


}
