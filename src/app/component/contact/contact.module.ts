import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './contact.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ContactComponent,
      },
    ]),
  ],
})
export class ContactModule {}
