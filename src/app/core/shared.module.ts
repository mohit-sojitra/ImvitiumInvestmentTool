import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from '../layout/loading-spinner/loading-spinner.component';
import { HeaderComponent } from '../layout/header/header.component';
import { FooterComponent } from '../layout/footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, LoadingSpinnerComponent,FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [HeaderComponent, LoadingSpinnerComponent,FooterComponent]
})
export class SharedModule { }
