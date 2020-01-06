import { Component, OnInit, Input } from '@angular/core';
import { faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { AppConfigService } from '@app/core/config/app-config.service';

@Component({
  selector: 'dc-navbar-default',
  templateUrl: './navbar-default.component.html',
  styleUrls: ['./navbar-default.component.scss']
})
export class NavbarDefaultComponent implements OnInit {
  private config: any = AppConfigService.apiConfig;

  onlineBankingUrl = this.config.gobank.onlineBankingUrl;

  @Input()
  useOnlyDarkLogo: boolean;

  @Input()
  darkLinks: boolean;

  @Input()
  position: string;

  signInAlt = faSignInAlt;
  userPlus = faUserPlus;

  constructor() {}

  ngOnInit() {}

  isRightPositioned() {
    return this.position === 'right';
  }
}
