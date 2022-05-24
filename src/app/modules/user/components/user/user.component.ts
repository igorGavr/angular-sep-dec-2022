import {Component, Input, OnInit} from '@angular/core';

import {IUser} from '../../interfaces';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input()
  user: IUser;

  constructor() {
  }

  ngOnInit(): void {
  }

}
