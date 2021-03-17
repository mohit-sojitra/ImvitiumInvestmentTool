import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { newsModel } from 'src/app/interfaces/news.model';
import { AdminService } from 'src/app/services/admin.service';
@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  newsList: newsModel[] = [];
  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.adminService.getUpdates().subscribe((res) => {
      this.newsList = res;
    });
  }

}
