import { PostData } from './../../../models/post/post.module';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Setting } from '../../../setting';

@Component({
  selector: 'ngx-single',
  styleUrls: ['./single.component.scss'],
  templateUrl: './single.component.html',
})
export class SingleComponent implements OnInit {

  item: PostData;
  id: string;

  constructor(public route: ActivatedRoute) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    this.item = Setting.dataList.find(a => a.Id === this.id);
    console.log(this.item);
    console.log(Array.isArray(Setting.dataList));
    console.log(Array.isArray(this.item.Comments));
    console.log(typeof this.item.Comments);
    console.log(Array.isArray(this.item.Tags));
    console.log(this.item.Comments);
    console.log(this.item.Comments?.Comment);
  }

  loadData(){

  }
}
