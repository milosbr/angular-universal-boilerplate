import { NgModule } from '@angular/core';
import { NgForageModule } from '@ngforage/ngforage-ng5';
import { SharedModule } from '../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PlatformService } from './services/platform/platform.service';
import { TranslateWrapperService } from './services/translate-wrapper/translate-wrapper.service';
import { DocumentRefService } from './services/document';
import { WindowRefService } from './services/window';
import { StorageService } from './services/storage/storage.service';

@NgModule({
  imports: [
    NgForageModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [
    PlatformService,
    TranslateWrapperService,
    DocumentRefService,
    WindowRefService,
    StorageService
  ]
})
export class CoreModule {}
