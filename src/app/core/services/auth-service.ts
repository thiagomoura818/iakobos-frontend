import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { JwtResponse, LoginRequest, RegisterRequest } from '../../models/Model';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private apiUrl = 'http://localhost:8080/api/auth';
  private http = inject(HttpClient);
  private cookieService = inject(CookieService);
  private readonly TOKEN_KEY = 'auth_token';

  #isAuthenticated = signal<boolean>(this.cookieService.check(this.TOKEN_KEY));
  public isAuthenticated = computed(()=>this.#isAuthenticated());

  login(login: LoginRequest): Observable<JwtResponse>{
    return this.http.post<JwtResponse>(`${this.apiUrl}/login`, login)
      .pipe(
        tap(response => {
          this.cookieService.set(
            this.TOKEN_KEY, 
            response.token, 
            1,            // Expira em 1 dia
            '/',          // Disponível no app inteiro
            undefined,    
            false,         // Secure: só via HTTPS
            'Strict'      // SameSite: proteção anti-CSRF
          );
          
          this.#isAuthenticated.set(true); // Avisa o app que tá logado
        })
      );
  
  }

  register(register: RegisterRequest): Observable<JwtResponse>{
    return this.http.post<JwtResponse>(`${this.apiUrl}/register`, register);
  }

  logout(): void{
    this.cookieService.delete(this.TOKEN_KEY, '/');
    this.#isAuthenticated.set(false);
  }
}
