import {Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import {CardInterface} from '../../interfaces/cardInterface';
import {LocalStorageService} from '../../services/local-storage.service';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit{
  public disabler1 = false;
  public disabler2 = false;
  public isFav = false;
  public favList: CardInterface[] = [];
  @Input() public row: CardInterface;
  @Input() public open: boolean; // true
  @Input() public cardList: CardInterface[];
  @Output() openingKey = new EventEmitter<string>();

  constructor(
      private favorites: LocalStorageService
  ){ }

  public ngOnInit(): void{
    this.checkIndex();
    this.checkFav();
  }

  public checkFav(): void {
    this.favList = this.favorites.getFavorites(); // not ready
  }

  public checkIndex(): void{
    const itemIndex = this.cardList.indexOf(this.cardList.find((entry) => entry.id === this.row.id));
    if (itemIndex === 0){
      this.disabler2 = true;
    }
    else if (itemIndex === 19) {
      this.disabler1 = true;
    }
    else{
      this.disabler1 = false;
      this.disabler2 = false;
    }
  }

  public swapMovie(direction: number): void{
    const itemIndex = this.cardList.indexOf(this.cardList.find((entry) => entry.id === this.row.id));

    if (itemIndex + direction < 0 || itemIndex + direction > 20){
      this.checkIndex();
      return;
    }
    else{
      this.checkIndex();
      this.disabler1 = false;
      this.disabler2 = false;
      this.row = this.cardList[itemIndex + direction];
    }
  }

  public killModal(): void{
    this.checkIndex();
    this.openingKey.emit();
    this.open = !this.open;
  }
}
