import { Injectable } from '@angular/core';
import { PlatformService } from '../platform/platform.service';
import { DocumentRefService } from '../document/document.service';
import * as domino from 'domino';

// add window mock obj on server
function getDominoWindow(document: any): any {
  return domino.createWindow('<!doctype html>' + document.documentElement.outerHTML);
}

function getWindow (): any {
    return window;
}

@Injectable()
export class WindowRefService {

  constructor(
    private platform: PlatformService,
    private document: DocumentRefService
  ) {}

    get nativeWindow (): any {
      if (this.platform.browser) {
          return getWindow();
      }
      return getDominoWindow(this.document.nativeDocument);
    }
}
