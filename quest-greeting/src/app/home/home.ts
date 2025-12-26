import {Component, inject, OnInit} from '@angular/core';
import { GlobalLayout } from '../infrastructure/global-layout/global-layout';
import { UserAuthorization } from '../infrastructure/services/user-authorization';
import { AsyncPipe } from '@angular/common';
import {Router} from '@angular/router';
import {RoutesMain} from '../infrastructure/info-main.config';

@Component({
  selector: 'app-home',
  imports: [
    GlobalLayout,
    AsyncPipe
  ],
  templateUrl: './home.html',
  standalone: true,
  styleUrl: './home.scss'
})
export class Home implements OnInit {
  private userAuthorization = inject(UserAuthorization);
  private router = inject(Router);
  public user$ = this.userAuthorization.getUser();

  ngOnInit(): void {
    this.user$.subscribe( (user) => {
      console.log('user::',user);})
  }

  public moveToQuiz(): void {
    this.router.navigate([`/${RoutesMain.QuizMain}`]);
  }

}
