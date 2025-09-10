import { Column, Entity } from 'typeorm';

@Entity()
export class BooksListDto {
  @Column()
  title: string;
}
