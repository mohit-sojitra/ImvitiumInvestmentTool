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
  newsList: newsModel[] = [];
  youtubeLink: any;
  constructor(private adminService: AdminService,private dom: DomSanitizer) { }

  ngOnInit(): void {
    this.adminService.getYoutubeLink().subscribe((res) => {
      console.log(res);
      this.youtubeLink = this.dom.bypassSecurityTrustResourceUrl(res);
      //this.youtubeLink = 
    });
    this.adminService.getUpdates().subscribe((res) => {
      this.newsList = res;
    });
  }



}
