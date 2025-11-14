import { Component } from '@angular/core';
import {UserAuthorization} from '../infrastructure/services/user-authorization';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {Unsubscribe} from '../infrastructure/services/unsubscribe';
import {takeUntil} from 'rxjs';
import {USER_KEYS_COLLECTION} from '../infrastructure/user-keys-collection';

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
              private unsubscribe$: Unsubscribe) {
    this.userName.valueChanges.pipe(
      takeUntil(this.unsubscribe$))
      .subscribe( value => {
      this.isDisabled = !(value && value.length > 4)
      this.userAuthorization.setUserName(value)
    })
  }

}
