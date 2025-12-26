import {Component, inject} from '@angular/core';
import { GlobalLayout } from '../global-layout/global-layout';
import { INFO_CONFIG } from '../info-main.config';
import {UserAuthorization} from '../services/user-authorization';
import {Router} from '@angular/router';
import {map} from 'rxjs';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-quiz-main-page',
  imports: [
    GlobalLayout,
    AsyncPipe
  ],
  standalone: true,
  templateUrl: './quiz-main-page.html',
  styleUrl: './quiz-main-page.scss'
})
export class QuizMainPage {
  private userAuthorization = inject(UserAuthorization);
  private router = inject(Router);
  public questions$ = this.userAuthorization.getUser()
    .pipe(map(data => data?.questions));

}
