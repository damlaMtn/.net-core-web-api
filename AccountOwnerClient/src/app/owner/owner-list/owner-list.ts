import { Component, OnInit } from '@angular/core';

import { Owner } from './../../_interfaces/owner.model';
import { OwnerRepositoryService } from './../../shared/services/owner-repository';
import { ErrorHandlerService } from './../../shared/services/error-handler';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-owner-list',
  standalone: false,
  templateUrl: './owner-list.html',
  styleUrl: './owner-list.css'
})
export class OwnerList implements OnInit {
  owners: Owner[];
  errorMessage: string = '';
  constructor(private repository: OwnerRepositoryService, private errorHandler: ErrorHandlerService,
    private router: Router) { }
  ngOnInit(): void {
    this.getAllOwners();
  }
  private getAllOwners = () => {
    const apiAddress: string = 'api/owner';
    this.repository.getOwners(apiAddress)
      .subscribe({
        next: (own: Owner[]) => this.owners = own,
        error: (err: HttpErrorResponse) => {
          this.errorHandler.handleError(err);
          this.errorMessage = this.errorHandler.errorMessage;
        }
      })
  }

  public getOwnerDetails = (id) => {
    const detailsUrl: string = `/owner/details/${id}`;
    this.router.navigate([detailsUrl]);
  }
}