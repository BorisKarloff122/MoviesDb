import { Component, OnInit } from '@angular/core';
import { CardInterface} from '../../interfaces/cardInterface';
import {ModalComponent} from '../modal/modal.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent{
  public item: CardInterface;
  public cardList = JSON.parse(localStorage.getItem('response')).results;

  constructor(private modal: ModalComponent) { }


}
