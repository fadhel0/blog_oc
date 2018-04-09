import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts = new Array();
  constructor() {
    this.posts = [
      {
        title: 'Mon premier post',
        content: 'Ad qui mollit reprehenderit ad eu id amet dolor sunt sit laborum. ' +
          'Nostrud amet officia laboris laboris veniam esse dolore ullamco aliquip consequat sit.' +
          'Est qui veniam excepteur consequat Lorem eu exercitation consequat in laborum laborum sint.' +
          'Sint ullamco Lorem nulla commodo ullamco laboris proident consectetur quis laborum ex.',
        loveIts: 1,
        created_at: new Date()
      },

      {
        title: 'Mon deuxieme post',
        content: 'Ad qui mollit reprehenderit ad eu id amet dolor sunt sit laborum. ' +
          'Nostrud amet officia laboris laboris veniam esse dolore ullamco aliquip consequat sit.' +
          'Est qui veniam excepteur consequat Lorem eu exercitation consequat in laborum laborum sint.' +
          'Sint ullamco Lorem nulla commodo ullamco laboris proident consectetur quis laborum ex.',
        loveIts: -1,
        created_at: new Date()
      },

      {
        title: 'Un autre post',
        content: 'Ad qui mollit reprehenderit ad eu id amet dolor sunt sit laborum. ' +
          'Nostrud amet officia laboris laboris veniam esse dolore ullamco aliquip consequat sit.' +
          'Est qui veniam excepteur consequat Lorem eu exercitation consequat in laborum laborum sint.' +
          'Sint ullamco Lorem nulla commodo ullamco laboris proident consectetur quis laborum ex.',
        loveIts: 0,
        created_at: new Date()
      },
    ];
  }

  ngOnInit() {
  }

}
