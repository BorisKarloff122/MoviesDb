import {Component, Input, Output, EventEmitter, OnInit, OnChanges} from '@angular/core';
import {CardInterface} from '../../interfaces/cardInterface';
import {LocalStorageService} from '../../services/local-storage.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnChanges{
  public disabler1 = false;
  public disabler2 = false;
  public isFav = false;
  public favList: CardInterface[] = [];
  @Input() public row: CardInterface;
  @Input() public open: boolean;
  @Input() public cardList: CardInterface[];
  @Output() openingKey = new EventEmitter<string>();

  constructor(
      private favorites: LocalStorageService
  ){ }

  public ngOnInit(): void{
    this.checkIndex();
    this.checkFav(this.row);
  }

  public ngOnChanges(): void{
    this.checkIndex();
    this.checkFav(this.row);
  }

  public addToFav(): void{
    this.isFav = !this.isFav;
    if (this.isFav !== false){
      this.favorites.setFavorites(this.row);
    }
    else{
      this.favorites.removeFavorite(this.row);
    }

  }

  public checkFav(row: CardInterface): void {
    this.favList = this.favorites.getFavorites();
    if (this.favList !== null && this.favList.indexOf(this.favList.find((entry) => entry.id === row.id)) !== -1){
      this.isFav = true;
    }
    else{
      this.isFav = false;
      return;
    }

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
    else {
      this.checkIndex();
      this.disabler1 = false;
      this.disabler2 = false;
      this.row = this.cardList[itemIndex + direction];
      this.checkFav(this.row);
    }
  }

    public killModal(): void{
      this.openingKey.emit();
      this.isFav = false;
      this.open = !this.open;
      this.checkIndex();
    }
}
