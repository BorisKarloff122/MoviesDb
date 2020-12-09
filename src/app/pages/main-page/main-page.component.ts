import {Component, OnInit} from '@angular/core';
import {DataGetterService} from '../../services/data-getter.service';
import { Results } from '../../interfaces/results';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  public page: number = +localStorage.getItem('page');
  public startPage: number = 1;
  public moviesResults: Results;
  public collection: Array<any>;

  constructor(
    private dataGetter: DataGetterService,
    private title: Title,
    private meta: Meta
  ) {
    title.setTitle('MovieDB app Main Page'),
    meta.addTags([
      {name: 'keywords', content: 'MovieDB, movies, awsooooome' },
      {name: 'description', content: 'MovieDB page for movie sets' },
      {name: 'author', content: 'IgorAlexeenko'}
    ]);
  }

  public ngOnInit(): void{
    this.getInfo(1);
  }

  public getInfo(pageNumber): void {
    this.startPage = pageNumber;
    this.dataGetter.requestInfo('ru-RU', pageNumber).subscribe((response: Results) => {
      localStorage.setItem('page', response.page.toString());
      this.moviesResults = response;
      this.collection = Array(this.moviesResults.total_pages).fill(0).map((x, i) => ({ id: (i + 1), name: i + 1}));
      console.log(response.results);
    });
  }

}
