import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})

export class PostListItemComponent implements OnInit {

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

