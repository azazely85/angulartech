import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { Book } from '../../models/Book';

@Component({
  selector: 'app-client-home',
  templateUrl: './client-home.component.html',
  styleUrls: ['./client-home.component.css']
})
export class ClientHomeComponent implements OnInit {
  books: Book[];

  constructor(
      public bookService: BooksService
  ) { }

  ngOnInit() {
      this.bookService.getBooks().subscribe((books: Book[]) => this.books = books);
  }

}
