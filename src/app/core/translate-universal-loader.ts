import { TranslateLoader } from '@ngx-translate/core';
import { Observable } from 'rxjs/Observable';

import * as path from 'path';
import * as fs from 'fs';

export class TranslateUniversalLoader implements TranslateLoader {

  private prefix: string;
  private suffix: string = '.json';

  public getTranslation(lang: string): Observable<any> {
    this.prefix = path.join(process.cwd(), 'dist', 'browser', 'assets', 'locales');
    console.log(fs);
    const translation = JSON.parse(fs.readFileSync(`${this.prefix}/${lang}${this.suffix}`, 'utf8'));
    return Observable.create(observer => {
      observer.next(translation);
      observer.complete();
    });
  }
}
