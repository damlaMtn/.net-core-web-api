import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing-module';
import { OwnerList } from './owner-list/owner-list';
import { OwnerDetailsComponent } from './owner-details/owner-details';
import { OwnerAccountsComponent } from './owner-details/owner-accounts/owner-accounts';
import { SharedModule } from '../shared/shared-module';


@NgModule({
  declarations: [
    OwnerList,
    OwnerDetailsComponent,
    OwnerAccountsComponent
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    SharedModule
  ]
})
export class OwnerModule { }
