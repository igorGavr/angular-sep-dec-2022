import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {PostsComponent} from './components/posts/posts.component';
import {PostDetailsComponent} from './components/post-details/post-details.component';
import {PostsResolver} from "./services/resolvers/posts.resolver";
import {PostResolver} from "./services/resolvers/post.resolver";
import {PostGuard} from "./services/guards/post.guard";

const routes: Routes = [
  {
    path: '', component: PostsComponent,
    resolve: {postsData: PostsResolver},
    canDeactivate: [PostGuard],
    canActivate:[PostGuard],
    children: [
      {path: ':id', component: PostDetailsComponent, resolve: {postData: PostResolver}}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
