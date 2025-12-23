import {AfterViewInit, Component} from '@angular/core';
import {INFO_CONFIG, InfoMainModel} from '../info-main.config';
import {UserAuthorization} from '../services/user-authorization';

@Component({
  selector: 'app-global-layout',
  imports: [],
  standalone: true,
  templateUrl: './global-layout.html',
  styleUrl: './global-layout.scss'
})
export class GlobalLayout implements AfterViewInit {
  public config: InfoMainModel | null = null;

  constructor(private userAuthorization: UserAuthorization) {}

  ngAfterViewInit(): void {
    this.userAuthorization.getUserId().subscribe( (id) => {
      this.config = INFO_CONFIG.filter((config) => config.id === id)[0]
    })
  }

}
