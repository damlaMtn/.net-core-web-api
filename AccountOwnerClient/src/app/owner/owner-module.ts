import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing-module';
import { OwnerList } from './owner-list/owner-list';


@NgModule({
  declarations: [
    OwnerList
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule
  ]
})
export class OwnerModule { }
