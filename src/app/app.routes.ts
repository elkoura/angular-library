import { Routes } from '@angular/router';
import {BookFormComponent} from "@components/book-form/book-form.component";
import { BookListComponent } from './components/book-list/book-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'books', pathMatch: 'full' },
  { path: 'books', component: BookListComponent },
  { path: 'books/add', component: BookFormComponent, title: 'Add Book' },
  { path: 'books/:id/edit', component: BookFormComponent, title: 'Edit Book' }
];
