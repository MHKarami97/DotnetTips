import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingleComponent } from './single/single.component';
import { UserListComponent } from './user-list/user-list.component';
import { PostListComponent } from './post-list/post-list.component';
import { TagListComponent } from './tag-list/tag-list.component';
import { OthersComponent } from './others.component';
import { SmartTableComponent } from './smart-table/smart-table.component';

const routes: Routes = [{
  path: '',
  component: OthersComponent,
  children: [
    {
      path: 'user-list',
      component: UserListComponent,
    },
    {
      path: 'tag-list',
      component: TagListComponent,
    },
    {
      path: 'post-list/:id/:witch',
      component: PostListComponent,
    },
    {
      path: 'single/:id',
      component: SingleComponent,
    },
    {
      path: 'smart-table',
      component: SmartTableComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OthersRoutingModule { }

export const routedComponents = [
  OthersComponent,
  SingleComponent,
  UserListComponent,
  TagListComponent,
  PostListComponent,
  SmartTableComponent,
];
