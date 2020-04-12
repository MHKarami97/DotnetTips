import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../models/user/user.module';
import { Setting } from '../../../setting';

@Component({
  selector: 'ngx-user-list',
  templateUrl: 'user-list.component.html',
  styleUrls: ['user-list.component.scss'],
})
export class UserListComponent {

  lists: User[];

  constructor(private router: Router) {
    this.lists = Setting.dataList.map(a => a.User).filter((thing, index, self) =>
      index === self.findIndex((t) => (
        t.Id === thing.Id
      )),
    );
  }

  onClick(id: string) {

    this.router.navigate(['/pages/others/post-list', id, '1']);
  }
}
