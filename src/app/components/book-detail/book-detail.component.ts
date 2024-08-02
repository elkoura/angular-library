import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '@models/book.model';
import { BookService } from '@services/book.service';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  book: Book | null = null;
  bookId: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.bookId = params.get('id');
      if (this.bookId) {
        this.bookService.getBookById(this.bookId).subscribe(book => {
          this.book = book;
        });
      }
    });
  }

  editBook(): void {
    if (this.bookId) {
      this.router.navigate(['/books', this.bookId, 'edit']);
    }
  }

  deleteBook(): void {
    if (this.bookId) {
      this.bookService.deleteBook(this.bookId).subscribe(() => {
        this.router.navigate(['/books']);
      });
    }
  }
}
