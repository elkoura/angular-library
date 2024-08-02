import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';

interface Book {
  title: string;
  author: string;
  coverImage: string;
}

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
  standalone: true,
})
export class BookListComponent implements OnInit {
  title = 'Liste des livres';
  books: Book[] = [];
  isSorted = false;
  isFormActive = false;
  selectedBookId: string | null = null;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.books = [
      {
        title: 'Book 1',
        author: 'Author 1',
        coverImage: 'https://example.com/book1.jpg',
      },
      {
        title: 'Book 2',
        author: 'Author 2',
        coverImage: 'https://example.com/book2.jpg',
      },
    ];
  }

  sortBooks(): void {
    if (!this.isSorted) {
      this.books.sort((a, b) => a.title.localeCompare(b.title));
      this.isSorted = true;
    } else {
      this.books.sort((a, b) => b.title.localeCompare(a.title));
      this.isSorted = false;
    }
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
