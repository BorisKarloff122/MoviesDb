export interface CardInterface {
  title: string;
  adult: boolean;
  genre_ids: Array<number>;
  original_language: string;
  popularity: number;
  video: boolean;
  vote_count: number;
  id: number;
  backdrop_path: string;
  original_title?: string;
  poster_path?: string;
  release_date: string;
  overview?: string;
  vote_average: number;
}
