import { Component } from '@angular/core';
import {GlobalLayout} from '../infrastructure/global-layout/global-layout';
import {INFO_CONFIG} from '../infrastructure/info-main.config';

@Component({
  selector: 'app-home',
  imports: [
    GlobalLayout
  ],
  templateUrl: './home.html',
  standalone: true,
  styleUrl: './home.scss'
})
export class Home {
  public config = INFO_CONFIG;
}
