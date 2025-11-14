import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthorization {

  private userName = new BehaviorSubject<string>('');

  public setUserName(userName: string): void {
    this.userName.next(userName);
  }

  public getUserName(): Observable<string> {
    return this.userName.asObservable();
  }

}
