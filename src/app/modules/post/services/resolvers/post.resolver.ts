import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {IPost} from "../../interfaces";
import {PostService} from "../post.service";

@Injectable({
  providedIn: 'root'
})
export class PostResolver implements Resolve<IPost> {
  constructor(private postService: PostService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPost> | Promise<IPost> | IPost {
    let id = route.params['id']
    return this.postService.getById(id)
  }

}
