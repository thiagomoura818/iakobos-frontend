import { Injectable, signal } from '@angular/core';

export type NotificationType = 'error' | 'success' | 'warning';

export interface Notification{
  message:string;
  type: NotificationType;
}

@Injectable({providedIn: 'root'})
export class NotificationService {
  readonly current = signal<Notification | null>(null);

  private timeoutId: ReturnType<typeof setTimeout> | null = null;

  show(message:string, type: NotificationType = 'error', durationMs = 5000): void{
    if(this.timeoutId) clearTimeout(this.timeoutId);

    this.current.set({ message, type });

    this.timeoutId = setTimeout(() => {
      this.current.set(null);
      this.timeoutId = null;
    }, durationMs);
  }

  dismiss(): void{
    if(this.timeoutId) clearTimeout(this.timeoutId);
    this.current.set(null);
  }
}
