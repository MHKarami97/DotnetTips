import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Setting } from '../../../setting';
import { PostData } from '../../../models/post/post.module';

@Component({
  selector: 'ngx-post-list',
  templateUrl: 'post-list.component.html',
  styleUrls: ['post-list.component.scss'],
})
export class PostListComponent implements OnInit {

  id: string;
  witch: string;
  lists: PostData[];

  constructor(private router: Router, private route: ActivatedRoute) {
    this.id = this.router.getCurrentNavigation().extras.state.id;

    this.lists = Setting.dataList.filter(a => a.Id === this.id);
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.witch = this.route.snapshot.paramMap.get('witch');

    if (this.witch === '1') {
      this.lists = Setting.dataList.filter(a => a.User.Id === this.id);

    } else if (this.witch === '2') {
      this.lists = Setting.dataList.filter(a => a.Tags.Tag.filter(b => b.Id === this.id));
    } else {
      this.lists = Setting.dataList;
    }
  }

  onClick(id: string) {

    this.router.navigate(['/pages/others/single', id]);
  }
}
