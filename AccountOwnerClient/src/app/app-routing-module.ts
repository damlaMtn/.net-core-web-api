import { Home } from './home/home';
import { NotFound } from './error-pages/not-found/not-found';
import { InternalServer } from './error-pages/internal-server/internal-server';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'owner', loadChildren: () => import('./owner/owner-module').then(m => m.OwnerModule) },
  { path: '404', component: NotFound },
  { path: '500', component: InternalServer },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/404', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
