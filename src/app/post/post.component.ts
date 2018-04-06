import { Component, OnInit, Input } from '@angular/core';

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
}

