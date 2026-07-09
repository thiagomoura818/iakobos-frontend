import { Component, inject } from '@angular/core';
import { FormsInputLabel } from '../../shared/components/forms-input-label/forms-input-label';
import { Header } from '../../shared/components/header/header';
import { FormControl, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth-service';
import { Router } from '@angular/router';
import { RegisterRequest } from '../../models/Model';
import { extractErrorMessage } from '../../core/errors/error-utils';

@Component({
  selector: 'app-register',
  imports: [Header, FormsInputLabel, ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

  private fb = inject(NonNullableFormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  protected registerForms = this.fb.group({
    name:['', [Validators.required, Validators.minLength(8)]],
    email:['',[Validators.required, Validators.email]],
    password:['', [Validators.required, Validators.minLength(8)]],
  });

  protected get nameControl(): FormControl<string>{
    return this.registerForms.controls.name;
  }

  protected get emailControl(): FormControl<string>{
    return this.registerForms.controls.email;
  }

  protected get passwordControl(): FormControl<string>{
    return this.registerForms.controls.password;
  }

  protected errorMessage = '';

  protected onSubmit(){
    if(this.registerForms.invalid){
      this.registerForms.markAllAsTouched();
      return;
    }

    const formValues = this.registerForms.getRawValue();

    const credentials: RegisterRequest = {
      ...formValues, role:'USER'
    }

    this.authService.register(credentials).subscribe({
      next: ()=>{
        this.router.navigate(['/login']);
      },
      error: (err) => {
        this.errorMessage = extractErrorMessage(err);
     }
    });
  }
}
