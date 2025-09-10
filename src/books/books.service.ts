import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Book } from './book.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { BookEdit } from './book-edit.entity';

@Injectable()
export class BooksService {
  constructor(@InjectRepository(Book) private repository: Repository<Book>) {}

  createBook(title: string) {
    const bookEntity = this.repository.create({ title });
    return this.repository.save(bookEntity);
  }

  async listAllBooks() {
    return await this.repository.find();
  }

  async deleteBookById(id: number) {
    return await this.repository.delete({ id });
  }

  async editBookById(id: number, attrs: Partial<BookEdit>) {
    const book = await this.repository.findOneBy({ id });
    if (!book) {
      throw new NotFoundException('Book not found');
    }
    Object.assign(book, attrs);
    return this.repository.save(book);
  }
}
