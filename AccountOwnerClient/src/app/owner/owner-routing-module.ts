import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OwnerList } from './owner-list/owner-list';
import { OwnerDetailsComponent } from './owner-details/owner-details';

const routes: Routes = [
  { path:'list', component: OwnerList },
  { path: 'details/:id', component: OwnerDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
