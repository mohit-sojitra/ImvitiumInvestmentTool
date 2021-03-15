import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AdminComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: AdminComponent,
      },
    ]),
    
  ]
})
export class AdminModule { }
