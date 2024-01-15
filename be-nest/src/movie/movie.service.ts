import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { GetMoviesOutput, GetMoviesID, GetMoviesAPIFullOutput } from '../dtos';

@Injectable()
export class MovieService {
  async getMoviesByString(s: string, page: number): Promise<GetMoviesOutput[]> {
    const baseurl = 'http://www.omdbapi.com/?apikey=4903c439'
    let url = baseurl
    if (s) url += '&s=' + s
    if (page) {
      if (page > 0) url += '&page=' + page
      else return [new GetMoviesOutput()];
    }
    const response = await axios.get(url);
    if (response.data.Response == 'False') return [new GetMoviesOutput()];
    let total = response.data.totalResults
    let itens = response.data.Search
    let totalItens = 10
    let totalPages = Math.ceil(total / totalItens)
    let currentPage = page ? page : 1
    const movies: GetMoviesID[] = itens;

    const moviePromises = movies.map(async (movie) => {
      const responseDetail = await axios.get('http://www.omdbapi.com/?apikey=4903c439&i=' + movie.imdbID);
      const moviefull: GetMoviesAPIFullOutput = responseDetail.data;

      return {
        id: moviefull.imdbID,
        title: moviefull.Title,
        description: moviefull.Plot,
        actors: moviefull.Actors,
        score: moviefull.imdbRating,
        cover: moviefull.Poster,
        favorite: false,
        currentPage: currentPage,
        totalItens: totalItens,
        totalPages: totalPages
      };
    });

    return Promise.all(moviePromises);
  }
}