import {Component, OnInit, ViewChild, TemplateRef} from '@angular/core';
import {Photo, PhotosService} from '../shared/photos.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styles: [
  ]
})
export class ContentComponent implements OnInit {
  @ViewChild('button') button: TemplateRef<any>;
  @ViewChild('photoModal') photoModal: any;
  contentLoading = true;
  test = [];

  constructor(public photoService: PhotosService) { }

  ngOnInit(): void {
    if (this.photoService.queryToSearch) {
      this.contentLoading = false;
      return;
    }
    this.photoService.fetchPhotos().subscribe(() => {
      this.contentLoading = false;
    });
  }

  openModal(photo: Photo): void {
    this.photoService.photo = photo;
    this.photoModal.modalService.openPhotoModal(this.photoModal.photo);
  }

}
