import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VerseTextResponse } from '../../models/Model';

@Injectable({
  providedIn: 'root',
})
export class VerseTextService {
  private apiUrl = 'http://localhost:8080/versetext';
  private http = inject(HttpClient);

  findChaptersByBookAndTranslation(translation: string, bookId: number): Observable<number[]>{
    return this.http.get<number[]>(`${this.apiUrl}/chapters/translation/${translation}/book/${bookId}`);
  }

  findVerseByTBC(translation: string, bookId: number, chapter: number): Observable<VerseTextResponse[]>{
    return this.http.get<VerseTextResponse[]>(`${this.apiUrl}/verses/translation/${translation}/book/${bookId}/chapter/${chapter}`);
  }

  searchVerses(translationId: number, term: string): Observable<VerseTextResponse>{
    let params = new HttpParams();

    if(translationId)
      params=params.set('translationId', translationId.toString());
    if(term)
      params=params.set('term',term);

    return this.http.get<VerseTextResponse>(`${this.apiUrl}/verses/search`, {params});
  }


}
