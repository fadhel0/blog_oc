import { Component, OnInit, Input } from '@angular/core';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})

export class PostComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() created_at: Date;

  constructor() { }

  ngOnInit() {
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
  getCreatedAt() {
    return this.created_at;
  }

  like() {
    // return this.loveIts + 1;
    return(this.loveIts = this.loveIts + 1);
  }

  dislike() {
    return (this.loveIts = this.loveIts - 1);
  }
}

