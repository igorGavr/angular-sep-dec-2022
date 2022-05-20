import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import { UserRoutingModule } from './user-routing.module';
import {UserService} from './services';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import {UsersResolver} from "./services/resolvers/users.resolver";
import {UserResolver} from "./services/resolvers/user.resolver";
import {UserGuard} from "./services/guards/user.guard";


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule
  ],
  providers:[
    UserService,
    UsersResolver,
    UserResolver,
    UserGuard
  ]
})
export class UserModule { }
