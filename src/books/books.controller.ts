import { Body, Controller, Get, Post } from '@nestjs/common';
import { Book } from './book.entity';
import { BooksService } from './books.service';
import { BooksCreateDto } from './dtos/books-create.dto';

@Controller('/books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Post()
  createBook(@Body() body: BooksCreateDto) {
    return this.booksService.createBook(body.title);
  }

  @Get()
  listAllBooks(): Promise<Book[]> {
    return this.booksService.listAllBooks();
  }
}
