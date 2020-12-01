import {Component, Input, OnInit, Output} from '@angular/core';
import {CardInterface} from '../../interfaces/cardInterface';
import {DataGetterService} from '../../services/data-getter.service';



@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  constructor(
    private dataGetter: DataGetterService
  ){}
  @Input() row: CardInterface;
  @Input() open: boolean; // true
  public disabler1: boolean;
  public disabler2: boolean;
  public swapMovie(direction: number): void{
    const page = +localStorage.getItem('page');
    this.dataGetter.requestInfo('ru-RU', page).subscribe(response => {
          const itemIndex = response.results.indexOf(response.results.find((entry) => entry.id === this.row.id));
          if (itemIndex + direction < 0 || itemIndex + direction > 20){
            return;
          }
          else{
            this.disabler1 = false;
            this.disabler2 = false;
            this.row = response.results[itemIndex + direction];
          }
      });

  }


  public killModal(): void{
    this.open = !this.open;
    document.getElementsByClassName('modal')[0].classList.remove('open');
  }
  ngOnInit(): void {
    this.open = !this.open;
  }

}
