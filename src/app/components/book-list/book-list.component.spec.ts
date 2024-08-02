import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookListComponent } from './book-list.component';
import { By } from '@angular/platform-browser';

describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title', () => {
    const title = fixture.debugElement.query(By.css('h2')).nativeElement;
    expect(title.innerHTML).toBe('Liste des livres');
  });

  it('should have a sort button', () => {
    const sortButton = fixture.debugElement.query(
      By.css('button')
    ).nativeElement;
    expect(sortButton.innerHTML).toContain('Sort by Title');
  });

  it('should have a grid for displaying books', () => {
    const grid = fixture.debugElement.query(By.css('.grid')).nativeElement;
    expect(grid).toBeTruthy();
  });

  it('should have a button for adding a new book', () => {
    const addButton = fixture.debugElement.query(
      By.css('.text-blue-500')
    ).nativeElement;
    expect(addButton.innerHTML).toBe('+ Add Item');
  });
});
