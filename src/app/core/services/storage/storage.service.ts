import { Injectable } from '@angular/core';
import { PlatformService } from '../platform/platform.service';
import { NgForage, NgForageConfig, NgForageOptions } from '@ngforage/ngforage-ng5';

export interface Storage {
  setItem(key: string, value: any): any;
  getItem(key: string): any;
  removeItem(key: string): any;
  clear(): any;
};

@Injectable()
export class StorageService {
  public constructor(
    private storage: NgForage,
    private storageConfig: NgForageConfig,
    private platform: PlatformService
  ) {
    const config: NgForageOptions = {
      driver: NgForageConfig.DRIVER_LOCALSTORAGE,
      name: 'app'
    };
    storageConfig.configure(config);
  }

  public put(key: string, value: any): void {
    if (this.platform.browser) {
        this.storage.setItem(key, value);
    }
  }

  public get(key: string): Promise<any> {
    if (this.platform.browser) {
        return this.storage.getItem(key);
    }
    return new Promise(res => res(null));
  }

  public remove(key: string): void {
    if (this.platform.browser) {
        this.storage.removeItem(key);
    }
  }

  public clear(): void {
    if (this.platform.browser) {
        this.storage.clear();
    }
  }

  public getStorage(): Storage {
    if (this.platform.browser) {
      return this.storage;
    }
    return this.mockedStorage();
  }

  private mockedStorage(): Storage {
    return {
      setItem(key: string, value: any): void { return; },
      getItem(key: string): null { return null; },
      removeItem(key: string): void { return; },
      clear(): void { return; }
    };
  }
}
