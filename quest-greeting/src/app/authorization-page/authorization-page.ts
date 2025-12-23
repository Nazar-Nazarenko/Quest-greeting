import { Component } from '@angular/core';
import { UserAuthorization } from '../infrastructure/services/user-authorization';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Unsubscribe } from '../infrastructure/services/unsubscribe';
import { takeUntil } from 'rxjs';
import {CurrentUserId, RoutesMain} from '../infrastructure/info-main.config';
import {Router} from '@angular/router';

@Component({
  selector: 'app-authorization-page',
  imports: [
    ReactiveFormsModule
  ],
  providers: [Unsubscribe],
  standalone: true,
  templateUrl: './authorization-page.html',
  styleUrls: ['./authorization-page.scss']
})
export class AuthorizationPage {
  public userName:FormControl<string> = new FormControl();
  public isDisabled = true;

  constructor(private userAuthorization: UserAuthorization,
              private router: Router,
              private unsubscribe$: Unsubscribe) {
    this.userName.valueChanges.pipe(
      takeUntil(this.unsubscribe$))
      .subscribe( value => {
      this.isDisabled = !(value && value.length > 3)
      this.userAuthorization.setUserIdName(value, this.getUserId(value))
    })
  }

  private getUserId(value:string):number {
    if (value === CurrentUserId.userNull) {
      return 0;
    }
    if (value === CurrentUserId.userOne) {
      return 1;
    }
    if (value === CurrentUserId.userTwo) {
      return 2;
    }
    if (value === CurrentUserId.userFour) {
      return 3;
    }
    if (value === CurrentUserId.userFive) {
      return 4;
    }

    return 0;
  }

  public handleUserAuthorization(): void {
    this.router.navigate([`/${RoutesMain.Home}`]);
    this.userAuthorization.getUserName().subscribe( name => console.log('name::',name))
  }

}
