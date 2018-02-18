// apollo-angular issue: https://github.com/apollographql/apollo-angular/issues/425

import { Injectable, Inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class TranslateWrapperService {

  private platform = {
    server: undefined,
    browser: undefined
  };
  private lang: string;
  private defaultLang: string;

  constructor(
    @Inject(PLATFORM_ID) private platformId: string,
    private translate: TranslateService
    ) {
    this.platform.server = isPlatformServer(platformId);
    this.platform.browser = isPlatformBrowser(platformId);
  }

  public get currentLang() {
    return this.translate.currentLang;
  }
  public get currentLoader() {
    return this.translate.currentLoader;
  }

  public  get onLangChange() {
    if (this.platform.browser) {
      return this.translate.onLangChange;
    }
    return Observable.create((observer) => {
      this.translate.getTranslation(this.lang).subscribe(translations => {
        observer.next({ lang: this.lang, translations });
        observer.complete();
      });
    });
  }

  public  get onTranslationChange() {
    if (this.platform.browser) {
      return this.translate.onTranslationChange;
    }
    return Observable.create((observer) => {
      this.translate.getTranslation(this.lang).subscribe(translations => {
        observer.next({ lang: this.lang, translations });
        observer.complete();
      });
    });
  }

  public  get onDefaultLangChange() {
    if (this.platform.browser) {
      return this.translate.onDefaultLangChange;
    }
    return Observable.create((observer) => {
      this.translate.getTranslation(this.lang).subscribe(translations => {
        observer.next({ lang: this.defaultLang, translations });
        observer.complete();
      });
    });
  }


  public setDefaultLang(lang: string): void {
    this.defaultLang = lang;
    this.translate.setDefaultLang(lang);
  }

  public getDefaultLang(): string {
    return this.translate.getDefaultLang();
  }

  public use(lang: string): Observable<any> {
    this.lang = lang;
    return this.translate.use(lang);
  }

  public getTranslation(lang: string): Observable<any> {
    return this.translate.getTranslation(lang);
  }

  public setTranslation(lang: string, translations: Object, shouldMerge: boolean = false): void {
    this.translate.setTranslation(lang, translations, shouldMerge);
  }

  public addLangs(langArray: string[]): void {
    this.translate.addLangs(langArray);
  }

  public getLangs(): Array<string> {
    return this.translate.getLangs();
  }

  public get(key: string|Array<string>, interpolateParams?: Object): Observable<string|Object> {
    if (interpolateParams) {
      return this.translate.get(key, interpolateParams);
    }
      return this.translate.get(key);
  }

  public stream(key: string|Array<string>, interpolateParams?: Object): Observable<string|Object> {
    if (interpolateParams) {
      return this.translate.stream(key, interpolateParams);
    }
      return this.translate.stream(key);
  }

  public instant(key: string|Array<string>, interpolateParams?: Object) {
    if (interpolateParams) {
      return this.translate.instant(key, interpolateParams);
    }
      return this.translate.instant(key);
  }

  public set(key: string, value: string, lang?: string): void {
    this.translate.set(key, value, lang);
  }

  public reloadLang(lang: string): Observable<string|Object> {
    return this.translate.reloadLang(lang);
  }

  public resetLang(lang: string): void {
    this.translate.resetLang(lang);
  }

  public getBrowserLang(): string | undefined {
    return this.translate.getBrowserLang();
  }

  public getBrowserCultureLang(): string | undefined {
    return this.translate.getBrowserCultureLang();
  }
}
