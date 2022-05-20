import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';

import {urls} from '../../../contants';
import {IPost} from '../interfaces';
import {catchError, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<IPost[]> {
    return this.httpClient
      .get<IPost[]>(urls.posts)
      .pipe(
        map(value => value),
        catchError(err => throwError('erora posts'))
      )
  }

  getById(id: string): Observable<IPost> {
    return this.httpClient.get<IPost>(`${urls.posts}/${id}`)
  }
}
