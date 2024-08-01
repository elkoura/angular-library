import {Chapter} from "./chapter.model";

export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  publishedDate: Date;
  chapters: Chapter[];
  completed: boolean;
  coverImage?: string;
}
