import { Component, OnInit } from '@angular/core';
import { CardInterface} from '../../interfaces/cardInterface';
import {ModalComponent} from '../modal/modal.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  public item: CardInterface;
  public modal = new ModalComponent();
  public cardList = JSON.parse(localStorage.getItem('response')).results;

  constructor() { }

  ngOnInit(): void {
  }

}
