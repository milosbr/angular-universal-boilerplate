import { Component } from '@angular/core';

import { PlatformService } from '../core/services/platform/platform.service';

@Component({
  selector: 'bp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor (public platform: PlatformService) {}
}
