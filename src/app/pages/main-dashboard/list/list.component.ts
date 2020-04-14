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
  loading = true;

  constructor(private router: Router) {
    // this.lists = Setting.dataList;
  }

  finishFanc() {
    this.loading = false;
  }

  onClick(value: string) {
    this.router.navigate(['/pages/others/single', value]);
  }
}
