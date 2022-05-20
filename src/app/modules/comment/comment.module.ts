import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {CommentRoutingModule} from './comment-routing.module';
import {CommentService} from './services';
import { CommentsComponent } from './components/comments/comments.component';
import { CommentComponent } from './components/comment/comment.component';
import { CommentDetailsComponent } from './components/comment-details/comment-details.component';
import {CommentsResolver} from "./services/resolvers/comments.resolver";
import {CommentResolver} from "./services/resolvers/comment.resolver";


@NgModule({
  declarations: [
    CommentsComponent,
    CommentComponent,
    CommentDetailsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CommentRoutingModule
  ],
  providers: [
    CommentService,
    CommentsResolver,
    CommentResolver
  ]
})
export class CommentModule {
}
