import { Component, OnInit, Input } from '@angular/core';
import { BookService } from '../book.service';
import { ActivatedRoute, Router } from '@angular/router';

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
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {
  book: Book = {
    ISBN: '',
    title: '',
    author: '',
    description: '',
    publishedYear: null,
    publisher: ''
  };

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.bookService.getBooks().subscribe((books) => {
        const existingBook = books.find((book) => book._id === id);
        if (existingBook) {
          this.book = existingBook;
        }
      });
    }
  }

  saveBook(): void {
    if (this.book._id) {
      this.bookService.updateBook(this.book._id, this.book).subscribe(() => {
        this.router.navigate(['/book-list']);
      });
    } else {
      this.bookService.addBook(this.book).subscribe(() => {
        this.router.navigate(['/book-list']);
      });
    }
  }
}
