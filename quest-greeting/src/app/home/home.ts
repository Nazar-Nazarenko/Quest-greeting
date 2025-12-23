import {AfterViewInit, Component} from '@angular/core';
import {GlobalLayout} from '../infrastructure/global-layout/global-layout';
import {INFO_CONFIG, InfoMainModel} from '../infrastructure/info-main.config';
import {UserAuthorization} from '../infrastructure/services/user-authorization';

@Component({
  selector: 'app-home',
  imports: [
    GlobalLayout
  ],
  templateUrl: './home.html',
  standalone: true,
  styleUrl: './home.scss'
})
export class Home implements AfterViewInit {
  public config: InfoMainModel | null = null;

  constructor(private userAuthorization: UserAuthorization) {}

  ngAfterViewInit(): void {
    this.userAuthorization.getUserId().subscribe( (id) => {
      this.config = INFO_CONFIG.filter((config) => config.id === id)[0]
    })
  }
}
