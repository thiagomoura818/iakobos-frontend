import { Component, inject, signal } from '@angular/core';
import { Header } from "../../shared/components/header/header";
import { VerseTextService } from '../../core/services/verse-text-service';
import { ActivatedRoute, RouterLink } from "@angular/router";
import { BookResponse } from '../../models/Model';
import { BookService } from '../../core/services/book-service';
import { TranslationService } from '../../core/services/translation.service';
import { CommonModule } from '@angular/common';
import { NotificationService } from '../../core/services/notification-service';
import { extractErrorMessage } from '../../core/errors/error-utils';

@Component({
  selector: 'app-book-info',
  imports: [Header, RouterLink, CommonModule],
  templateUrl: './book-info.html',
  styleUrl: './book-info.css',
})
export class BookInfo {
  book     = signal<BookResponse | undefined>(undefined);
  chapters = signal<number[]>([]);

  private verseTextService   = inject(VerseTextService);
  private bookService        = inject(BookService);
  private translationService = inject(TranslationService);
  private notification = inject(NotificationService);

  /** Expõe o signal para o template usar nos links dos capítulos. */
  translation = this.translationService.current;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const abbreviation = this.route.snapshot.paramMap.get('sigla');
    const traducao     = this.route.snapshot.paramMap.get('traducao');
    
    // Sincroniza o service com o que está na URL e persiste no localStorage
    if (traducao) this.translationService.set(traducao);

    if (abbreviation) this.findBook(abbreviation);
  }

  findBook(abbreviation: string): void {
    this.bookService.findBookByAbbreviation(abbreviation).subscribe({
      next: (b) => {
        this.book.set(b);
        this.findChapters(b.id);
      },
      error: (err) => {
        this.notification.show(extractErrorMessage(err));
      }
    });
  }

  findChapters(bookId: number): void {
    this.verseTextService.findChaptersByBookAndTranslation(this.translation(), bookId).subscribe({
      next: (c) => {
        this.chapters.set(c);
      },
      error: (err) => {
        this.notification.show(extractErrorMessage(err));      }
    });
  }
}

