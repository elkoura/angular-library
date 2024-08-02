import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl='http://localhost:3000/books';
  private booksSubject = new BehaviorSubject<Book[]>([]);


  constructor(private http: HttpClient) {this.loadBooks() }

  loadBooks(): void {
    this.http.get<Book[]>(this.apiUrl).subscribe(
      books=>this.booksSubject.next(books)
    );
  }

  getBooks(): Observable<Book[]> {
    return this.booksSubject.asObservable();
  }

  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.apiUrl}/${id}`);
  }

  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.apiUrl, book).pipe(
      tap(()=>this.loadBooks())
    );
  }

  updateBook(book: Book): Observable<Book> {
    return this.http.put<Book>(`${this.apiUrl}/${book.id}`, book).pipe(
      tap(()=> this.loadBooks())
    );
  }

  deleteBook(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      tap(()=> this.loadBooks())
    );
  }
}
