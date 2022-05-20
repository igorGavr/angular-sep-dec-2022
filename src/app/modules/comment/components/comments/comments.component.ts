import {Component, OnInit} from '@angular/core';

import {CommentService} from '../../services';
import {IComment} from '../../interfaces';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: IComment[];

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data
      .subscribe(({commentsData}) => this.comments = commentsData)
  }

}
