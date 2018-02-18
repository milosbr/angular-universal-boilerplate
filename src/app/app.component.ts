import { Component, OnInit } from '@angular/core';
import { TranslateWrapperService } from './core/services/translate-wrapper/translate-wrapper.service';
import { locales } from '../assets/locales';

@Component({
  selector: 'bp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public title: string = 'mika';

  constructor(private translate: TranslateWrapperService) {}

  public ngOnInit() {
    // initiate translation
    this.translate.addLangs(locales.map(l => l.id));
    this.translate.setDefaultLang('en');
    this.translate.use('en');
    // translation using service
    this.translate.onLangChange.subscribe((trans) => {
      this.title = this.translate.instant('app.title');
    });
  }
}
