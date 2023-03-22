import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractDataService } from './abstract-data.service';

@Injectable({
  providedIn: 'root',
})
/** the real data service that makes request from server */
export class DataService extends AbstractDataService {
  login(user): Observable<any> {
    throw new Error('Method not implemented.');
  }
}
