import { Component } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts = [
    {
      title : 'Mon premier post',
      content : 'Ad qui mollit reprehenderit ad eu id amet dolor sunt sit laborum. ' +
        'Nostrud amet officia laboris laboris veniam esse dolore ullamco aliquip consequat sit.' +
        'Est qui veniam excepteur consequat Lorem eu exercitation consequat in laborum laborum sint.' +
        'Sint ullamco Lorem nulla commodo ullamco laboris proident consectetur quis laborum ex.',
      loveIts : 1,
      created_at : new Date()
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
