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

  lists: Tag[];

  constructor(private router: Router) {
    this.tagListCreator();
  }

  tagListCreator() {

    // const temp = Setting.dataList.map(a => a.Tags);

    // let newArr = [];

    // for (let i = 0; i < temp.length; i++) {
    //   newArr = newArr.concat(temp[i]);
    // }

    // this.lists = newArr;
    // console.log(newArr);
    // for (let entry of Setting.dataList) {
    //   console.log(entry);
    //   for (let item of entry.Tags) {
    //     console.log(item);

    //     if (item) {
    //       const newT = new Tag();
    //       newT.Id = item.Id;
    //       newT.Name = item.Name;

    //       this.lists.push(newT);
    //       this.lists = this.lists.filter((test, index, array) =>
    //         index === array.findIndex((findTest) =>
    //           findTest.Id === test.Id,
    //         ),
    //       );
    //     }

    //   }
    // }
  }

  onClick(id: string) {

    this.router.navigate(['/posts', id, '2']);
  }
}
