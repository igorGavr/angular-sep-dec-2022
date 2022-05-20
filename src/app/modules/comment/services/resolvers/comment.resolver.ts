import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {IComment} from "../../interfaces";
import {CommentService} from "../comment.service";

@Injectable({
  providedIn: 'root'
})
export class CommentResolver implements Resolve<IComment> {
  constructor(private commentService: CommentService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IComment> | Promise<IComment> | IComment {
    let id = route.params['id']
    return this.commentService.getById(id)
  }

}
