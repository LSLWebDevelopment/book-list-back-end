import { Column, Entity } from 'typeorm';

@Entity()
export class BookEdit {
  @Column()
  title: string;
}
