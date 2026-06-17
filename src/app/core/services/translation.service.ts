import { Injectable, signal } from '@angular/core';

const STORAGE_KEY = 'iakobos:translation';
const DEFAULT_TRANSLATION = 'ara93';

@Injectable({ providedIn: 'root' })
export class TranslationService {

  /** Signal reativo com a tradução ativa no momento. */
  readonly current = signal<string>(this.loadFromStorage());

  /** Muda a tradução ativa e persiste no localStorage. */
  set(translation: string): void {
    this.current.set(translation);
    localStorage.setItem(STORAGE_KEY, translation);
  }

  private loadFromStorage(): string {
    return localStorage.getItem(STORAGE_KEY) ?? DEFAULT_TRANSLATION;
  }
}
