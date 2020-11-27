import {Component, OnInit} from '@angular/core';
import {DataGetterService} from '../../services/data-getter.service';
import {Dates} from '../../interfaces/dates';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit{
  constructor(private dataGetter: DataGetterService) {}
  public loads = this.dataGetter.requestInfo('ru-RU', 1).subscribe(response => localStorage.setItem('response', JSON.stringify(response)));
  public dates = JSON.parse(localStorage.getItem('response')).dates;

  ngOnInit(): void{
    this.dataGetter.requestInfo('ru-RU', 1).subscribe(response => localStorage.setItem('response', JSON.stringify(response)));
  }
}
