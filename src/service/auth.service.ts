import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly SECRET_PASSWORD = 'emilie'; // Ton mot de passe ici

  login(password: string): boolean {
    if (password === this.SECRET_PASSWORD) {
      sessionStorage.setItem('is_auth', 'true');
      return true;
    }
    return false;
  }

  isLoggedIn(): boolean {
    return sessionStorage.getItem('is_auth') === 'true';
  }

  logout() {
    sessionStorage.removeItem('is_auth');
  }
}
