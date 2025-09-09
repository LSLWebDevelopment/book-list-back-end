import { IsString } from 'class-validator';

export class BooksCreateDto {
  @IsString()
  title: string;
}
