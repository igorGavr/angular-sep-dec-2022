import {Component, OnInit} from '@angular/core';

import {IComment} from '../../interfaces';
import {CommentService} from '../../services';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: IComment[];

  constructor(private commentService: CommentService) {
  }

  ngOnInit(): void {
    this.commentService.getAll().subscribe(value => this.comments = value)
  }

}
