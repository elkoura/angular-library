import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookService } from '@services/book.service';
import { Title } from '@angular/platform-browser';
import { Observable, map, tap } from 'rxjs';
import {Book} from '@models/book.model';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class BookListComponent implements OnInit {
  title: string | null = null;
  books: Observable<Book[]>;
  isAscending = true;
  isFormActive = false;
  selectedBookId: string | null = null;

  constructor(private bookService: BookService, private titleService: Title) {
    this.books = this.bookService.getBooks();

  }

  ngOnInit(): void {
    this.title = this.titleService.getTitle();
    }
  }

  sortBooksByTitle(): void {
    this.isAscending = !this.isAscending;
    this.books.subscribe((books) => {
      this.books = new Observable((observer) => {
        observer.next(
          books.sort((a, b) => {
            const comparison = a.title.localeCompare(b.title);
            return this.isAscending ? comparison : -comparison;
          })
        );
      });
    });
  }
  viewBookDetails(bookTitle: string): void {
    console.log('Viewing details for', bookTitle);
  }

  editBook(index: number): void {
    console.log('Editing book at index', index);
  }

  removeBook(index: number): void {
    this.books.splice(index, 1);
  }

  activateForm(): void {
    this.isFormActive = true;
  }

  deactivateForm(): void {
    this.isFormActive = false;
  }

  onFormSubmitted(): void {
    this.deactivateForm();
    console.log('Form submitted');
  }
}
