import {Component, Input, OnInit, Output} from '@angular/core';
import {CardInterface} from '../../interfaces/cardInterface';
import {DataGetterService} from '../../services/data-getter.service';
// TODO зачем столько пустых строк? вьюха не соотвествует дизайну - внимательнее!!!


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  // TODO до конструктора объявление переменных
  constructor(
    private dataGetter: DataGetterService
  ){ }
  @Input() row: CardInterface;
  @Input() open: boolean; // true
  public disabler1: boolean;
  public disabler2: boolean;
  public swapMovie(direction: number): void{ // TODO отделяй методы - не лепи в одну кучу - я уже устала делать по этому поводу замечания.
    const page = +localStorage.getItem('page'); // TODO В следующий раз даже смотреть не буду и сразу на переделку отправлю
    this.dataGetter.requestInfo('ru-RU', page).subscribe(response => { // TODO мне не нравиться эта реализация метода
      // TODO получаеться сначала ты делаешь при открытии запрос для одного, а потом запрашиваешь каждый раз все
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
  ngOnInit(): void { // TODO это после конструктора, а не внизу
    this.open = !this.open; // TODO не поняла к чему это тут? почему тогда не указано дефолтное значение при объявлении переменной
  }

}
