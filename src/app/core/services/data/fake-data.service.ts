import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { AbstractDataService } from './abstract-data.service';
import * as fakeData from './fake-data';

@Injectable({
  providedIn: 'root',
})
/** the fake data service has implemented that make app work with out server for showing demo */
export class FakeDataService extends AbstractDataService {
  login(user): Observable<any> {
    const username = 'admin';
    const password = '123456789';
    // checking hardcoded username and password
    if (user.username === username && user.password === password) {
      return of(fakeData.userData);
    } else {
      return throwError(
        () => new Error('login failed! username or password is incorrect.')
      );
    }
  }
}
