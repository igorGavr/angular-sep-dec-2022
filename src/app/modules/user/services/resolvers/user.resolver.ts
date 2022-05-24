import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {IUser} from "../../interfaces";
import {UserService} from "../user.service";

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<IUser> {
  constructor(private userService: UserService,
              private router: Router) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<IUser> | Promise<IUser> | IUser {
    const user = this.router.getCurrentNavigation()?.extras?.state?.['user'] as IUser;
    if (user) {
      console.log(user)
      return user
    }
    let id = route.params['id']
    return this.userService.getById(id)
  }
}
