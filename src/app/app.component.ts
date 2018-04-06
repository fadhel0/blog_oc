import { Component } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  posts = [
    {
      post1: new PostListComponent('Mon premier post',
        'Ad qui mollit reprehenderit ad eu id amet dolor sunt sit laborum. ' +
        'Nostrud amet officia laboris laboris veniam esse dolore ullamco aliquip consequat sit.' +
        'Est qui veniam excepteur consequat Lorem eu exercitation consequat in laborum laborum sint.' +
        'Sint ullamco Lorem nulla commodo ullamco laboris proident consectetur quis laborum ex.',
        0,
        new Date())
    },

    {
      post2: new PostListComponent('Mon premier post',
        'Ad qui mollit reprehenderit ad eu id amet dolor sunt sit laborum. ' +
        'Nostrud amet officia laboris laboris veniam esse dolore ullamco aliquip consequat sit.' +
        'Est qui veniam excepteur consequat Lorem eu exercitation consequat in laborum laborum sint.' +
        'Sint ullamco Lorem nulla commodo ullamco laboris proident consectetur quis laborum ex.',
        0,
        new Date())
    },

    {
      post3: new PostListComponent('Mon premier post',
        'Ad qui mollit reprehenderit ad eu id amet dolor sunt sit laborum. ' +
        'Nostrud amet officia laboris laboris veniam esse dolore ullamco aliquip consequat sit.' +
        'Est qui veniam excepteur consequat Lorem eu exercitation consequat in laborum laborum sint.' +
        'Sint ullamco Lorem nulla commodo ullamco laboris proident consectetur quis laborum ex.',
        0,
        new Date())
    }
  ];
}
