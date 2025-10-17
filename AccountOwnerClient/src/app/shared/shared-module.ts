import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';

import { ErrorModal } from './modals/error-modal/error-modal';
import { SuccessModalComponent } from './modals/success-modal/success-modal';
import { AppendDirective } from './directives/append';


@NgModule({
  declarations: [
    ErrorModal,
    SuccessModalComponent,
    AppendDirective
  ],
  imports: [
    CommonModule,
    ModalModule.forRoot()
  ],
  exports: [
    ErrorModal
  ]
})
export class SharedModule { }
