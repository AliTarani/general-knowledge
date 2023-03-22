import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
/**
 * this abstract class has implemented to indicates that what methods are available in our data servise
 * all type of data services must extend this class to dependency injection perform correctly.
 */
export abstract class AbstractDataService {
  abstract login(user): Observable<any>;
}
