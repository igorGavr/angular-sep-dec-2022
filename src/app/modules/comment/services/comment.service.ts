import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';

import {urls} from '../../../contants';
import {IComment} from '../interfaces';
import {catchError, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<IComment[]> {
    return this.httpClient
      .get<IComment[]>(urls.comments)
      .pipe(
        map(value => value),
        catchError(err => throwError('erora comments'))
      )
  }

  getById(id: string): Observable<IComment> {
    return this.httpClient.get<IComment>(`${urls.comments}/${id}`)
  }
}
