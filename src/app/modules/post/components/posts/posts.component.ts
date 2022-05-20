import {Component, OnInit} from '@angular/core';

import {PostService} from '../../services';
import {IPost} from '../../interfaces';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: IPost[];

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data
      .subscribe(({postsData}) => this.posts = postsData)
  }

}
