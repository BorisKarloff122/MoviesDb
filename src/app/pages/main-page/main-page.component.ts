import {Component, OnInit} from '@angular/core';
import {DataGetterService} from '../../services/data-getter.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit{
  constructor(private dataGetter: DataGetterService) {}
  public loads = localStorage.getItem('response');
  public dates = JSON.parse(this.loads).dates;
  getInfo(): void {
    this.dataGetter.saves('ru-RU', 1);
  }
  ngOnInit(): void{
    if (this.loads === null){
      this.getInfo();
    }
    else{
      return;
    }

  }
}
