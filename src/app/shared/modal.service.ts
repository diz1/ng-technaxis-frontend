import { Injectable, TemplateRef} from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { combineLatest, Subscription } from 'rxjs';
import { PhotosService } from './photos.service';

@Injectable({providedIn: 'root'})

export class ModalService {
  photoModalRef: BsModalRef;
  shareModalRef: BsModalRef;
  infoModalRef: BsModalRef;
  subscriptions: Subscription[] = [];

  constructor(private modalService: BsModalService, public photoService: PhotosService) {}

  openPhotoModal(template: TemplateRef<any>): void {
    const combine = combineLatest(
      this.modalService.onShow,
      this.modalService.onShown,
      this.modalService.onHide,
      this.modalService.onHidden
    ).subscribe();

    this.subscriptions.push(
      this.modalService.onShow.subscribe(() => {
        // onShow logic
      })
    );
    this.subscriptions.push(
      this.modalService.onShown.subscribe(() => {
        // onShown logic
      })
    );
    this.subscriptions.push(
      this.modalService.onHide.subscribe(() => {
        // onHide logic
      })
    );

    this.subscriptions.push(
      this.modalService.onHidden.subscribe((reason: string | any) => {
        if (+reason.id === 1) {
          this.photoService.photo = null;
          this.unsubscribe();
        }
      })
    );

    this.subscriptions.push(combine);

    this.photoModalRef = this.modalService.show(template, {
      id: 1,
      class: 'modal-dialog modal-xl ',
      ignoreBackdropClick: true,
      keyboard: false
    });
  }
  openShareModal(template: TemplateRef<any>): void {
    this.shareModalRef = this.modalService.show(template, {
      id: 2,
      class: 'modal-dialog modal-dialog-centered share',
      ignoreBackdropClick: true,
      keyboard: false
    });
  }
  openInfoModal(template: TemplateRef<any>): void {
    this.infoModalRef = this.modalService.show(template, {
      id: 3,
      class: 'modal-dialog modal-dialog-centered info',
      ignoreBackdropClick: true,
      keyboard: false
    });
  }
  closeModal(modalId?: number): void {
    this.modalService.hide(modalId);
  }
  unsubscribe(): void {
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
    this.subscriptions = [];
  }
}
