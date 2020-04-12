import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PostData } from '../../../models/post/post.module';

@Component({
  selector: 'ngx-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.scss'],
})
export class ListComponent {

  @Input() lists: PostData[];

  constructor(private router: Router) {
    // this.lists = Setting.dataList;
  }

  onClick(value: string) {
    this.router.navigate(['/pages/others/single', value]);
  }
}
