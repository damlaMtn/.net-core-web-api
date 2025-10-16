import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing-module';
import { OwnerList } from './owner-list/owner-list';
import { OwnerDetails } from './owner-details/owner-details';


@NgModule({
  declarations: [
    OwnerList,
    OwnerDetails
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule
  ]
})
export class OwnerModule { }
