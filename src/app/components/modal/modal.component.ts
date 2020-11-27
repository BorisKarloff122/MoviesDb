import { Component, OnInit } from '@angular/core';
import {CardInterface} from '../../interfaces/cardInterface';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  constructor() { }
  public row: CardInterface;
  public openModal = false;
  onSelect(name): void{
    this.row = JSON.parse(localStorage.getItem('response')).results.find((entry) => entry.title === name);
  }

  ngOnInit(): void {
    console.log(this.row);
  }

}
