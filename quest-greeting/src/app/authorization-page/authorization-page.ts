import { Component } from '@angular/core';
import {GlobalLayout} from '../infrastructure/global-layout/global-layout';

@Component({
  selector: 'app-authorization-page',
  imports: [
    GlobalLayout
  ],
  standalone: true,
  templateUrl: './authorization-page.html',
  styleUrl: './authorization-page.scss'
})
export class AuthorizationPage {

}
