import { Routes } from '@angular/router';
import { QuizzComponent } from '../components/quizz/quizz.component';
import { AdminComponent } from '../components/admin/admin.component';
import { LoginComponent } from '../components/login/login.component';
import { authGuard } from '../guards/auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'quizz', component: QuizzComponent, canActivate: [authGuard] },
  { path: 'admin', component: AdminComponent, canActivate: [authGuard] },
  { path: '', redirectTo: 'quizz', pathMatch: 'full' },
  { path: '**', redirectTo: 'quizz' }
];
