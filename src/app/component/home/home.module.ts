import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from 'src/app/layout/footer/footer.component';
import { SharedModule } from 'src/app/shared.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    SharedModule,
    CommonModule, 
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
      },
    ]),
  ],

})
export class HomeModule {}
