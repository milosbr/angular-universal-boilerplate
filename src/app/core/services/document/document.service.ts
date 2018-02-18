import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable()
export class DocumentRefService {

  constructor(@Inject(DOCUMENT) private document: Document) {}

  get nativeDocument (): any {
    return this.document;
  }
}
