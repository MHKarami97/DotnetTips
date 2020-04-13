import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Setting } from '../../../setting';
import { Tag } from '../../../models/more/tag.module';

@Component({
  selector: 'ngx-tag-list',
  templateUrl: 'tag-list.component.html',
  styleUrls: ['tag-list.component.scss'],
})
export class TagListComponent {

  lists: Tag[] = [];

  constructor(private router: Router) {
    this.tagListCreator();
  }

  tagListCreator() {
    for (const entry of Setting.dataList) {

      if (entry.Tags?.Tag) {
        for (const item of entry.Tags.Tag) {

          this.lists.push(
            {
              Id: item.Id,
              Name: item.Name,
            });

          this.lists = this.lists.filter((test, index, array) =>
            index === array.findIndex((findTest) =>
              findTest.Id === test.Id,
            ),
          );
        }
      }
    }
  }

  onClick(id: string) {

    this.router.navigate(['/posts', id, '2']);
  }
}
