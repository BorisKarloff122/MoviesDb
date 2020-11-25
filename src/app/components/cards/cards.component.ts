import { Component, OnInit } from '@angular/core';
import { CardInterface} from '../../interfaces/cardInterface';
import {ModalComponent} from '../modal/modal.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  public cardList: CardInterface[] = []; // TODO wtf здесь было? Мне аж плохо стало, не надо так
  public modal = new ModalComponent(); // TODO убрать и сделать вызов методов как нужно
  // TODO методы пишем после конструктора и ngOnInit
  constructor() { }

  ngOnInit(): void {
    this.getResults();
  }

  // TODO доступность метода и чего 3 фильма в ряду всего, пихай сколько влезет на экране
  getResults(): void {
    this.cardList = JSON.parse(JSON.parse(localStorage.getItem('response'))).results as CardInterface[];
  }

}
