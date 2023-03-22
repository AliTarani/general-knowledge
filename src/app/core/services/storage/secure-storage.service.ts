import { Injectable } from '@angular/core';
import { AbstractStorageService } from './abstract-storage.service';

@Injectable({
  providedIn: 'root',
})
export class secureStorageService extends AbstractStorageService {
  public override getStorage(key: string) {
    return this.secureStorage.getItem(key);
  }

  public override setStorage(key: string, value: any) {
    this.secureStorage.setItem(key, value);
  }

  public override clear(): void {
    return this.secureStorage.clear();
  }
}
