import { Routes } from '@angular/router';
import {BookFormComponent} from "@components/book-form/book-form.component";
import { BookListComponent } from '@components/book-list/book-list.component';
import {HomeComponent} from "@components/home/home.component";
import {BookDetailComponent} from "@components/book-detail/book-detail.component";

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home' },
  { path: 'books', component: BookListComponent },
  { path: 'books/add', component: BookFormComponent, title: 'Add Book' },
  { path: 'books/:id/edit', component: BookFormComponent, title: 'Edit Book' },
  { path: 'books/:id/view', component: BookDetailComponent, title: 'Book Details' }
];
