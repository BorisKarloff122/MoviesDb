import {CardInterface} from './cardInterface';
import {Dates} from './dates';

export interface Results {
  dates: Dates;
  page: number;
  results: CardInterface[];
  total_pages: number;
  total_results: number;
}
