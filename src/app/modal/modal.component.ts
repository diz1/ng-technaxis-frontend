import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { PhotosService } from '../shared/photos.service';
import { ModalService } from '../shared/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styles: []
})

export class ModalComponent implements OnInit, AfterViewInit {

  @ViewChild('photo') photo: TemplateRef<any>;
  constructor(public photosService: PhotosService, public modalService: ModalService) { }

  ngOnInit(): void {
    // this.modalService.openPhotoModal(this.photo);
  }

  ngAfterViewInit(): void {
    // this.modalService.openPhotoModal(this.photo);
  }

  test(e): void {
    console.dir(e);
  }
}
