import { Component, inject, input, signal } from '@angular/core';
import { Header } from "../../shared/components/header/header";
import { VerseTextService } from '../../core/services/verse-text-service';
import { ActivatedRoute, RouterLink } from "@angular/router";
import { BookResponse } from '../../models/Model';
import { BookService } from '../../core/services/book-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-info',
  imports: [Header, RouterLink, CommonModule],
  templateUrl: './book-info.html',
  styleUrl: './book-info.css',
})
export class BookInfo {
  book = signal<BookResponse | undefined>(undefined);
  chapters = signal<number[]>([]);
  translation = 'ara93';

  private verseTextService = inject(VerseTextService);
  private bookService = inject(BookService);

  constructor(private route : ActivatedRoute){}

  ngOnInit(): void{
    const abbreviation = this.route.snapshot.paramMap.get('sigla');

    if(abbreviation)
      this.findBook(abbreviation);

  }

  findBook(abbreviation: string): void{
    this.bookService.findBookByAbbreviation(abbreviation).subscribe({
      next: (b) =>{
        this.book.set(b);

        this.findChapters(b.id);
      },
      error: (err) => {
        console.log('Erro ao buscar o livro: ', err);
      }
    });
  }

  findChapters(bookId: number): void{
    this.verseTextService.findChaptersByBookAndTranslation(this.translation, bookId).subscribe({
      next: (c) =>{
          this.chapters.set(c);
      },
      error: (err) =>{
          console.log('Erro ao buscar os livros: ', err);
      }
    });
  }
}
