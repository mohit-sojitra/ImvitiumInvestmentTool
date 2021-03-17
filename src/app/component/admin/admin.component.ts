import { Component, NgModule, OnInit, ViewChild } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  FormsModule,
  NgForm,
  NgModel,
  Validators,
} from '@angular/forms';
import { newsModel } from './../../interfaces/news.model';
import { NotificationService } from '../../services/notification.service';
import { userlist, UserListModel } from '../../interfaces/userlist.model';
import { AdminService } from '../../services/admin.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  @ViewChild('UserEditForm') UserEditForm: NgForm;
  userEditMode: boolean = false;
  editinguser: userlist;
  totalSubscribeUser: number = 0;
  ind: number = -1;
  newsArray: FormArray;
  newsForm: FormGroup;
  searchData: string = '';
  userList: userlist[];
  usersData: UserListModel;
  numberOfPages: number;
  currentPage: number = 1;
  accountType: string = 'all';
  newsList: newsModel[] = [];
  youtubeLink: string;
  constructor(
    private adminService: AdminService,
    private NottificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.initform();
    this.adminService.getYoutubeLink().subscribe((res) => {
      console.log(res);
      this.youtubeLink = res;
    });
    this.getUserlist();
    this.adminService.getUpdates().subscribe((res) => {
      this.newsList = res;
      for (let news of res) {
        this.newsArray.push(
          new FormGroup({
            updates: new FormControl(
              { value: news.news_update, disabled: true },
              Validators.required
            ),
          })
        );
      }
    });
    this.adminService.getSubsribeUserList().subscribe((res) => {
      this.totalSubscribeUser = res;
    });
  }

  getUserlist(){
    this.adminService.getUserlist(1, '').subscribe((res) => {
      this.numberOfPages = res.data.last_page;
      this.userList = res.data.data;
    });
  }

  updateYoutubeLink() {
    this.adminService.setYoutubeLink(this.youtubeLink).subscribe((res) => {
      console.log(res);
    });
  }

  numSequence(): Array<number> {
    return Array(this.numberOfPages);
  }

  changePage(Pagenumber: number) {
    if (this.accountType === 'all') {
      this.adminService.getUserlist(Pagenumber, '').subscribe((res) => {
        this.currentPage = res.data.current_page;
        this.numberOfPages = res.data.last_page;
        this.userList = res.data.data;
        // console.log(res.data.data[0].email);
      });
    } else if (this.accountType === 'subscribe') {
      this.adminService
        .getUserlistByType(Pagenumber, '', 'subscribe')
        .subscribe((res) => {
          this.accountType = 'subscribe';
          this.currentPage = res.data.current_page;
          this.numberOfPages = res.data.last_page;
          this.userList = res.data.data;
        });
    } else if (this.accountType === 'unsubscribe') {
      this.adminService
        .getUserlistByType(Pagenumber, '', 'unsubscribe')
        .subscribe((res) => {
          console.log(res);

          this.accountType = 'unsubscribe';
          this.currentPage = res.data.current_page;
          this.numberOfPages = res.data.last_page;
          this.userList = res.data.data;
        });
    } else if (this.accountType === 'free') {
      this.adminService
        .getUserlistByType(Pagenumber, '', 'free')
        .subscribe((res) => {
          this.accountType = 'free';
          this.currentPage = res.data.current_page;
          this.numberOfPages = res.data.last_page;
          this.userList = res.data.data;
        });
    }
  }

  nextPage() {
    this.adminService.getUserlist(this.currentPage + 1, '').subscribe((res) => {
      this.currentPage = res.data.current_page;
      this.numberOfPages = res.data.last_page;
      this.userList = res.data.data;
      // console.log(res.data.data[0].email);
    });
  }

  getSubscribeUser() {
    this.adminService.getUserlistByType(1, '', 'subscribe').subscribe((res) => {
      this.accountType = 'subscribe';
      this.currentPage = res.data.current_page;
      this.numberOfPages = res.data.last_page;
      this.userList = res.data.data;
    });
  }

  getUnsubscribeUser() {
    this.adminService
      .getUserlistByType(1, '', 'unsubscribe')
      .subscribe((res) => {
        this.accountType = 'unsubscribe';
        this.currentPage = res.data.current_page;
        this.numberOfPages = res.data.last_page;
        this.userList = res.data.data;
      });
  }

  getFreeUser() {
    this.adminService.getUserlistByType(1, '', 'free').subscribe((res) => {
      this.accountType = 'free';
      this.currentPage = res.data.current_page;
      this.numberOfPages = res.data.last_page;
      this.userList = res.data.data;
    });
  }

  search() {
    if (this.accountType === 'all') {
      this.adminService.getUserlist(1, this.searchData).subscribe((res) => {
        this.currentPage = res.data.current_page;
        this.numberOfPages = res.data.last_page;
        this.userList = res.data.data;
        // console.log(res.data.data[0].email);
      });
    } else {
      this.adminService
        .getUserlistByType(1, this.searchData, this.accountType)
        .subscribe((res) => {
          // this.accountType = 'free';
          this.currentPage = res.data.current_page;
          this.numberOfPages = res.data.last_page;
          this.userList = res.data.data;
        });
    }
  }

  onEdit(i) {
    console.log(this.newsArray.length);

    this.ind = i;
    if (i >= this.newsList.length) {
      console.log('new');

      this.adminService
        .addUpdates(this.newsArray.controls[i].value['updates'])
        .subscribe(
          (res) => {
            this.newsArray.controls[i].disable();
            console.log(res);
          },
          (error) => {
            this.NottificationService.showError(
              'Something went wrong',
              'Please try again'
            );
          }
        );
    } else if (this.newsArray.controls[i].disabled) {
      console.log('new edit');
      this.newsArray.controls[i].enable();
    } else {
      console.log('update save');
      this.adminService
        .updateUpdates(
          this.newsList[i].id,
          this.newsArray.controls[i].value['updates']
        )
        .subscribe(
          (res) => {
            console.log(res);
            this.newsArray.controls[i].disable();
          },
          (error) => {
            this.newsArray.controls[i].enable();
            this.NottificationService.showError(
              'Something went wrong',
              'Please try again'
            );
          }
        );
    }
  }

  onDelete(i) {
    this.adminService.deleteUpdate(this.newsList[i].id).subscribe((res) => {
      console.log(res);
      this.newsArray.removeAt(i);
    });
  }

  onDeleteAll() {
    this.adminService.deleteAllUpdate().subscribe(
      (res) => {
        this.newsArray.clear();
        this.NottificationService.showSuccess(
          'All value has been deleted',
          'Success'
        );
      },
      (error) => {
        this.NottificationService.showError(
          'Something went wrong',
          'Please try again'
        );
      }
    );
  }

  showDialog(i: number) {
    this.userEditMode = true;
    this.editinguser = this.userList[i];

    console.log(this.UserEditForm);
    setTimeout(() => {
      this.UserEditForm.form.setValue({
        name: this.editinguser.name,
        email: this.editinguser.email,
        usertype: this.editinguser.account_type
      });
    });
  }
  onSubmitEditedUser() {
    console.log(this.UserEditForm);
    this.adminService.updateUser(this.editinguser.id,this.UserEditForm.value.usertype).subscribe(res=>{
      console.log(res);
      this.getUserlist();
      this.editinguser = null;
      this.userEditMode = false;
    },error=>{
      this.NottificationService.showError(
        'Something went wrong',
        'Please try again'
      );
    })
  }

  onAddnews() {
    this.newsArray.push(
      new FormGroup({
        updates: new FormControl(
          { value: '', disabled: false },
          Validators.required
        ),
      })
    );
  }

  get controls() {
    return (<FormArray>this.newsForm.get('news')).controls;
  }

  initform() {
    this.newsArray = new FormArray([]);

    this.newsForm = new FormGroup({
      news: this.newsArray,
    });
  }
}
