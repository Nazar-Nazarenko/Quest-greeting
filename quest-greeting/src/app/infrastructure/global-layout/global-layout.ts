import { Component } from '@angular/core';
import {INFO_CONFIG} from '../info-main.config';

@Component({
  selector: 'app-global-layout',
  imports: [],
  standalone: true,
  templateUrl: './global-layout.html',
  styleUrl: './global-layout.scss'
})
export class GlobalLayout {
  public config = INFO_CONFIG;
}
