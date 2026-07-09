import { Component, inject } from '@angular/core';
import { Header } from '../../shared/components/header/header';
import { FormsInputLabel } from '../../shared/components/forms-input-label/forms-input-label';
import { AuthService } from '../../core/services/auth-service';
import { FormControl, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRequest } from '../../models/Model';
import { extractErrorMessage } from '../../core/errors/error-utils';

@Component({
  selector: 'app-login',
  imports: [Header, FormsInputLabel, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  private fb = inject(NonNullableFormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  protected loginForms = this.fb.group({
    email:['',[Validators.required, Validators.email]],
    password:['',[Validators.required, Validators.minLength(8)]]
  });

  protected get emailControl(): FormControl<string> {
    return this.loginForms.controls.email;
  }

  protected get passwordControl(): FormControl<string> {
    return this.loginForms.controls.password;
  }

  protected errorMessage = '';

  protected onSubmit(){
    if(this.loginForms.invalid){          
      this.loginForms.markAllAsTouched();
      return;
    }

    const credentials: LoginRequest = this.loginForms.getRawValue();

    this.authService.login(credentials).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.errorMessage = extractErrorMessage(err);
      }
    });
  }


}
