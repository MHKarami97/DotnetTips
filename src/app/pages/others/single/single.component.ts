import { PostData } from './../../../models/post/post.module';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Setting } from '../../../setting';

@Component({
  selector: 'ngx-single',
  styleUrls: ['./single.component.scss'],
  templateUrl: './single.component.html',
})
export class SingleComponent implements OnInit {

  item: PostData;
  id: string;

  constructor(private router: Router, public route: ActivatedRoute) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    this.item = Setting.dataList.find(a => a.Id === this.id);
  }
}
