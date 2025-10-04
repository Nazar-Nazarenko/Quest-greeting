import { Component } from '@angular/core';
import {GlobalLayout} from '../infrastructure/global-layout/global-layout';

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

}
