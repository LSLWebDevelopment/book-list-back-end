import { Body, Controller, Post } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksCreateDto } from './dtos/books-create.dto';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Post()
  createBook(@Body() body: BooksCreateDto) {
    return this.booksService.createBook(body.title);
  }
}
