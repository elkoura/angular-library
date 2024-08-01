import { Routes } from '@angular/router';
import {BookFormComponent} from "@components/book-form/book-form.component";

export const routes: Routes = [
  { path: 'books/add', component: BookFormComponent, title: 'Add Book' },
  { path: 'books/:id/edit', component: BookFormComponent, title: 'Edit Book' }
];
