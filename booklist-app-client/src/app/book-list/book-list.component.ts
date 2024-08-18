import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

interface Book {
  _id?: string;
  ISBN: string;
  title: string;
  author: string;
  description?: string;
  publishedYear?: number;
  publisher?: string;
}

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.bookService.getBooks().subscribe((books) => (this.books = books));
  }

  deleteBook(id: string): void {
    this.bookService.deleteBook(id).subscribe(() => {
      this.books = this.books.filter((book) => book._id !== id);
    });
  }

  editBook(book: Book): void {
    // Implement navigation to the form with the selected book's data
  }
}
