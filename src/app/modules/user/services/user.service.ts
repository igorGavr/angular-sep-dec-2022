import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {delay, Observable, throwError} from 'rxjs';
import {catchError, map} from "rxjs/operators";

import {IUser} from '../interfaces';
import {urls} from '../../../contants';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<IUser[]> {
    return this.httpClient
      .get<IUser[]>(urls.users)
      .pipe(
        map(value => value),
        catchError(err => throwError('erora  users'))
      )
  }

  getById(id: string): Observable<IUser> {
    return this.httpClient.get<IUser>(`${urls.users}/${id}`).pipe(delay(2000))
  }
}
