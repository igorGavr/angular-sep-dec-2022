import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {PostRoutingModule} from './post-routing.module';
import {PostService} from './services';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import {PostsResolver} from "./services/resolvers/posts.resolver";
import {PostResolver} from "./services/resolvers/post.resolver";


@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    PostDetailsComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    HttpClientModule
  ],
  providers: [
    PostService,
    PostsResolver,
    PostResolver
  ]
})
export class PostModule {
}
