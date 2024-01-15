import { Controller, Get, Query, HttpException, HttpStatus } from '@nestjs/common';
import { MovieService } from './movie.service';
import { query } from 'express';
import { find } from 'rxjs';

@Controller('movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) { }

  @Get()
  async getMovies(@Query('s') s: string, @Query('page') page: number) {
    if (!s || s.length < 3) throw new HttpException('A pesquisa precisa de no minimo 3 caractéres', HttpStatus.BAD_REQUEST);
    return this.movieService.getMoviesByString(s, page);
  }
}