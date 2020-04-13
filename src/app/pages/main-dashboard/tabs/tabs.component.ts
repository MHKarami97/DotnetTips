import { PostData } from './../../../models/post/post.module';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-tabs',
  styleUrls: ['./tabs.component.scss'],
  templateUrl: './tabs.component.html',
})
export class TabsComponent {

  @Input() item: PostData;

  constructor() {
    // this.item = Setting.dataList[0];
  }
}
