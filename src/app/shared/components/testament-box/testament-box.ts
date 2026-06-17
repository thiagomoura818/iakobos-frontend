import { Component, inject, input, signal } from '@angular/core';
import { BookButton } from '../book-button/book-button';
import { BookResponse } from '../../../models/Model';
import { BookService } from '../../../core/services/book-service';
import { TranslationService } from '../../../core/services/translation.service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-testament-box',
  imports: [BookButton, RouterLink],
  templateUrl: './testament-box.html',
  styleUrl: './testament-box.css',
})
export class TestamentBox {

  private bookService        = inject(BookService);
  private translationService = inject(TranslationService);

  public testamentBooks = signal<BookResponse[]>([]);
  public testamentId    = input<number>();

  /** Expõe o signal de tradução diretamente para o template. */
  public translation = this.translationService.current;

  ngOnInit(): void{
    this.findByTestament();
  }

  findByTestament(): void{
    const id = this.testamentId();

    if(id != undefined){
      this.bookService.findByTestament(id).subscribe({
        next: (books) => {
          this.testamentBooks.set(books);
        },
        error: (err) => {
          console.log('Erro ao buscar os livros por testamento: ', err);
        }
      });
    }
  }
}
