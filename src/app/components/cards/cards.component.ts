import { Component, OnInit } from '@angular/core';
import { CardInterface} from '../../interfaces/cardInterface';
import {ModalComponent} from '../modal/modal.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  public cardList = this.getResults();
  public modal = new ModalComponent();
  getResults(): Array<CardInterface>{
    return JSON.parse(JSON.parse(localStorage.getItem('response'))).results as Array<CardInterface>;
  }
  constructor() { }

  ngOnInit(): void {
    this.getResults();
  }

}
