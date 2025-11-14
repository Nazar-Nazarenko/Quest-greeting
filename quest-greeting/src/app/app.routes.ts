import { Routes } from '@angular/router';
import { Home } from './home/home';
import { RoutesMain } from './infrastructure/info-main.config';
import { QuizMainPage } from './infrastructure/quiz-main-page/quiz-main-page';
import { AuthorizationPage } from './authorization-page/authorization-page';

export const routes: Routes = [
  {
    path: '',
    component: AuthorizationPage
  },
  {
    path: RoutesMain.AuthorizationPage,
    component: AuthorizationPage
  },
  {
    path: RoutesMain.Home,
    component: Home
  },
  {
    path: RoutesMain.QuizMain,
    component: QuizMainPage
  }
];
