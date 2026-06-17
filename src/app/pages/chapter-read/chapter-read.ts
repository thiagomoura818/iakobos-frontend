import { Component, OnInit, inject, signal } from '@angular/core';
import { Header } from '../../shared/components/header/header';
import { Versicle } from "../../shared/components/versicle/versicle";
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BookResponse, VerseTextResponse } from '../../models/Model';
import { BookService } from '../../core/services/book-service';
import { VerseTextService } from '../../core/services/verse-text-service';
import { TranslationService } from '../../core/services/translation.service';

@Component({
  selector: 'app-chapter-read',
  standalone: true,
  imports: [Header, Versicle, RouterLink],
  templateUrl: './chapter-read.html',
  styleUrl: './chapter-read.css',
})
export class ChapterRead implements OnInit {
  abbreviation = signal<string>('');
  chapter      = signal<number>(1);
  translation  = signal<string>('');
  book         = signal<BookResponse | undefined>(undefined);
  verses       = signal<VerseTextResponse[]>([]);
  chapterQntd = signal<number>(0);

  private route              = inject(ActivatedRoute);
  private bookService        = inject(BookService);
  private verseTextService   = inject(VerseTextService);
  private translationService = inject(TranslationService);

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const a = params.get('sigla');
      const t = params.get('traducao');
      const c = params.get('capitulo');

      if (a && c && t) {
      this.abbreviation.set(a);
      this.translation.set(t);
      this.chapter.set(Number(c));

      // Sincroniza o service com o que está na URL e persiste no localStorage
      this.translationService.set(t);

      // Disparas a primeira busca. A segunda acontecerá em cadeia automaticamente!
      this.findBookAndVerses(a, t, Number(c));
    }
    })
  }

  // Mudamos o nome para ficar claro que ele inicia a cadeia de buscas
  findBookAndVerses(abbreviation: string, translation: string, chapter: number): void {
    this.bookService.findBookByAbbreviation(abbreviation).subscribe({
      next: (b) => {
        this.book.set(b);

        // 🟢 AGORA SIM! O livro voltou do banco, temos o ID real (b.id).
        // Disparamos a busca dos versículos de forma segura.
        this.findVerses(translation, b.id, chapter);
      },
      error: (err) => {
        console.error('Erro ao buscar o livro: ', err);
      }
    });
  }

  findVerses(translation: string, bookId: number, chapter: number): void {
    this.verseTextService.findVerseByTBC(translation, bookId, chapter).subscribe({
      next: (v) => {
        this.verses.set(v);
        this.findChapterQuantity(translation, bookId);
      },
      error: (err) => {
        console.error('Erro ao buscar os versículos ', err);
      }
    });
  }

  findChapterQuantity(translation: string, bookId: number): void{
    this.verseTextService.findChaptersByBookAndTranslation(translation, bookId).subscribe({
      next: (v) => {
        this.chapterQntd.set(v.length);
      },
      error: (err) => {
        console.log('Erro ao buscar os capitulos do livro ', err);
      }
    });
  }
}