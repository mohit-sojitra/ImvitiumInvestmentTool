import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { newsModel } from '../../interfaces/news.model';
import { AdminService } from '../../services/admin.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLoading = false;
  newsList: newsModel[] = [];
  youtubeLink: any;
  constructor(private adminService: AdminService,private dom: DomSanitizer) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.adminService.getYoutubeLink().subscribe((res) => {
      this.isLoading = false;
      console.log(res);
      this.youtubeLink = this.dom.bypassSecurityTrustResourceUrl(res);
      //this.youtubeLink = 
    });
    this.isLoading = true;
    this.adminService.getUpdates().subscribe((res) => {
      this.isLoading = false;
      this.newsList = res;
    });
  }


}
