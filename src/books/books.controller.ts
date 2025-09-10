import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Book } from './book.entity';
import { BooksService } from './books.service';
import { BookEditDto } from './dtos/book-edit.dto';
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

  @Delete('/:id')
  deleteBookById(@Param('id') id: number) {
    return this.booksService.deleteBookById(id);
  }

  @Patch('/:id')
  editBookById(@Param('id') id: number, @Body() body: BookEditDto) {
    return this.booksService.editBookById(id, body);
  }
}
