import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})

export class PostComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

class PostListComponent {
  title: string;
  content: string;
  loveIts: number;
  created_at: Date;

  // Post(title, content, loveIts, created_at) {
  //   this.title = title;
  //   this.content = content;
  //   this.loveIts = loveIts;
  //   this.created_at = new Date();
  // };
  constructor(title, content, loveIts, created_at) {
    this.title = title;
    this.content = content;
    this.loveIts = loveIts;
    this.created_at = new Date();
  }

  getTitle() {
    return this.title;
  }
  getContent() {
    return this.content;
  }
  getLoveIts() {
    return this.loveIts;
  }
  getCreatedAt(){
    return this.created_at;
  }

}
