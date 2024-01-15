import { Test, TestingModule } from '@nestjs/testing';
import { MovieService } from './movie.service';
import axios from 'axios';

jest.mock('axios');

describe('MovieService', () => {
  let service: MovieService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MovieService],
    }).compile();

    service = module.get<MovieService>(MovieService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getMoviesByString', () => {
    it('should return an array of movies', async () => {
      const mockMovies = [
        { Title: 'Movie1', imdbID: 'id1' },
        { Title: 'Movie2', imdbID: 'id2' },
      ];

      const mockMovieDetails = [
        { Title: 'Movie1', Plot: 'Plot1', Actors: 'Actor1', imdbRating: '8.0' },
        { Title: 'Movie2', Plot: 'Plot2', Actors: 'Actor2', imdbRating: '7.5' },
      ];

      // Mocking axios.get to simulate API responses
      jest.spyOn(axios, 'get')
        .mockImplementationOnce(() => Promise.resolve({ data: { Search: mockMovies } }))
        .mockImplementationOnce(() => Promise.resolve({ data: mockMovieDetails[0] }))
        .mockImplementationOnce(() => Promise.resolve({ data: mockMovieDetails[1] }));

      const result = await service.getMoviesByString('searchTerm', 0);

      expect(result).toHaveLength(2);
      expect(result[0].title).toEqual('Movie1');
      expect(result[1].title).toEqual('Movie2');
    });
  });
});