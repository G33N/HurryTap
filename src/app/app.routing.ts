import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
// import { LoginComponent } from './login/login.component';
// import { WelcomeComponent } from './welcome/welcome.component';
// AuthGuard
import { AuthGuard } from './services/auth-guard/auth-guard.service';

export const router: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    component: AppComponent,
  },
  {
    path: '**',
    redirectTo: 'welcome'
  }
];

export const routes = RouterModule.forRoot(router);
