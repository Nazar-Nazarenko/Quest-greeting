import {Component, inject, OnInit} from '@angular/core';
import { GlobalLayout } from '../infrastructure/global-layout/global-layout';
import { UserAuthorization } from '../infrastructure/services/user-authorization';
import { AsyncPipe } from '@angular/common';

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
  private userAuthorization = inject(UserAuthorization)
  public user$ = this.userAuthorization.getUser();

  ngOnInit(): void {
    this.user$.subscribe( (user) => {
      console.log('user::',user);})
  }

}
