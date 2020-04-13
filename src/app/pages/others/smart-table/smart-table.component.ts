import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Setting } from '../../../setting';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.scss'],
})
export class SmartTableComponent implements OnInit {

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
      User: {
        title: 'نویسنده',
        type: 'string',
        valuePrepareFunction: (item) => {
          return item.FriendlyName;
        },
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private router: Router) {

  }
  ngOnInit(): void {
    if (Setting.dataList) {
      const data = Setting.dataList;
      this.source.load(data);
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
        {
          field: 'User',
          search: query,
          valuePrepareFunction: (item) => {
            return item.FriendlyName;
          },
        },
      ], false, true);
    }
  }

  onClick(value: any) {
    this.router.navigate(['/pages/others/single', value.data.Id]);
  }
}
