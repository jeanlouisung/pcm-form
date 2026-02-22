import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container vh-100 d-flex align-items-center justify-content-center">
      <div class="card shadow-lg p-4" style="max-width: 400px; width: 100%;">
        <h2 class="text-center mb-4">Accès Protégé</h2>
        <p class="text-muted small text-center">Veuillez saisir le mot de passe pour accéder au test PCM.</p>

        <input type="password" [(ngModel)]="password" (keyup.enter)="tryLogin()"
               class="form-control mb-3" placeholder="Mot de passe">

        <button (click)="tryLogin()" class="btn btn-primary w-100">Entrer</button>

        <p *ngIf="error" class="text-danger small mt-2 text-center">Mot de passe incorrect.</p>
      </div>
    </div>
  `
})
export class LoginComponent {
  password = '';
  error = false;

  constructor(private auth: AuthService, private router: Router) {}

  tryLogin() {
    if (this.auth.login(this.password)) {
      this.router.navigate(['/quizz']);
    } else {
      this.error = true;
    }
  }
}
