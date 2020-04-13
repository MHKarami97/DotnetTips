import { PostData } from './../../../models/post/post.module';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Setting } from '../../../setting';
import { LoadService } from '../../../services/load.service';

@Component({
  selector: 'ngx-single',
  styleUrls: ['./single.component.scss'],
  templateUrl: './single.component.html',
})
export class SingleComponent implements OnInit {

  item: PostData;
  id: string;

  constructor(public route: ActivatedRoute, private loadService: LoadService) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    if (!Setting.dataList) {
      this.loadService.loadData();
    }

    this.item = Setting.dataList.find(a => a.Id === this.id);
  }

  loadData() {

  }
}
