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

  public row: CardInterface;
  public open = false; // TODO type
  @Input() public cardList: CardInterface[];

  public constructor(
    private dataGetter: DataGetterService,
  ){ }

  public openingKey(): void{
    this.open = false;
  }

  public openModal(id): void {
    console.log(this.cardList);
    this.dataGetter.getAMovie(id, 'ru-RU').subscribe(response => { // TODO type
        this.row = response;
        this.open = !this.open;
    });
  }
}
