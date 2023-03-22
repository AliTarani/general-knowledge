import { Injectable } from '@angular/core';
import { AbstractStorageService } from './abstract-storage.service';

@Injectable({
  providedIn: 'root',
})
export class StorageService extends AbstractStorageService {
  public override getStorage(key: string) {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : '';
  }

  public override setStorage(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public override clear(): void {
    return this.secureStorage.clear();
  }
}
