import { Component, OnInit } from '@angular/core';
import { NbToastrService, NbGlobalPhysicalPosition } from '@nebular/theme';
import { PostService } from '../../services/post.service';
import { PostData } from '../../models/post/post.module';
import { Setting } from '../../setting';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './main-dashboard.component.html',
})
export class MainDashboardComponent implements OnInit {

  loading = false;
  error = null;
  data: PostData[];
  last: PostData;

  constructor(private dataService: PostService, private toastrService: NbToastrService) {
  }

  ngOnInit(): void {

    if (!Setting.dataList) {
      this.loading = true;
      this.onLoad();
      this.dataService.get().subscribe(
        results => {
          this.data = results.ArrayOfPost.Post.sort((a, b) => parseInt(b.Id, 9) - parseInt(a.Id, 9));
          this.last = this.data[0];
          Setting.dataList = this.data;
        },
        error => {
          this.error = error.message;
          this.onError();
        },
      );
      this.loading = false;
    } else {
      this.data = Setting.dataList;
      this.last = this.data[0];
    }
  }

  onError() {
    const config = {
      destroyByClick: true,
      duration: 5000,
      hasIcon: true,
      position: NbGlobalPhysicalPosition.BOTTOM_RIGHT,
      preventDuplicates: true,
    };

    this.toastrService.danger(
      this.error,
      'خطا',
      config);
  }

  onLoad() {
    const config = {
      destroyByClick: false,
      duration: 4000,
      hasIcon: true,
      position: NbGlobalPhysicalPosition.BOTTOM_RIGHT,
      preventDuplicates: true,
    };

    this.toastrService.warning(
      'لطفا صبر کنید ...',
      'نکته',
      config);
  }
}
