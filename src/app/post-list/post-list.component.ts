import { Component, OnInit, Input } from '@angular/core';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() posts = new Array();
  constructor() {
  }

  ngOnInit() {
  }

}
