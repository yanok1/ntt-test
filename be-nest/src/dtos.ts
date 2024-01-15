export class GetMoviesOutput {
  id: string;
  title: string;
  description: string;
  actors: string;
  score: number;
  cover: string;
  favorite: boolean;
  currentPage: number;
  totalItens: number;
  totalPages: number;
}

export class GetMoviesID {
  imdbID: string
}

export class GetMoviesAPIFullOutput {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  imdbRating: number;
  imdbID: string;
  Type: string;
}