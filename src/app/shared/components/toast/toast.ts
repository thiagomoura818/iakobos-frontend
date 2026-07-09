// src/app/shared/components/toast/toast.ts
import { Component, inject } from '@angular/core';
import { NotificationService } from '../../../core/services/notification-service';

@Component({
  selector: 'app-toast',
  template: `
    @if (notification()) {
      <div class="toast" [class]="'toast--' + notification()!.type">
        <span>{{ notification()!.message }}</span>
        <button (click)="dismiss()">✕</button>
      </div>
    }
  `,
  styles: [`
    .toast {
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      padding: 1rem 1.5rem;
      border-radius: 0.5rem;
      color: white;
      display: flex;
      align-items: center;
      gap: 1rem;
      z-index: 9999;
      animation: slideIn 0.3s ease-out;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }
    .toast--error   { background: #dc2626; }
    .toast--success { background: #16a34a; }
    .toast--warning { background: #d97706; }
    .toast button {
      background: none; border: none; color: white;
      cursor: pointer; font-size: 1rem;
    }
    @keyframes slideIn {
      from { transform: translateX(100%); opacity: 0; }
      to   { transform: translateX(0);    opacity: 1; }
    }
  `]
})
export class Toast {
  private notificationService = inject(NotificationService);
  protected notification = this.notificationService.current;

  dismiss() { this.notificationService.dismiss(); }
}
