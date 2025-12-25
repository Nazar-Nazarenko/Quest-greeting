import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CurrentUserId, INFO_CONFIG, InfoMainModel } from '../info-main.config';

@Injectable({
  providedIn: 'root'
})
export class UserAuthorization {

  private userName = new BehaviorSubject<string>('');
  private userId = new BehaviorSubject<number | null>(0);
  private user$ = new BehaviorSubject<InfoMainModel | null>(null);

  public setUserIdName(userName: string, userId: number): void {
    this.userName.next(this.getCurrentUserName(userName));
    this.userId.next(userId);
  }

  public setSelectedUser(userId: number): void {
    const user = INFO_CONFIG.find(({ id }) => id === userId) ?? null;
    this.user$.next(user);
  }

  public getUserName(): Observable<string> {
    return this.userName.asObservable();
  }

  public getUserId(): Observable<number | null> {
    return this.userId.asObservable();
  }

  public getUser(): Observable<InfoMainModel | null> {
    return this.user$.asObservable() ?? null;
  }

  private getCurrentUserName(value: string): string {
    if (value === CurrentUserId.userNull) {
      return this.chooseUserName(0);
    }
    if (value === CurrentUserId.userOne) {
      return this.chooseUserName(1);
    }
    if (value === CurrentUserId.userTwo) {
      return this.chooseUserName(2);
    }
    if (value === CurrentUserId.userThree) {
      return this.chooseUserName(3);
    }
    if (value === CurrentUserId.userFive) {
      return 'Test name';
    }

    return 'Test name';
  }

  private chooseUserName(userId: number): string {
    const users = [...INFO_CONFIG];

    return users.filter(({  id}) => id === userId)[0].userName
  }

}
