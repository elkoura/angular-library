import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {ActivatedRoute, Router} from '@angular/router';
import {FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {BookService} from '@services/book.service';
import {Chapter} from '@models/chapter.model';
import {BookStatus} from "@models/book-status.enum";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.scss'
})
export class BookFormComponent implements OnInit {
  title: string | null = null;
  bookForm: FormGroup;
  isEditMode: boolean = false;
  bookId: string | null = null;
  chapterVisibility: boolean[] = [];
  private chapterIdCounter: number = 0;
  bookStatusValues = Object.values(BookStatus);

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService,
    private titleService: Title
  ) {
    this.bookForm = this.fb.group({
      id: this.bookId || Date.now().toString(),
      title: ['', Validators.required],
      author: ['', Validators.required],
      description: [''],
      publishedDate: ['', Validators.required],
      coverImage: [''],
      chapters: this.fb.array([]),
      status: [BookStatus.PLANNED, Validators.required]
    });
  }

  ngOnInit(): void {
    this.title = this.titleService.getTitle();
    this.route.paramMap.subscribe(params => {
      this.bookId = params.get('id');
      this.isEditMode = !!this.bookId;

      if (this.isEditMode && this.bookId) {
        this.bookService.getBookById(this.bookId).subscribe(book => {
          this.bookForm.patchValue(book);
          this.setChapters(book.chapters);
          this.chapterIdCounter = Math.max(...book.chapters.map(ch => ch.id), 0);
        });
      }
    });
  }

  get chapters(): FormArray {
    return this.bookForm.get('chapters') as FormArray;
  }

  addChapter(chapter?: Chapter): void {
    const newChapterId = chapter?.id || ++this.chapterIdCounter;
    this.chapters.push(this.fb.group({
      id: [newChapterId],
      title: [chapter?.title || '', Validators.required],
      content: [chapter?.content || '', Validators.required]
    }));
    this.chapterVisibility.push(true);
  }

  removeChapter(index: number): void {
    this.chapters.removeAt(index);
    this.chapterVisibility.splice(index, 1);
  }

  setChapters(chapters: Chapter[]): void {
    chapters.forEach(chapter => this.addChapter(chapter));
  }

  toggleChapterVisibility(index: number): void {
    this.chapterVisibility[index] = !this.chapterVisibility[index];
  }

  onSubmit(): void {
    if (this.bookForm.valid) {
      if (this.isEditMode && this.bookId) {
        this.bookService.updateBook(this.bookForm.value).subscribe(() => {
          this.router.navigate(['/books']);
        });
      } else {
        this.bookService.createBook(this.bookForm.value).subscribe(() => {
          this.router.navigate(['/books']);
        });
      }
    }
  }
}
