import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Setting } from '../../../setting';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-post-list',
  templateUrl: 'post-list.component.html',
  styleUrls: ['post-list.component.scss'],
})
export class PostListComponent implements OnInit {

  id: string;
  witch: string;

  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false,
    },
    add: {
      addButtonContent: '<i class="nb-search"></i>',
      createButtonContent: '<i class="nb-search"></i>',
      cancelButtonContent: '<i class="nb-search"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      Id: {
        title: 'ID',
        type: 'string',
        editable: false,
      },
      Title: {
        title: 'عنوان',
        type: 'string',
      },
      CreatedOn: {
        title: 'تاریخ',
        type: 'string',
      },
    },
    pager: {
      perPage: 40,
    }
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.witch = this.route.snapshot.paramMap.get('witch');

    if (Setting.dataList) {
      if (this.witch === '1') {
        const data = Setting.dataList.filter(a => a.User.Id === this.id);
        this.source.load(data);

      } else if (this.witch === '2') {
        const data = Setting.dataList.filter(a => a.Tags.Tag.filter(b => b.Id === this.id));
        this.source.load(data);
      } else {
        const data = Setting.dataList;
        this.source.load(data);
      }
    }
  }

  onSearch(query: string = '') {
    if (query === '') {
      this.source.reset();
    } else {
      this.source.setFilter([
        {
          field: 'Title',
          search: query,
        },
        {
          field: 'CreatedOn',
          search: query,
        },
      ], false, true);
    }
  }

  onClick(value: any) {
    this.router.navigate(['/pages/others/single', value.data.Id]);
  }
}
