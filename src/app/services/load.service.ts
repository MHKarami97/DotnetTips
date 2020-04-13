import { Injectable } from '@angular/core';
import { Setting } from '../setting';
import { PostService } from './post.service';

@Injectable({
  providedIn: 'root',
})
export class LoadService {

  constructor(private dataService: PostService) { }

  loadData() {
    this.dataService.get().subscribe(
      results => {
        Setting.dataList = results.ArrayOfPost.Post.sort((a, b) => parseInt(b.Id, 9) - parseInt(a.Id, 9));
      },
      error => {
        Setting.dataList = [];
      },
    );
  }
}
