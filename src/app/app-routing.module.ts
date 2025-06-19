import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main-apps/layout/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'apps',
    component: MainLayoutComponent,
    loadChildren: () => import('./main-apps/main-apps.module').then(m => m.MainAppsModule)
  },
  { //must be at last, for an unexsisting page
    path: '**',
    redirectTo: '/auth/notFound' // or design a page for it 404
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
