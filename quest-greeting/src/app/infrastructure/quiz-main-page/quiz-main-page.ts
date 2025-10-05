import { Component } from '@angular/core';
import { GlobalLayout } from '../global-layout/global-layout';
import { INFO_CONFIG } from '../info-main.config';

@Component({
  selector: 'app-quiz-main-page',
  imports: [
    GlobalLayout
  ],
  standalone: true,
  templateUrl: './quiz-main-page.html',
  styleUrl: './quiz-main-page.scss'
})
export class QuizMainPage {

  public readonly config = INFO_CONFIG;
}
