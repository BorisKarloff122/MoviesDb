import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  public row: any; // TODO написать тип или интерфейс

  constructor() { }
  onSelect(event: any): void {
    const target = event.target as HTMLElement;
    const parentsName: string = target.parentElement.parentElement.querySelectorAll('.name')[0].innerHTML;
    this.row = JSON.parse(JSON.parse(localStorage.getItem('response'))).results.find((entry) => entry.title === name);
    document.getElementsByTagName('body')[0].classList.add('fix');
  }
  ngOnInit(): void {
  }

}
