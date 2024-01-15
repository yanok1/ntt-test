import { Module } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieController } from './movie.controller';

@Module({
  controllers: [MovieController],
  imports: [],
  providers: [MovieService],
  exports: [MovieService]
})
export class MovieModule { }