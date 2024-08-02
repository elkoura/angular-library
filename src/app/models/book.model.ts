import {Chapter} from "@models/chapter.model";
import {BookStatus} from "@models/book-status.enum";

export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  publishedDate: Date;
  chapters: Chapter[];
  status: BookStatus;
  coverImage?: string;
}
