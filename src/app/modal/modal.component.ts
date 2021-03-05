import { Component, TemplateRef, ViewChild } from '@angular/core';
import { PhotosService } from '../shared/photos.service';
import { ModalService } from '../shared/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styles: []
})

export class ModalComponent {

  @ViewChild('photo') photo: TemplateRef<any>;
  constructor(public photosService: PhotosService, public modalService: ModalService) { }
}
