import { MainService } from './../../../../service/main-service.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GenericDeleteConfirmationComponent } from '../modals';

@Component({
  selector: 'app-view-forum',
  templateUrl: './view-forum.component.html',
  styleUrls: ['./view-forum.component.scss']
})
export class ViewForumComponent implements OnInit {
  forums;
  setTimeProgress;
  fetchForumProgress = 10;

  constructor(private service: MainService, private modalService: NgbModal) { }

  ngOnInit() {
    this.viewForums();
  }

  viewForums() {
    this.fetchingForumProgress();
    this.service.listForums().subscribe((data: any) => {
      if (data) {
        this.forums = data.data;
        clearInterval(this.setTimeProgress);
      }
    });
  }

  fetchingForumProgress() {
    this.setTimeProgress = setInterval(() => {
      if (this.fetchForumProgress < 90) {
        this.fetchForumProgress += 10;
      }
    }, 1000);
  }

  openDeleteModal(forum) {
    this.openDelete('FORUM', forum);
  }

  openDelete(itemType, forum): void {
    const modalRef = this.modalService.open(GenericDeleteConfirmationComponent, {
      backdropClass: '',
      backdrop: 'static',
      keyboard: false
    });

    (modalRef.componentInstance as GenericDeleteConfirmationComponent).itemDeleting = forum.topic;
    (modalRef.componentInstance as GenericDeleteConfirmationComponent).itemType = itemType;
    modalRef.componentInstance.confirmed.subscribe(() => {
        this.deleteExpense(forum._id, modalRef);
    });
  }

  deleteExpense(id, modalRef) {
    this.service.deleteForum(id).subscribe(() => {
        if (modalRef) { modalRef.close(); }
        this.viewForums();
      },
      error => {
        if (modalRef) { modalRef.close(); }
      }
    );
}
}
