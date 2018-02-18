import { Injectable, Inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Injectable()
export class PlatformService {

  constructor(@Inject(PLATFORM_ID) private platformId: string) {}

  public get browser(): boolean {
      return isPlatformBrowser(this.platformId);
  }
  public get server(): boolean {
      return isPlatformServer(this.platformId);
  }
  public get id(): string {
    return this.platformId;
  }
}
