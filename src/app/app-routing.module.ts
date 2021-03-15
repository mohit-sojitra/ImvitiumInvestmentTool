import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './component/admin/admin.component';
import { EdituserComponent } from './component/edituser/edituser.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./component/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./component/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./component/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./component/contact/contact.module').then((m) => m.ContactModule),
  },
  {
    path: 'edituser',
    component: EdituserComponent,
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./component/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'feature',
    loadChildren: () =>
      import('./component/features/feature.module').then(
        (m) => m.FeatureModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
