import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {CurrentUserId, InfoMainModel} from '../info-main.config';
import {USER_KEYS} from '../user-keys-collection';

@Injectable({
  providedIn: 'root'
})
export class UserAuthorization {

  private userName = new BehaviorSubject<string>('');
  private userId = new BehaviorSubject<number | null>(0);

  public setUserIdName(userName: string, userId: number): void {
    this.userName.next(this.getCurrentUserName(userName));
    this.userId.next(userId);
  }

  public getUserName(): Observable<string> {
    return this.userName.asObservable();
  }

  public getUserId(): Observable<number | null> {
    return this.userId.asObservable();
  }

  private getCurrentUserName(value: string): string {
    if (value === CurrentUserId.userNull) {
      return USER_KEYS.Katya;
    }
    if (value === CurrentUserId.userOne) {
      return USER_KEYS.Igor;
    }
    if (value === CurrentUserId.userTwo) {
      return USER_KEYS.Sasha;
    }
    if (value === CurrentUserId.userThree) {
      return USER_KEYS.Liza;
    }
    if (value === CurrentUserId.userFive) {
      return 'Test name';
    }

    return 'Test name';
  }

}
