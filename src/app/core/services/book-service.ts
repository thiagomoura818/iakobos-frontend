import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookResponse } from '../../models/Model';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private apiUrl = 'http://localhost:8080/book';
  private http = inject(HttpClient);

  findAll(): Observable<BookResponse[]>{
    return this.http.get<BookResponse[]>(this.apiUrl);
  }

  findById(): Observable<BookResponse>{
    return this.http.get<BookResponse>(this.apiUrl);
  }

  findByTestament(testamentId: number): Observable<BookResponse[]>{
    return this.http.get<BookResponse[]>(`${this.apiUrl}/testament/${testamentId}`);
  }

  findByTranslation(translationId: number): Observable<BookResponse[]>{
    return this.http.get<BookResponse[]>(this.apiUrl);
  }

  findBookByAbbreviation(abbreviation: string): Observable<BookResponse>{
    return this.http.get<BookResponse>(`${this.apiUrl}/abbreviation/${abbreviation}`);
  }
}
