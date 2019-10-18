import { Component, ChangeDetectionStrategy, EventEmitter, Input, Output, ViewChild, ElementRef } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    template: `
    <div class="modal-header">
      <h5 class="modal-title" id="modal-basic-title">DELETE {{ itemType }} </h5>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body text-center">
      <p class="delete__warning">Are you sure you want to delete &nbsp;
        <br>
        <span class="text-primary">{{ itemDeleting }}</span>?
      </p>
    </div>
    <div class="modal-footer" style="border-top: 1px solid #dee2e6;">
      <span *ngIf="loading">
        <i class="fa fa-spinner fa-spin"></i>
      </span>
      <span *ngIf="message">
        {{ message }}
      </span>
      <button type="button" class="btn btn-light"
      (click)="activeModal.close('Cancel click')"
      [disabled]="loading"
      ngbAutoFocus>Cancel</button>
      <button type="button" class="btn btn-danger"
      [disabled]="loading"
      (click)="delete()">Delete</button>
    </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GenericDeleteConfirmationComponent {
    @Input() itemType: string;
    @Input() itemDeleting: string;
    @Input() message: string;
    @Output() confirmed: EventEmitter<void> = new EventEmitter();
    loading = false;
    constructor(public activeModal: NgbActiveModal) { }

    delete(): void {
        this.loading = true;
        this.confirmed.emit();
    }
}

export const modals: any[] = [
    GenericDeleteConfirmationComponent,
];
