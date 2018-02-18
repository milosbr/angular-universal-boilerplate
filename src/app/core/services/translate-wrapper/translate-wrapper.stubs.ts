import {TranslateLoader, TranslateService } from '@ngx-translate/core';
import { PLATFORM_ID } from '@angular/core';
import { TranslateWrapperService } from './translate-wrapper.service';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { switchMap } from 'rxjs/operators/switchMap';
import 'rxjs/add/observable/of';
import * as en from '../../../../assets/locales/en.json';
import * as sr_CS from '../../../../assets/locales/sr-CS.json';

const translations = {
  en: en,
  'sr-CS': sr_CS
}

export class TranslateFakeLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    return Observable.of(translations[lang]);
  }
}

export class TranslateServiceStub {

  private setLang: string;
  private setLang$: BehaviorSubject<string> = new BehaviorSubject('en');
  private defLang: string;
  private langs: string[];

  constructor(private translate: TranslateService) {
    this.addLangs(['en', 'sr-CS']);
    this.setDefaultLang('en');
    this.use('en');
  }

  addLangs(langArray: string[]) {
    this.langs = langArray;
    this.translate.addLangs(langArray);
  }

  use(lang: string) {
    this.setLang = lang;
    this.setLang$.next(lang);
    this.translate.use(lang);
    return new Observable;
  }

  setDefaultLang(lang: string) {
    this.defLang = lang;
    this.translate.setDefaultLang(lang);
    if (!this.setLang) {
      this.setLang$.next(lang);
      this.setLang = lang;
    }
  }

  get onLangChange(): Observable<{ lang: string, translations: any }> {
    return this.setLang$.pipe(
      switchMap((val) => {
        return Observable.create( observer => {
          observer.next({ lang: this.setLang, translations: translations[this.setLang] });
          observer.complete();
        });
      })
    );
  }

  instant(key: string): string {
    return [this.setLang, ...key.split('.')].reduce((o, i) => o[i], translations);
  }
}
