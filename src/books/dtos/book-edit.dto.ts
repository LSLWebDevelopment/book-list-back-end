import { IsString } from 'class-validator';

export class BookEditDto {
  @IsString()
  title: string;
}
